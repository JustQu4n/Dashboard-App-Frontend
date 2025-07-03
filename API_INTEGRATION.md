# API Integration Guide

## Tổng quan
Ứng dụng đã được tích hợp với backend API tại `http://localhost:3000`. Các endpoint được hỗ trợ:

## API Endpoints

### Authentication
- `POST /auth/login` - Đăng nhập
- `POST /auth/register` - Đăng ký  
- `POST /auth/logout` - Đăng xuất
- `GET /auth/profile` - Lấy thông tin profile

## Cấu trúc Request/Response

### Login
**Request:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "token": "jwt_token_here",
  "user": {
    "id": 1,
    "email": "user@example.com",
    "name": "User Name"
  }
}
```

### Register
**Request:**
```json
{
  "name": "User Name",
  "email": "user@example.com", 
  "password": "password123",
  "age": 25
}
```

**Response:**
```json
{
  "token": "jwt_token_here",
  "user": {
    "id": 1,
    "email": "user@example.com",
    "name": "User Name",
    "age": 25
  }
}
```

### Profile
**Response:**
```json
{
  "user": {
    "id": 1,
    "email": "user@example.com",
    "name": "User Name",
    "age": 25,
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
}
```

## Features đã implement

### Authentication Management
- ✅ Tự động lưu JWT token vào localStorage
- ✅ Tự động gắn token vào header của mọi request
- ✅ Tự động redirect khi token hết hạn
- ✅ Validate token khi ứng dụng khởi động

### Error Handling
- ✅ Xử lý các loại lỗi API (400, 401, 403, 404, 500)
- ✅ Hiển thị thông báo lỗi user-friendly
- ✅ Xử lý lỗi network/timeout

### UI/UX Improvements
- ✅ Loading states cho tất cả API calls
- ✅ Loading spinner khi kiểm tra authentication
- ✅ Success/Error notifications

## Cách chạy

1. Đảm bảo backend đang chạy tại `http://localhost:3000`
2. Chạy frontend:
```bash
npm run dev
```

## Cấu hình

Để thay đổi base URL của API, chỉnh sửa file `src/utils/constants.js`:

```javascript
export const API_CONFIG = {
  BASE_URL: 'http://your-api-url',
  TIMEOUT: 10000
};
```

## Token Management

- Token được lưu tự động vào `localStorage` với key `token`
- User info được lưu vào `localStorage` với key `user`
- Token tự động được gắn vào header `Authorization: Bearer <token>`
- Khi token hết hạn (401), user sẽ được redirect về trang login

## Error Codes

- `400` - Bad Request (dữ liệu không hợp lệ)
- `401` - Unauthorized (token hết hạn hoặc không hợp lệ)
- `403` - Forbidden (không có quyền truy cập)
- `404` - Not Found (endpoint không tồn tại)
- `422` - Validation Error (lỗi validate dữ liệu)
- `500` - Internal Server Error (lỗi server)

## Development Notes

- File `src/services/apiService.js` chứa axios configuration
- File `src/services/authService.js` chứa các API calls cho authentication
- File `src/utils/errorHandler.js` chứa logic xử lý lỗi
- Context `src/context/AuthContext.jsx` quản lý state authentication
