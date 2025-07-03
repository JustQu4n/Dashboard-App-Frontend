import React from 'react';

const ModernCheckbox = ({ 
  id,
  checked, 
  onChange, 
  label, 
  required = false,
  className = "" 
}) => {
  return (
    <div className={`flex items-start gap-3 ${className}`}>
      <div className="relative flex items-center">
        <input
          type="checkbox"
          id={id}
          checked={checked}
          onChange={onChange}
          required={required}
          className="sr-only"
        />
        <div 
          className={`
            w-5 h-5 rounded border-2 transition-all duration-200 cursor-pointer
            flex items-center justify-center
            ${checked 
              ? 'bg-gradient-to-r from-emerald-500 to-teal-500 border-emerald-500' 
              : 'bg-white/50 border-gray-300 hover:border-gray-400'
            }
          `}
          onClick={() => onChange({ target: { checked: !checked } })}
        >
          {checked && (
            <svg 
              className="w-3 h-3 text-white" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path d="M5 13l4 4L19 7"></path>
            </svg>
          )}
        </div>
      </div>
      
      <label 
        htmlFor={id}
        className="text-sm text-gray-600 cursor-pointer leading-5 select-none"
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
    </div>
  );
};

export default ModernCheckbox;
