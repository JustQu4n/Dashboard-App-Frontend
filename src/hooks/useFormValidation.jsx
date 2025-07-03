import { useState } from 'react';

const useFormValidation = () => {
  const [errors, setErrors] = useState({});
  
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  const validatePassword = (password) => {
    return password.length >= 6;
  };
  
  const validateName = (name) => {
    return name.trim().length >= 2;
  };
  
  const validateAge = (age) => {
    return age >= 13 && age <= 120;
  };
  
  const validateForm = (formData, isLogin = false) => {
    const newErrors = {};
    
    // Validate name (chỉ cho registration)
    if (!isLogin && !validateName(formData.name)) {
      newErrors.name = "Tên phải có ít nhất 2 ký tự";
    }
    
    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = "Email không được để trống";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Email không hợp lệ";
    }
    
    // Validate password
    if (!formData.password.trim()) {
      newErrors.password = "Mật khẩu không được để trống";
    } else if (!validatePassword(formData.password)) {
      newErrors.password = "Mật khẩu phải có ít nhất 6 ký tự";
    }
    
    // Validate age (optional for registration)
    if (!isLogin && formData.age && !validateAge(formData.age)) {
      newErrors.age = "Tuổi phải từ 13 đến 120";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const clearErrors = () => {
    setErrors({});
  };
  
  const setFieldError = (field, message) => {
    setErrors(prev => ({
      ...prev,
      [field]: message
    }));
  };
  
  return { 
    errors, 
    validateForm, 
    clearErrors, 
    setFieldError,
    setErrors 
  };
};

export default useFormValidation;