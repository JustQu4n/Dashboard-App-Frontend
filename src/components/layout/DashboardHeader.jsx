import React, { useState } from 'react';
import { LogOut, User, Settings } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import SearchInput from '../ui/SearchInput';
import NotificationBell from '../ui/NotificationBell';
import GlassCard from '../ui/GlassCard';

const DashboardHeader = ({ onLogout }) => {
  const { user } = useAuth();
  const [searchValue, setSearchValue] = useState('');
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // Mock notifications data
  const notifications = [
    {
      title: "Chào mừng!",
      message: "Bạn đã đăng nhập thành công vào hệ thống.",
      time: "5 phút trước",
      read: false
    },
    {
      title: "Cập nhật hệ thống",
      message: "Hệ thống đã được cập nhật với các tính năng mới.",
      time: "1 giờ trước",
      read: true
    }
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/10 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Title */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Dashboard
            </h1>
          </div>

          {/* Search */}
          <div className="flex-1 max-w-lg mx-8">
            <SearchInput
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Tìm kiếm..."
            />
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* Notifications */}
            <NotificationBell notifications={notifications} />

            {/* User Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center gap-2 p-2 hover:bg-white/20 rounded-lg transition-all duration-200"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-700 font-medium hidden sm:block">
                  {user?.email?.split('@')[0] || 'User'}
                </span>
              </button>

              {isProfileOpen && (
                <>
                  {/* Backdrop */}
                  <div 
                    className="fixed inset-0 z-10" 
                    onClick={() => setIsProfileOpen(false)}
                  ></div>
                  
                  {/* Dropdown */}
                  <div className="absolute right-0 top-full mt-2 w-48 z-20">
                    <GlassCard padding="p-2">
                      <div className="p-3 border-b border-white/20">
                        <p className="text-sm font-medium text-gray-800">{user?.email}</p>
                        <p className="text-xs text-gray-500">Người dùng</p>
                      </div>
                      
                      <div className="py-1">
                        <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-white/20 rounded transition-colors">
                          <Settings className="w-4 h-4" />
                          Cài đặt
                        </button>
                        <button 
                          onClick={onLogout}
                          className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50/50 rounded transition-colors"
                        >
                          <LogOut className="w-4 h-4" />
                          Đăng xuất
                        </button>
                      </div>
                    </GlassCard>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
