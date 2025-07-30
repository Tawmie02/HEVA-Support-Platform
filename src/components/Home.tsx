import React from 'react';
import { MessageCircle, BarChart3, Users, Zap, Shield, Globe, ArrowRight, CheckCircle } from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: MessageCircle,
      title: 'AI-Powered Chatbot',
      description: 'Get instant answers to your questions about HEVA programs, funding opportunities, and business support.',
      benefits: ['24/7 Availability', 'Instant Responses', 'Voice Input Support']
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Track engagement metrics, identify trends, and make data-driven decisions to improve member experience.',
      benefits: ['Real-time Metrics', 'Trend Analysis', 'Performance Insights']
    },
    {
      icon: Users,
      title: 'Opportunities Directory',
      description: 'Discover grants, workshops, events, and mentorship programs tailored to your business needs.',
      benefits: ['Comprehensive Listings', 'Smart Filtering', 'Application Tracking']
    }
  ];

  const stats = [
    { label: 'Response Time Reduction', value: '80%', icon: Zap },
    { label: 'Member Satisfaction', value: '95%', icon: Shield },
    { label: 'Opportunities Listed', value: '200+', icon: Globe },
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl">
            <MessageCircle className="w-10 h-10 text-white" />
          </div>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Welcome to HEVA
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Your intelligent communication platform that connects entrepreneurs and artists with the resources they need to succeed. 
          Get instant support, discover opportunities, and track your progress with our AI-powered assistant.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => window.location.hash = '#chat'}
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 flex items-center justify-center font-semibold"
          >
            Start Chatting
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
          <button 
            onClick={() => window.location.hash = '#dashboard'}
            className="border-2 border-purple-600 text-purple-600 dark:text-purple-400 px-8 py-4 rounded-xl hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-200 font-semibold"
          >
            View Dashboard
          </button>
        </div>
      </div>

      {/* Problem & Solution */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">The Problem</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              HEVA members faced challenges with accessing timely support and information. There was a lack of clear communication 
              channels to address individual member challenges and provide feedback on common issues that have occurred before.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Solution</h2>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-gray-600 dark:text-gray-400">Online engagement dashboard to influence communication decisions</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-gray-600 dark:text-gray-400">AI chatbot that automates responses to FAQs</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-gray-600 dark:text-gray-400">Comprehensive HEVA products support system</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-gray-600 dark:text-gray-400">Opportunities directory based on member requests</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-xl p-6 text-center border border-purple-200 dark:border-purple-800">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</div>
            <div className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Features */}
      <div>
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Powerful Features for Your Success
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 text-center leading-relaxed">
                {feature.description}
              </p>
              <div className="space-y-2">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your HEVA Experience?</h2>
        <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
          Join thousands of entrepreneurs and artists who are already using our platform to accelerate their success. 
          Get started today and discover the opportunities waiting for you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => window.location.hash = '#chat'}
            className="bg-white text-purple-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 font-semibold"
          >
            Get Started Now
          </button>
          <button 
            onClick={() => window.location.hash = '#opportunities'}
            className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white/10 transition-all duration-200 font-semibold"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}