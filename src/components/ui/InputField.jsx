import React from 'react';
import { Eye, EyeOff } from 'lucide-react';

const InputField = ({ 
  type = "text", 
  placeholder, 
  value, 
  onChange, 
  icon: Icon,
  showPasswordToggle = false,
  onTogglePassword,
  showPassword = false,
  error,
  required = false
}) => {
  return (
    <div className="relative mb-4">
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 z-10" />
        )}
        <input
          type={showPasswordToggle ? (showPassword ? "text" : "password") : type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className={`
            w-full ${Icon ? 'pl-10' : 'pl-4'} ${showPasswordToggle ? 'pr-12' : 'pr-4'} py-3 
            bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg 
            text-gray-700 placeholder-gray-500
            focus:bg-white/30 focus:border-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/30
            hover:bg-white/25 hover:border-white/40
            transition-all duration-200
            ${error ? 'border-red-400/60 focus:border-red-500 focus:ring-red-500/30' : ''}
          `}
        />
        {showPasswordToggle && (
          <button
            type="button"
            onClick={onTogglePassword}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors z-10"
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        )}
      </div>
      {error && (
        <p className="text-red-500 text-sm mt-1 bg-red-50/80 px-2 py-1 rounded backdrop-blur-sm">
          {error}
        </p>
      )}
    </div>
  );
};

export default InputField;