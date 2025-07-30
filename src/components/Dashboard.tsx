import React from 'react';
import { TrendingUp, Users, MessageSquare, DollarSign, Calendar, Award, ArrowUp, ArrowDown } from 'lucide-react';

export default function Dashboard() {
  const stats = [
    {
      name: 'Total Queries',
      value: '2,847',
      change: '+12.5%',
      changeType: 'increase',
      icon: MessageSquare,
    },
    {
      name: 'Active Users',
      value: '1,234',
      change: '+8.2%',
      changeType: 'increase',
      icon: Users,
    },
    {
      name: 'Grants Processed',
      value: '156',
      change: '+23.1%',
      changeType: 'increase',
      icon: Award,
    },
    {
      name: 'Funding Distributed',
      value: '$2.4M',
      change: '+15.3%',
      changeType: 'increase',
      icon: DollarSign,
    },
  ];

  const topQueries = [
    { question: 'How to apply for funding?', count: 342, percentage: 12 },
    { question: 'Business mentorship programs', count: 289, percentage: 10 },
    { question: 'Grant eligibility requirements', count: 245, percentage: 9 },
    { question: 'Application deadlines', count: 198, percentage: 7 },
    { question: 'Required documents', count: 167, percentage: 6 },
  ];

  const recentActivity = [
    { user: 'Sarah M.', action: 'Applied for Tech Innovation Grant', time: '2 minutes ago', status: 'success' },
    { user: 'James K.', action: 'Submitted business plan review', time: '15 minutes ago', status: 'pending' },
    { user: 'Maria L.', action: 'Completed mentorship session', time: '1 hour ago', status: 'success' },
    { user: 'David R.', action: 'Requested funding information', time: '2 hours ago', status: 'info' },
    { user: 'Lisa T.', action: 'Downloaded application form', time: '3 hours ago', status: 'info' },
  ];

  const monthlyData = [
    { month: 'Jan', queries: 1200, grants: 45 },
    { month: 'Feb', queries: 1400, grants: 52 },
    { month: 'Mar', queries: 1800, grants: 68 },
    { month: 'Apr', queries: 2100, grants: 74 },
    { month: 'May', queries: 2400, grants: 89 },
    { month: 'Jun', queries: 2847, grants: 156 },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Analytics Dashboard</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">Monitor HEVA's performance and user engagement</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{stat.name}</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white mt-2">{stat.value}</p>
              </div>
              <div className={`p-3 rounded-full ${
                stat.icon === MessageSquare ? 'bg-blue-100 dark:bg-blue-900' :
                stat.icon === Users ? 'bg-green-100 dark:bg-green-900' :
                stat.icon === Award ? 'bg-purple-100 dark:bg-purple-900' :
                'bg-yellow-100 dark:bg-yellow-900'
              }`}>
                <stat.icon className={`w-6 h-6 ${
                  stat.icon === MessageSquare ? 'text-blue-600 dark:text-blue-400' :
                  stat.icon === Users ? 'text-green-600 dark:text-green-400' :
                  stat.icon === Award ? 'text-purple-600 dark:text-purple-400' :
                  'text-yellow-600 dark:text-yellow-400'
                }`} />
              </div>
            </div>
            <div className="flex items-center mt-4">
              {stat.changeType === 'increase' ? (
                <ArrowUp className="w-4 h-4 text-green-500" />
              ) : (
                <ArrowDown className="w-4 h-4 text-red-500" />
              )}
              <span className={`text-sm font-medium ml-1 ${
                stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.change}
              </span>
              <span className="text-sm text-gray-500 ml-1">from last month</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Top Queries */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Most Frequent Questions</h3>
          <div className="space-y-4">
            {topQueries.map((query, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{query.question}</p>
                  <div className="mt-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${query.percentage * 8}%` }}
                    ></div>
                  </div>
                </div>
                <div className="ml-4 text-right">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">{query.count}</p>
                  <p className="text-xs text-gray-500">{query.percentage}%</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Recent Activity</h3>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className={`w-2 h-2 rounded-full mt-2 ${
                  activity.status === 'success' ? 'bg-green-500' :
                  activity.status === 'pending' ? 'bg-yellow-500' :
                  'bg-blue-500'
                }`}></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{activity.user}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{activity.action}</p>
                  <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Monthly Trends Chart */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Monthly Trends</h3>
        <div className="h-64 flex items-end justify-between space-x-2">
          {monthlyData.map((data, index) => (
            <div key={index} className="flex-1 flex flex-col items-center">
              <div className="w-full flex flex-col items-center space-y-1">
                <div 
                  className="w-full bg-gradient-to-t from-purple-600 to-purple-400 rounded-t-md transition-all duration-500 hover:from-purple-700 hover:to-purple-500"
                  style={{ height: `${(data.queries / 3000) * 200}px` }}
                ></div>
                <div 
                  className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-md transition-all duration-500 hover:from-blue-700 hover:to-blue-500"
                  style={{ height: `${(data.grants / 200) * 100}px` }}
                ></div>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">{data.month}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center space-x-6 mt-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-purple-600 rounded"></div>
            <span className="text-sm text-gray-600 dark:text-gray-400">Queries</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-600 rounded"></div>
            <span className="text-sm text-gray-600 dark:text-gray-400">Grants</span>
          </div>
        </div>
      </div>
    </div>
  );
}