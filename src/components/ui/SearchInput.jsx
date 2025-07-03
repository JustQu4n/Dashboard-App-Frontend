import React from 'react';
import { Search } from 'lucide-react';

const SearchInput = ({ 
  value, 
  onChange, 
  placeholder = "Tìm kiếm...",
  className = "" 
}) => {
  return (
    <div className={`relative ${className}`}>
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="
          w-full pl-10 pr-4 py-2 
          bg-white/20 backdrop-blur-sm border border-white/30 
          rounded-lg text-gray-700 placeholder-gray-500
          focus:bg-white/30 focus:border-white/50 focus:outline-none
          transition-all duration-200
        "
      />
    </div>
  );
};

export default SearchInput;
