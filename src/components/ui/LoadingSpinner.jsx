import React from 'react';

const LoadingSpinner = ({ 
  size = 'md', 
  color = 'blue',
  className = "",
  message,
  fullScreen = false
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  };

  const colorClasses = {
    blue: 'border-blue-500',
    white: 'border-white',
    emerald: 'border-emerald-500',
    purple: 'border-purple-500'
  };

  const spinner = (
    <div 
      className={`
        ${sizeClasses[size]} 
        border-2 ${colorClasses[color]} border-t-transparent 
        rounded-full animate-spin
        ${className}
      `}
    ></div>
  );

  if (fullScreen) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">{message || 'Đang tải...'}</p>
        </div>
      </div>
    );
  }

  if (message) {
    return (
      <div className="text-center">
        {spinner}
        <p className="text-gray-600 text-sm mt-2">{message}</p>
      </div>
    );
  }

  return spinner;
};

export default LoadingSpinner;
