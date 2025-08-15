import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const MobileNav = ({ isOpen, onClose, navLinks }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/50"
          />
          
          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="absolute right-0 top-0 h-full w-80 bg-white shadow-xl"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <div className="w-10 h-10 bg-brand-gradient rounded-lg flex items-center justify-center text-white font-bold">
                  TM
                </div>
                <button 
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors" 
                  aria-label="Close mobile menu"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
              
              <nav className="space-y-4">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    <Link 
                      to={link.path}
                      onClick={onClose}
                      className="block py-3 text-lg font-medium text-brand-text border-b border-gray-200"
                    >
                      {link.name}
                    </Link>
                    {link.submenu && (
                      <div className="ml-4 mt-2 space-y-2">
                        {link.submenu.map((sublink) => (
                          <Link
                            key={sublink.name}
                            to={sublink.path}
                            onClick={onClose}
                            className="block py-2 text-gray-600 hover:text-brand-blue transition-colors"
                          >
                            {sublink.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
              
              <div className="mt-8 space-y-3">
                <Link
                  to="#"
                  onClick={onClose}
                  className="block w-full px-6 py-3 bg-brand-gradient text-white rounded-xl font-medium text-center hover:shadow-lg transition-all duration-300"
                >
                  Book Strategy Call
                </Link>
                <a
                  href="https://wa.me/91XXXXXXXXXX"
                  className="block w-full px-6 py-3 border border-brand-blue text-brand-blue rounded-xl font-medium text-center hover:bg-brand-blue hover:text-white transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;
