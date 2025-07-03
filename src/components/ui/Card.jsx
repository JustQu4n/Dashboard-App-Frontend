import React from 'react';

const Card = ({ children, className = "" }) => {
  return (
    <div className={`bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 ${className}`}>
      {children}
    </div>
  );
};

export default Card;