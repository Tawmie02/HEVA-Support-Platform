import React, { useState } from 'react';
import { Search, Filter, Calendar, DollarSign, Clock, Users, MapPin, ExternalLink } from 'lucide-react';

interface Opportunity {
  id: string;
  title: string;
  type: 'Grant' | 'Event' | 'Workshop' | 'Mentorship';
  amount?: string;
  deadline: string;
  location: string;
  description: string;
  eligibility: string;
  category: string;
  applicants: number;
  featured: boolean;
}

export default function Opportunities() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');

  const opportunities: Opportunity[] = [
    {
      id: '1',
      title: 'Tech Innovation Grant 2024',
      type: 'Grant',
      amount: '$15,000',
      deadline: '2024-03-15',
      location: 'Nationwide',
      description: 'Supporting innovative tech startups with funding for MVP development and market validation.',
      eligibility: 'Early-stage tech companies with less than $100K revenue',
      category: 'Technology',
      applicants: 234,
      featured: true,
    },
    {
      id: '2',
      title: 'Women in Business Workshop Series',
      type: 'Workshop',
      deadline: '2024-02-20',
      location: 'Toronto, ON',
      description: 'Comprehensive workshop series covering business planning, marketing, and financial management.',
      eligibility: 'Women entrepreneurs at any stage',
      category: 'Business Development',
      applicants: 89,
      featured: true,
    },
    {
      id: '3',
      title: 'Creative Arts Fund',
      type: 'Grant',
      amount: '$5,000',
      deadline: '2024-04-01',
      location: 'Canada',
      description: 'Supporting artists and creative professionals in developing their craft and reaching new audiences.',
      eligibility: 'Professional artists with portfolio submission',
      category: 'Arts & Culture',
      applicants: 156,
      featured: false,
    },
    {
      id: '4',
      title: 'Startup Mentorship Program',
      type: 'Mentorship',
      deadline: '2024-02-28',
      location: 'Virtual',
      description: 'One-on-one mentorship with successful entrepreneurs and industry experts.',
      eligibility: 'Startups in operation for less than 2 years',
      category: 'Mentorship',
      applicants: 67,
      featured: false,
    },
    {
      id: '5',
      title: 'Small Business Recovery Grant',
      type: 'Grant',
      amount: '$7,500',
      deadline: '2024-03-30',
      location: 'Ontario',
      description: 'Emergency funding to help small businesses recover from economic challenges.',
      eligibility: 'Small businesses with proven revenue loss',
      category: 'Recovery',
      applicants: 312,
      featured: true,
    },
    {
      id: '6',
      title: 'Digital Marketing Bootcamp',
      type: 'Event',
      deadline: '2024-02-25',
      location: 'Vancouver, BC',
      description: 'Intensive 3-day bootcamp covering modern digital marketing strategies and tools.',
      eligibility: 'Business owners and marketing professionals',
      category: 'Marketing',
      applicants: 145,
      featured: false,
    },
  ];

  const filters = ['All', 'Grant', 'Event', 'Workshop', 'Mentorship'];

  const filteredOpportunities = opportunities.filter(opp => {
    const matchesSearch = opp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         opp.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         opp.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === 'All' || opp.type === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Grant': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Event': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'Workshop': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'Mentorship': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
    }
  };

  const getDaysUntilDeadline = (deadline: string) => {
    const today = new Date();
    const deadlineDate = new Date(deadline);
    const diffTime = deadlineDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Opportunities</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">Discover grants, events, and programs to grow your business</p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search opportunities..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedFilter === filter
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Opportunities */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Featured Opportunities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOpportunities.filter(opp => opp.featured).map((opportunity) => (
            <div key={opportunity.id} className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-xl shadow-lg p-6 border border-purple-200 dark:border-purple-800 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex justify-between items-start mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(opportunity.type)}`}>
                  {opportunity.type}
                </span>
                <span className="bg-purple-600 text-white px-2 py-1 rounded-full text-xs font-bold">
                  Featured
                </span>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{opportunity.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">{opportunity.description}</p>
              
              <div className="space-y-2 mb-4">
                {opportunity.amount && (
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <DollarSign className="w-4 h-4 mr-2" />
                    {opportunity.amount}
                  </div>
                )}
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <Calendar className="w-4 h-4 mr-2" />
                  {getDaysUntilDeadline(opportunity.deadline)} days left
                </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <MapPin className="w-4 h-4 mr-2" />
                  {opportunity.location}
                </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <Users className="w-4 h-4 mr-2" />
                  {opportunity.applicants} applicants
                </div>
              </div>
              
              <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 flex items-center justify-center">
                Learn More
                <ExternalLink className="w-4 h-4 ml-2" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* All Opportunities */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">All Opportunities</h2>
        <div className="space-y-4">
          {filteredOpportunities.map((opportunity) => (
            <div key={opportunity.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{opportunity.title}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(opportunity.type)}`}>
                          {opportunity.type}
                        </span>
                        {opportunity.featured && (
                          <span className="bg-purple-600 text-white px-2 py-1 rounded-full text-xs font-bold">
                            Featured
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{opportunity.description}</p>
                      <p className="text-gray-500 dark:text-gray-500 text-xs mb-2">
                        <strong>Eligibility:</strong> {opportunity.eligibility}
                      </p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                        {opportunity.amount && (
                          <div className="flex items-center">
                            <DollarSign className="w-4 h-4 mr-1" />
                            {opportunity.amount}
                          </div>
                        )}
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {getDaysUntilDeadline(opportunity.deadline)} days left
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {opportunity.location}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {opportunity.applicants} applicants
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 md:ml-4">
                  <button
                    className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-6 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 flex items-center"
                  >
                    Apply Now
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}