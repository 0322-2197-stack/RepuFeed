import { Bell, User } from 'lucide-react';

const AdminHeader = () => {
  return (
    <header className="bg-white border-b border-neutral-lightGray px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Page Title Area - can be dynamic */}
        <div>
          <p className="text-sm text-neutral-slate">Welcome back,</p>
          <h2 className="text-lg font-semibold text-primary-dark">Administrator</h2>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          {/* Notifications */}
          <button className="relative p-2 text-neutral-slate hover:text-primary-dark hover:bg-neutral-offWhite rounded-lg transition-colors">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-primary-orange rounded-full"></span>
          </button>

          {/* User Profile */}
          <div className="flex items-center gap-3 pl-4 border-l border-neutral-lightGray">
            <div className="w-10 h-10 bg-primary-dark rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-medium text-primary-dark">Admin User</p>
              <p className="text-xs text-neutral-slate">admin@repufeed.com</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
