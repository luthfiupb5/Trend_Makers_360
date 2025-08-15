import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const NotFound = () => {
  const popularLinks = [
    { name: 'Home', path: '/', description: 'Back to our homepage' },
    { name: 'Services', path: '/services', description: 'Explore our digital marketing services' },
    { name: 'Portfolio', path: '/portfolio', description: 'View our creative work' },
    { name: 'Case Studies', path: '/case-studies', description: 'See our success stories' },
    { name: 'Contact', path: '/contact', description: 'Get in touch with us' }
  ];

  return (
    <>
      <SEO
        title="Page Not Found | TREND MAKERS 360"
        description="The page you're looking for doesn't exist. Explore our services and get back on track."
        path="/404"
      />

      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* 404 Visual */}
            <div className="mb-12">
              <div className="text-8xl md:text-9xl font-bold gradient-text mb-6">404</div>
              <div className="w-32 h-32 mx-auto mb-8">
                <div className="relative">
                  <div className="w-32 h-32 bg-brand-gradient rounded-full flex items-center justify-center">
                    <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.664-2.474L2.17 8.36l1.41-1.41L7 10.365a5.956 5.956 0 015-2.365c1.95 0 3.724.784 5 2.05l3.42-3.43 1.41 1.41-4.166 4.176A7.963 7.963 0 0112 21c-4.411 0-8-3.589-8-8 0-1.657.509-3.195 1.379-4.469"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Error Message */}
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-brand-text mb-6">
                Oops! Page Not Found
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                The page you're looking for seems to have gone missing. Don't worry, we'll help you find what you're looking for!
              </p>
            </div>

            {/* Search Bar */}
            <div className="mb-12">
              <form className="max-w-md mx-auto">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search for services, case studies..."
                    className="w-full px-6 py-4 pr-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent text-lg"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-gray-400 hover:text-brand-blue transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                    </svg>
                  </button>
                </div>
              </form>
            </div>

            {/* Popular Links */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-brand-text mb-8">Popular Pages</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {popularLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.path}
                    className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                  >
                    <h3 className="text-lg font-bold text-brand-text mb-2 group-hover:text-brand-blue transition-colors">
                      {link.name}
                    </h3>
                    <p className="text-gray-600 text-sm">{link.description}</p>
                    <div className="mt-3 text-brand-blue group-hover:text-brand-cyan transition-colors">
                      <span className="text-sm font-medium">Visit page →</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/"
                className="px-8 py-4 bg-brand-gradient text-white rounded-xl font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                Back to Home
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-brand-blue text-brand-blue rounded-xl font-semibold hover:bg-brand-blue hover:text-white transition-all duration-300"
              >
                Contact Support
              </Link>
            </div>

            {/* Help Text */}
            <div className="bg-white rounded-xl shadow-lg p-6 max-w-2xl mx-auto">
              <h3 className="text-lg font-bold text-brand-text mb-3">Still need help?</h3>
              <p className="text-gray-600 mb-4">
                If you were looking for something specific, feel free to reach out to us. We're here to help!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:hello@trendmakers360.in"
                  className="text-brand-blue hover:text-brand-cyan transition-colors font-medium"
                >
                  hello@trendmakers360.in
                </a>
                <a
                  href="https://wa.me/91XXXXXXXXXX"
                  className="text-brand-blue hover:text-brand-cyan transition-colors font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Support
                </a>
              </div>
            </div>

            {/* Suggested Actions */}
            <div className="mt-12 text-sm text-gray-500">
              <p>Error Code: 404 | Page Not Found</p>
              <p className="mt-1">If you believe this is an error, please contact our support team.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
