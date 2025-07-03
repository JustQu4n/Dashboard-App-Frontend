import apiClient from './apiService';
import { API_ENDPOINTS } from '../utils/constants';

export const authService = {
  // Đăng nhập
  login: async (credentials) => {
    try {
      const response = await apiClient.post(API_ENDPOINTS.LOGIN, credentials);
      const { access_token, user } = response.data;
      
      console.log('Login response:', response.data);
      // Lưu token và user info vào localStorage
      const token = access_token; // Backend trả về access_token
      if (token) {
        localStorage.setItem('token', token);
        // Nếu không có user info từ response, tạo user object từ token hoặc email
        const userInfo = user || { email: credentials.email };
        localStorage.setItem('user', JSON.stringify(userInfo));
      }
      
      return { token, user: user || { email: credentials.email } };
    } catch (error) {
      throw error.response?.data || { message: 'Đăng nhập thất bại' };
    }
  },

  // Đăng ký
  register: async (userData) => {
    try {
      const response = await apiClient.post(API_ENDPOINTS.REGISTER, userData);
      const { access_token, user } = response.data;
      
      // Lưu token và user info vào localStorage
      const token = access_token; // Backend trả về access_token
      if (token) {
        localStorage.setItem('token', token);
        const userInfo = user || { email: userData.email, name: userData.name };
        localStorage.setItem('user', JSON.stringify(userInfo));
      }
      
      return { token, user: user || { email: userData.email, name: userData.name } };
    } catch (error) {
      throw error.response?.data || { message: 'Đăng ký thất bại' };
    }
  },

  // Đăng xuất
  logout: async () => {
    try {
      await apiClient.post(API_ENDPOINTS.LOGOUT);
    } catch (error) {
      // Vẫn xóa local data dù API call thất bại
      console.error('Logout API error:', error);
    } finally {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    }
  },

  // Lấy thông tin profile
  getProfile: async () => {
    try {
      const response = await apiClient.get(API_ENDPOINTS.USER_PROFILE);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Không thể tải thông tin profile' };
    }
  },

  // Kiểm tra token còn hợp lệ không
  validateToken: async () => {
    try {
      const response = await apiClient.get(API_ENDPOINTS.USER_PROFILE);
      return response.data;
    } catch (error) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      throw error;
    }
  }
};

export default authService;
