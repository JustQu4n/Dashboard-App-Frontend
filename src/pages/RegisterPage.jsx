import React, { useState } from 'react';
import { User, Mail, Lock, UserPlus, Calendar, Github } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import useFormValidation from '../hooks/useFormValidation';
import Button from '../components/ui/Button';
import InputField from '../components/ui/InputField';
import SocialButton from '../components/ui/SocialButton';
import GlassCard from '../components/ui/GlassCard';
import AnimatedBackground from '../components/ui/AnimatedBackground';
import ModernCheckbox from '../components/ui/ModernCheckbox';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import { ROUTES } from '../utils/constants';
import { handleApiError, showError, showSuccess } from '../utils/errorHandler';

const RegisterPage = ({ navigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    age: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const { errors, validateForm } = useFormValidation();
  const { register } = useAuth();
  
  const handleSubmit = async () => {
    if (!agreeToTerms) {
      showError('Bạn phải đồng ý với điều khoản và điều kiện');
      return;
    }

    const submitData = {
      ...formData,
      age: formData.age ? parseInt(formData.age) : undefined
    };
    
    if (!validateForm(submitData)) return;
    
    setLoading(true);
    
    try {
      await register(submitData);
      showSuccess('Đăng ký thành công!');
      navigate(ROUTES.DASHBOARD);
    } catch (error) {
      const errorMessage = handleApiError(error);
      showError(errorMessage);
    } finally {
      setLoading(false);
    }
  };
  
  const handleChange = (field) => (e) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };

  const handleSocialLogin = (provider) => {
    // TODO: Implement social login
    console.log(`Register with ${provider}`);
  };

  // Mock Google icon component
  const GoogleIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  );
  
  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground variant="emerald" />
      
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <GlassCard className="p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg animate-pulse">
                <UserPlus className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-2">
                Đăng Ký
              </h1>
              <p className="text-gray-600">Tạo tài khoản mới của bạn</p>
            </div>

            {/* Social Login */}
            <div className="space-y-3 mb-6">
              <SocialButton
                icon={GoogleIcon}
                provider="google"
                onClick={() => handleSocialLogin('google')}
              />
              <SocialButton
                icon={Github}
                provider="github"
                onClick={() => handleSocialLogin('github')}
              />
            </div>

            {/* Divider */}
            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300/50"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white/80 text-gray-500 rounded-full">Hoặc đăng ký với email</span>
              </div>
            </div>
            
            {/* Form */}
            <div className="space-y-5">
              <InputField
                placeholder="Họ và tên"
                value={formData.name}
                onChange={handleChange('name')}
                icon={User}
                error={errors.name}
                required
              />
              
              <InputField
                type="email"
                placeholder="Email của bạn"
                value={formData.email}
                onChange={handleChange('email')}
                icon={Mail}
                error={errors.email}
                required
              />
              
              <InputField
                placeholder="Mật khẩu"
                value={formData.password}
                onChange={handleChange('password')}
                icon={Lock}
                showPasswordToggle
                showPassword={showPassword}
                onTogglePassword={() => setShowPassword(!showPassword)}
                error={errors.password}
                required
              />
              
              <InputField
                type="number"
                placeholder="Tuổi (tùy chọn)"
                value={formData.age}
                onChange={handleChange('age')}
                icon={Calendar}
                error={errors.age}
              />

              {/* Terms and Conditions */}
              <ModernCheckbox
                id="terms"
                checked={agreeToTerms}
                onChange={(e) => setAgreeToTerms(e.target.checked)}
                label={
                  <span>
                    Tôi đồng ý với{' '}
                    <button className="text-emerald-600 hover:text-emerald-700 hover:underline">
                      Điều khoản và Điều kiện
                    </button>
                    {' '}và{' '}
                    <button className="text-emerald-600 hover:text-emerald-700 hover:underline">
                      Chính sách Bảo mật
                    </button>
                  </span>
                }
                required
              />
              
              <Button
                onClick={handleSubmit}
                loading={loading}
                icon={loading ? null : UserPlus}
                className="transform hover:scale-105 transition-all duration-200 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700"
              >
                {loading ? (
                  <div className="flex items-center gap-2">
                    <LoadingSpinner size="sm" color="white" />
                    Đang đăng ký...
                  </div>
                ) : (
                  'Đăng Ký'
                )}
              </Button>
            </div>
            
            {/* Login Link */}
            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Đã có tài khoản?{' '}
                <button
                  onClick={() => navigate(ROUTES.LOGIN)}
                  className="text-emerald-600 hover:text-emerald-700 font-medium hover:underline transition-colors"
                >
                  Đăng nhập ngay
                </button>
              </p>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
