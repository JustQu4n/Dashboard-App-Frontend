// API Configuration
export const API_CONFIG = {
  BASE_URL: '', // Sử dụng proxy, không cần base URL
  TIMEOUT: 10000
};

// API endpoints
export const API_ENDPOINTS = {
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  LOGOUT: '/auth/logout',
  USER_PROFILE: '/auth/profile'
};

// Routes
export const ROUTES = {
  LOGIN: '/login',
  REGISTER: '/register',
  DASHBOARD: '/dashboard',
  PROFILE: '/profile'
};

// Form validation rules
export const VALIDATION_RULES = {
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PASSWORD_MIN_LENGTH: 6,
  NAME_MIN_LENGTH: 2,
  AGE_MIN: 13,
  AGE_MAX: 120
};

// Loading delays (for simulation)
export const LOADING_DELAYS = {
  LOGIN: 1500,
  REGISTER: 1500,
  LOGOUT: 500
};

// UI Constants
export const UI_CONFIG = {
  ANIMATION_DURATION: 200,
  TOAST_DURATION: 3000,
  DEBOUNCE_DELAY: 300
};

// Error messages
export const ERROR_MESSAGES = {
  REQUIRED_FIELD: 'Trường này không được để trống',
  INVALID_EMAIL: 'Email không hợp lệ',
  WEAK_PASSWORD: 'Mật khẩu phải có ít nhất 6 ký tự',
  INVALID_NAME: 'Tên phải có ít nhất 2 ký tự',
  INVALID_AGE: 'Tuổi phải từ 13 đến 120',
  LOGIN_FAILED: 'Đăng nhập thất bại',
  REGISTRATION_FAILED: 'Đăng ký thất bại',
  NETWORK_ERROR: 'Lỗi kết nối mạng'
};

// Success messages
export const SUCCESS_MESSAGES = {
  LOGIN_SUCCESS: 'Đăng nhập thành công!',
  REGISTRATION_SUCCESS: 'Đăng ký thành công!',
  LOGOUT_SUCCESS: 'Đăng xuất thành công!'
};