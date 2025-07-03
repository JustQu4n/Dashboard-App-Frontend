import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const StatCard = ({ 
  title, 
  value, 
  icon: Icon, 
  trend, 
  trendValue,
  color = 'blue',
  className = "" 
}) => {
  const colorVariants = {
    blue: {
      bg: 'from-blue-500 to-blue-600',
      light: 'text-blue-100',
      icon: 'text-blue-200'
    },
    emerald: {
      bg: 'from-emerald-500 to-emerald-600',
      light: 'text-emerald-100',
      icon: 'text-emerald-200'
    },
    purple: {
      bg: 'from-purple-500 to-purple-600',
      light: 'text-purple-100',
      icon: 'text-purple-200'
    },
    orange: {
      bg: 'from-orange-500 to-orange-600',
      light: 'text-orange-100',
      icon: 'text-orange-200'
    }
  };

  const TrendIcon = trend === 'up' ? TrendingUp : TrendingDown;
  const trendColor = trend === 'up' ? 'text-green-400' : 'text-red-400';

  return (
    <div 
      className={`
        bg-gradient-to-r ${colorVariants[color].bg} 
        p-6 rounded-2xl text-white relative overflow-hidden
        hover:scale-105 transition-all duration-300 cursor-pointer
        shadow-lg hover:shadow-xl
        ${className}
      `}
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white/10 rounded-full"></div>
      <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-32 h-32 bg-white/5 rounded-full"></div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className={`p-3 bg-white/20 rounded-xl ${colorVariants[color].icon}`}>
            <Icon className="w-6 h-6" />
          </div>
          {trend && (
            <div className={`flex items-center gap-1 ${trendColor}`}>
              <TrendIcon className="w-4 h-4" />
              <span className="text-sm font-medium">{trendValue}</span>
            </div>
          )}
        </div>
        
        <div className="space-y-1">
          <h3 className={`text-lg font-semibold ${colorVariants[color].light}`}>
            {title}
          </h3>
          <p className="text-3xl font-bold text-white">
            {value}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
