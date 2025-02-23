import React from 'react';
import { LayoutDashboard, Receipt, Calendar, Users, Settings, HelpCircle, MessageSquare } from 'lucide-react';

const menuItems = [
  { icon: LayoutDashboard, text: 'Dashboard', active: true },
  { icon: Receipt, text: 'Transactions' },
  { icon: Calendar, text: 'Schedules' },
  { icon: Users, text: 'Users' },
  { icon: Settings, text: 'Settings' },
];

const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-blue-500 text-white p-6">
      <div className="text-2xl font-bold mb-12">Board.</div>
      
      <nav className="space-y-6">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`flex items-center space-x-3 p-2 rounded-lg cursor-pointer
              ${item.active ? 'bg-blue-600' : 'hover:bg-blue-600'}`}
          >
            <item.icon size={20} />
            <span>{item.text}</span>
          </div>
        ))}
      </nav>

      <div className="absolute bottom-8 space-y-4">
        <div className="flex items-center space-x-3 cursor-pointer hover:text-blue-200">
          <HelpCircle size={20} />
          <span>Help</span>
        </div>
        <div className="flex items-center space-x-3 cursor-pointer hover:text-blue-200">
          <MessageSquare size={20} />
          <span>Contact Us</span>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;