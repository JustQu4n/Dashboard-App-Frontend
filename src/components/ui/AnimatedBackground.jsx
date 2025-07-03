import React from 'react';

const AnimatedBackground = ({ variant = 'blue' }) => {
  const gradientVariants = {
    blue: 'from-blue-400/30 via-purple-400/30 to-indigo-400/30',
    emerald: 'from-emerald-400/30 via-teal-400/30 to-cyan-400/30',
    purple: 'from-purple-400/30 via-pink-400/30 to-rose-400/30'
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Animated blob background */}
      <div className="absolute inset-0">
        <div className={`absolute top-0 -left-4 w-72 h-72 bg-gradient-to-r ${gradientVariants[variant]} rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob`}></div>
        <div className={`absolute top-0 -right-4 w-72 h-72 bg-gradient-to-r ${gradientVariants[variant]} rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000`}></div>
        <div className={`absolute -bottom-8 left-20 w-72 h-72 bg-gradient-to-r ${gradientVariants[variant]} rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000`}></div>
      </div>
      
      {/* Glass gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradientVariants[variant]} opacity-30`}></div>
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>
    </div>
  );
};

export default AnimatedBackground;
