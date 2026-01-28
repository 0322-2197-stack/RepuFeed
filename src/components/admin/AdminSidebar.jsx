import { NavLink } from 'react-router-dom';
import { LayoutDashboard, MessageSquare, Settings, LogOut } from 'lucide-react';

const AdminSidebar = () => {
  const navItems = [
    { name: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'Feedback', path: '/admin/feedback', icon: MessageSquare },
    { name: 'Settings', path: '/admin/settings', icon: Settings },
  ];

  const handleLogout = () => {
    // TODO: Implement logout logic
    window.location.href = '/admin/login';
  };

  return (
    <aside className="w-64 bg-white border-r border-neutral-lightGray min-h-screen flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-neutral-lightGray">
        <a href="/admin/dashboard" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-primary-orange rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">R</span>
          </div>
          <div>
            <span className="text-primary-dark font-bold text-lg block">RepuFeed</span>
            <span className="text-neutral-slate text-xs">Admin Portal</span>
          </div>
        </a>
      </div>

      {/* Navigation */}
      <nav className="flex-grow p-4">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${
                    isActive
                      ? 'bg-primary-dark text-white'
                      : 'text-neutral-slate hover:bg-neutral-offWhite hover:text-primary-dark'
                  }`
                }
              >
                <item.icon className="w-5 h-5" />
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Logout Button */}
      <div className="p-4 border-t border-neutral-lightGray">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-3 rounded-lg font-medium text-neutral-slate hover:bg-red-50 hover:text-red-600 transition-colors w-full"
        >
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;
