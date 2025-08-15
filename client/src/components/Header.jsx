import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import MobileNav from './MobileNav';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { 
      name: 'Services', 
      path: '/services',
      submenu: [
        { name: 'Social Media Management', path: '/services/social-media-management' },
        { name: 'Creative Design', path: '/services/creative-design' },
        { name: 'SEO for Colleges', path: '/services/seo-for-colleges' },
        { name: 'Performance Marketing', path: '/services/performance-marketing' },
        { name: 'Branding Strategy', path: '/services/branding-strategy' }
      ]
    },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur border-b border-gray-200 shadow-sm' 
            : 'bg-white/90 backdrop-blur border-b border-gray-200'
        }`}
        role="navigation" 
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="block">
                <img 
                  src="/assets/img/logo.svg" 
                  alt="TREND MAKERS 360 logo" 
                  width="48" 
                  height="48" 
                  className="h-12 w-auto"
                  onError={(e) => {
                    // Fallback to placeholder if SVG fails to load
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div 
                  className="w-12 h-12 bg-brand-gradient rounded-lg items-center justify-center text-white font-bold text-xl hidden"
                  style={{ display: 'none' }}
                >
                  TM
                </div>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  {link.submenu ? (
                    <>
                      <Link
                        to={link.path}
                        className="text-brand-text hover:text-brand-blue transition-colors font-medium flex items-center"
                      >
                        {link.name}
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                      </Link>
                      {/* Services Dropdown */}
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                        <div className="p-2">
                          {link.submenu.map((sublink) => (
                            <Link
                              key={sublink.name}
                              to={sublink.path}
                              className="block px-4 py-3 text-sm text-brand-text hover:bg-gray-50 rounded-lg transition-colors"
                            >
                              {sublink.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      to={link.path}
                      className={`text-brand-text hover:text-brand-blue transition-colors font-medium ${
                        location.pathname === link.path ? 'text-brand-blue' : ''
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
            
            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                to="#"
                className="px-6 py-2 bg-brand-gradient text-white rounded-xl font-medium hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                Book Strategy Call
              </Link>
              <a
                href="https://wa.me/91XXXXXXXXXX"
                className="px-6 py-2 border border-brand-blue text-brand-blue rounded-xl font-medium hover:bg-brand-blue hover:text-white transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Us
              </a>
            </div>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Open mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <MobileNav 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
        navLinks={navLinks}
      />
    </>
  );
};

export default Header;
