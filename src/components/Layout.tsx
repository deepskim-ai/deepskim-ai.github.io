import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Brain } from 'lucide-react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Use Cases', href: '/use-cases' },
    { name: 'Sample Insights', href: '/sample-insights' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-sm border-b border-gray-800' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2 text-xl font-bold">
              <img src="https://raw.githubusercontent.com/deepskim-ai/deepskim-ai.github.io/refs/heads/main/public/deepskim_logo.png?token=GHSAT0AAAAAADDNHBTLIKG6AOWLEFNFPCVI2CRRATQ" alt="Deepskim.AI" className="h-8 w-8" />
              <span>Deepskim.ai</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`transition-colors duration-200 hover:text-blue-400 ${
                    location.pathname === item.href ? 'text-blue-400' : 'text-gray-300'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors duration-200"
              >
                Get Early Access
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-gray-800 border-t border-gray-700">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block px-3 py-2 rounded-lg transition-colors duration-200 ${
                      location.pathname === item.href
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  className="block px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Get Early Access
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      <main className="pt-16">
        {children}
      </main>

      <footer className="bg-gray-950 border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <img src="https://raw.githubusercontent.com/deepskim-ai/deepskim-ai.github.io/refs/heads/main/public/deepskim_logo.png?token=GHSAT0AAAAAADDNHBTLIKG6AOWLEFNFPCVI2CRRATQ" alt="Deepskim.AI" className="h-8 w-8" />
              <span className="text-lg font-semibold">Deepskim.ai</span>
            </div>
            <div className="text-sm text-gray-400">
              © 2025 Deepskim.ai. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
