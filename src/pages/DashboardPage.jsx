import React, { useState } from 'react';
import { 
  Users, 
  TrendingUp, 
  ShoppingCart, 
  DollarSign,
  Activity,
  Clock,
  FileText,
  Settings,
  Plus,
  BarChart3,
  Calendar,
  MessageSquare
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import DashboardHeader from '../components/layout/DashboardHeader';
import StatCard from '../components/ui/StatCard';
import GlassCard from '../components/ui/GlassCard';
import AnimatedBackground from '../components/ui/AnimatedBackground';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import { ROUTES } from '../utils/constants';

const DashboardPage = ({ navigate }) => {
  const { user, logout } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  
  const handleLogout = async () => {
    setIsLoading(true);
    try {
      await logout();
      navigate(ROUTES.LOGIN);
    } catch (error) {
      console.error('Logout error:', error);
      // Vẫn navigate về login dù có lỗi
      navigate(ROUTES.LOGIN);
    } finally {
      setIsLoading(false);
    }
  };

  // Mock data
  const stats = [
    {
      title: "Tổng người dùng",
      value: "2,847",
      icon: Users,
      trend: "up",
      trendValue: "+12%",
      color: "blue"
    },
    {
      title: "Doanh thu",
      value: "₫45.2M",
      icon: DollarSign,
      trend: "up",
      trendValue: "+8.2%",
      color: "emerald"
    },
    {
      title: "Đơn hàng",
      value: "1,234",
      icon: ShoppingCart,
      trend: "up",
      trendValue: "+23%",
      color: "purple"
    },
    {
      title: "Tăng trưởng",
      value: "15.3%",
      icon: TrendingUp,
      trend: "up",
      trendValue: "+2.1%",
      color: "orange"
    }
  ];

  const quickActions = [
    { icon: Plus, label: "Thêm người dùng", color: "bg-blue-500" },
    { icon: FileText, label: "Tạo báo cáo", color: "bg-emerald-500" },
    { icon: BarChart3, label: "Xem thống kê", color: "bg-purple-500" },
    { icon: Settings, label: "Cài đặt", color: "bg-orange-500" }
  ];

  const recentActivities = [
    {
      id: 1,
      action: "Người dùng mới đăng ký",
      user: "Nguyễn Văn A",
      time: "5 phút trước",
      type: "user"
    },
    {
      id: 2,
      action: "Đơn hàng mới được tạo",
      user: "Trần Thị B",
      time: "10 phút trước",
      type: "order"
    },
    {
      id: 3,
      action: "Báo cáo được xuất",
      user: "Lê Văn C",
      time: "15 phút trước",
      type: "report"
    },
    {
      id: 4,
      action: "Cập nhật hệ thống",
      user: "System",
      time: "1 giờ trước",
      type: "system"
    }
  ];

  const getActivityIcon = (type) => {
    switch (type) {
      case 'user': return Users;
      case 'order': return ShoppingCart;
      case 'report': return FileText;
      case 'system': return Settings;
      default: return Activity;
    }
  };

  const getActivityColor = (type) => {
    switch (type) {
      case 'user': return 'text-blue-500';
      case 'order': return 'text-emerald-500';
      case 'report': return 'text-purple-500';
      case 'system': return 'text-orange-500';
      default: return 'text-gray-500';
    }
  };

  if (isLoading) {
    return <LoadingSpinner fullScreen message="Đang đăng xuất..." />;
  }
  
  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground variant="purple" />
      
      <div className="relative z-10 min-h-screen">
        {/* Header */}
        <DashboardHeader onLogout={handleLogout} />
        
        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-2">
              Chào mừng trở lại, {user?.email?.split('@')[0] || 'User'}! 👋
            </h1>
            <p className="text-gray-600">Đây là tổng quan về hoạt động hệ thống của bạn.</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                title={stat.title}
                value={stat.value}
                icon={stat.icon}
                trend={stat.trend}
                trendValue={stat.trendValue}
                color={stat.color}
              />
            ))}
          </div>

          {/* Main Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Quick Actions */}
            <div className="lg:col-span-1">
              <GlassCard className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <Plus className="w-5 h-5" />
                  Thao tác nhanh
                </h3>
                <div className="space-y-3">
                  {quickActions.map((action, index) => (
                    <button
                      key={index}
                      className="w-full flex items-center gap-3 p-3 hover:bg-white/20 rounded-lg transition-all duration-200 text-left group"
                    >
                      <div className={`p-2 ${action.color} rounded-lg text-white group-hover:scale-110 transition-transform`}>
                        <action.icon className="w-4 h-4" />
                      </div>
                      <span className="text-gray-700 font-medium">{action.label}</span>
                    </button>
                  ))}
                </div>
              </GlassCard>

              {/* User Profile Enhanced */}
              <GlassCard className="p-6 mt-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Thông tin tài khoản
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">{user?.email || 'Không có thông tin'}</p>
                      <p className="text-sm text-gray-500">Quản trị viên</p>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-white/20">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Trạng thái:</span>
                      <span className="px-2 py-1 bg-emerald-100/80 text-emerald-800 rounded-full text-xs font-medium">
                        ● Đang hoạt động
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm mt-2">
                      <span className="text-gray-600">Lần cuối:</span>
                      <span className="text-gray-800">Vừa xong</span>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>

            {/* Activity Feed */}
            <div className="lg:col-span-2">
              <GlassCard className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                    <Activity className="w-5 h-5" />
                    Hoạt động gần đây
                  </h3>
                  <button className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    Xem tất cả
                  </button>
                </div>

                <div className="space-y-4">
                  {recentActivities.map((activity) => {
                    const ActivityIcon = getActivityIcon(activity.type);
                    const iconColor = getActivityColor(activity.type);
                    
                    return (
                      <div key={activity.id} className="flex items-center gap-4 p-3 hover:bg-white/10 rounded-lg transition-colors">
                        <div className={`p-2 bg-white/20 rounded-lg ${iconColor}`}>
                          <ActivityIcon className="w-4 h-4" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-800">{activity.action}</p>
                          <p className="text-xs text-gray-600">bởi {activity.user}</p>
                        </div>
                        <div className="text-xs text-gray-500 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {activity.time}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Quick Stats */}
                <div className="mt-6 pt-6 border-t border-white/20">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">24</div>
                      <div className="text-xs text-gray-600">Hoạt động hôm nay</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-emerald-600">156</div>
                      <div className="text-xs text-gray-600">Tuần này</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">89%</div>
                      <div className="text-xs text-gray-600">Hiệu suất</div>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
