import React, { useState, useEffect, useContext } from 'react';
import { Menu, X, MessageCircle, BarChart3, Users, Settings, Sun, Moon, Home, LogOut, LogIn } from 'lucide-react';
import { AuthContext } from '../AuthContext';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: string;
  onPageChange: (page: string) => void;
}

export default function Layout({ children, currentPage, onPageChange }: LayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check local storage or system preference for initial theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  const { user, logout } = useContext(AuthContext);

  useEffect(() => {
    // Apply the theme on mount and when isDarkMode changes
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const navigation = user ? [
    { name: 'Home', icon: Home, id: 'home' },
    { name: 'Chat', icon: MessageCircle, id: 'chat' },
    { name: 'Dashboard', icon: BarChart3, id: 'dashboard' },
    { name: 'Opportunities', icon: Users, id: 'opportunities' },
    { name: 'Settings', icon: Settings, id: 'settings' },
    { name: 'Logout', icon: LogOut, id: 'logout' },
  ] : [
    { name: 'Home', icon: Home, id: 'home' },
    { name: 'Login', icon: LogIn, id: 'auth' },
  ];

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleNavigation = (id: string) => {
    if (id === 'logout') {
      logout();
      onPageChange('auth');
    } else {
      onPageChange(id);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <div className="bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen">
        {/* Header */}
        <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                      HEVA
                    </span>
                  </div>
                </div>
                <nav className="hidden md:ml-8 md:flex space-x-8">
                  {navigation.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleNavigation(item.id)}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        currentPage === item.id
                          ? 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300'
                          : 'text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900/50'
                      }`}
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </button>
                  ))}
                </nav>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors border border-gray-200 dark:border-gray-600"
                >
                  {isDarkMode ? (
                    <Sun className="w-5 h-5 text-yellow-400" />
                  ) : (
                    <Moon className="w-5 h-5 text-blue-500" />
                  )}
                </button>
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  {isMobileMenuOpen ? <X className="w-6 h-6 text-gray-700 dark:text-gray-200" /> : <Menu className="w-6 h-6 text-gray-700 dark:text-gray-200" />}
                </button>
              </div>
            </div>
          </div>
          
          {/* Mobile menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavigation(item.id)}
                    className={`flex items-center space-x-2 w-full px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      currentPage === item.id
                        ? 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300'
                        : 'text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900/50'
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </header>

        {/* Main content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
      </div>
    </div>
  );
}