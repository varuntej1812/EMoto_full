import React from 'react';
import { DollarSign, ShoppingBag, Users, ThumbsUp } from 'lucide-react';

const stats = [
  {
    title: 'Total Revenue',
    value: '$2,129,430',
    change: '+2.5%',
    icon: DollarSign,
    color: 'bg-green-100',
    iconColor: 'text-green-600'
  },
  {
    title: 'Total Transactions',
    value: '1,520',
    change: '+1.7%',
    icon: ShoppingBag,
    color: 'bg-yellow-100',
    iconColor: 'text-yellow-600'
  },
  {
    title: 'Total Likes',
    value: '9,721',
    change: '+1.4%',
    icon: ThumbsUp,
    color: 'bg-red-100',
    iconColor: 'text-red-600'
  },
  {
    title: 'Total Users',
    value: '9,721',
    change: '+4.2%',
    icon: Users,
    color: 'bg-purple-100',
    iconColor: 'text-purple-600'
  },
];

const StatsCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-xl p-4 md:p-6 shadow-lg">
          <div className={`w-10 h-10 ${stat.color} rounded-full flex items-center justify-center mb-4`}>
            <stat.icon className={`${stat.iconColor}`} size={20} />
          </div>
          <div className="text-sm text-gray-600 mb-1">{stat.title}</div>
          <div className="flex items-center justify-between">
            <div className="text-xl md:text-2xl font-bold">{stat.value}</div>
            <div className="text-sm text-green-500">{stat.change}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default StatsCards;
