import React from 'react';

const SocialButton = ({ 
  icon: Icon, 
  provider, 
  onClick, 
  className = "" 
}) => {
  const providerStyles = {
    google: "bg-white/90 hover:bg-white text-gray-700 border border-gray-200 hover:border-gray-300",
    github: "bg-gray-900/90 hover:bg-gray-900 text-white border border-gray-700 hover:border-gray-600"
  };

  return (
    <button
      onClick={onClick}
      className={`
        w-full py-3 px-4 rounded-lg font-medium transition-all duration-300 
        flex items-center justify-center gap-3 backdrop-blur-sm
        hover:scale-105 hover:shadow-lg transform
        ${providerStyles[provider]}
        ${className}
      `}
    >
      <Icon className="w-5 h-5" />
      <span>Tiếp tục với {provider === 'google' ? 'Google' : 'GitHub'}</span>
    </button>
  );
};

export default SocialButton;
