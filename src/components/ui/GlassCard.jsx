import React from 'react';

const GlassCard = ({ 
  children, 
  className = "",
  hover = true,
  padding = "p-6"
}) => {
  return (
    <div 
      className={`
        bg-white/10 backdrop-blur-md border border-white/20 
        rounded-2xl shadow-xl backdrop-saturate-150
        ${hover ? 'hover:bg-white/15 hover:border-white/30 hover:shadow-2xl ' : ''}
        transition-all duration-300 ease-out
        ${padding}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default GlassCard;
