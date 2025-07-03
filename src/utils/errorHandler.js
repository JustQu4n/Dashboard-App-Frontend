// Error handling utilities
export const handleApiError = (error) => {
  if (error.response) {
    // Server responded with error status
    const { status, data } = error.response;
    
    switch (status) {
      case 400:
        return data.message || 'Dữ liệu không hợp lệ';
      case 401:
        return 'Phiên đăng nhập đã hết hạn';
      case 403:
        return 'Bạn không có quyền truy cập';
      case 404:
        return 'Không tìm thấy tài nguyên';
      case 422:
        return data.message || 'Dữ liệu không hợp lệ';
      case 500:
        return 'Lỗi server, vui lòng thử lại sau';
      default:
        return data.message || 'Có lỗi xảy ra';
    }
  } else if (error.request) {
    // Network error
    return 'Không thể kết nối đến server';
  } else {
    // Other error
    return error.message || 'Có lỗi xảy ra';
  }
};

// Toast notification helper (có thể implement sau)
export const showError = (message) => {
  // Tạm thời dùng alert, sau này có thể thay bằng toast library
  alert(`❌ ${message}`);
};

export const showSuccess = (message) => {
  // Tạm thời dùng alert, sau này có thể thay bằng toast library
  alert(`✅ ${message}`);
};
