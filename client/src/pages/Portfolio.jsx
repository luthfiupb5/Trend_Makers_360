import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { breadcrumbSchema } from '../lib/jsonld';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Portfolio', url: '/portfolio' }
  ];

  const jsonLd = breadcrumbSchema(breadcrumbItems);

  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'events', name: 'Event Creatives' },
    { id: 'admissions', name: 'Admission Drives' },
    { id: 'festive', name: 'Festive Designs' },
    { id: 'reels', name: 'Reels' },
    { id: 'branding', name: 'Branding' }
  ];

  const portfolioItems = [
    {
      id: 1,
      title: 'Tech Fest 2024',
      category: 'events',
      type: 'Event Poster',
      college: 'Chennai Engineering College',
      description: 'Cultural & Technical Events promotion poster',
      gradient: 'from-purple-600 via-pink-600 to-red-600'
    },
    {
      id: 2,
      title: 'Admissions Open',
      category: 'admissions',
      type: 'Admission Campaign',
      college: 'Kerala Institute of Technology',
      description: 'B.Tech, M.Tech, MBA programs',
      gradient: 'from-blue-600 via-cyan-600 to-teal-600'
    },
    {
      id: 3,
      title: 'Diwali Wishes',
      category: 'festive',
      type: 'Festive Greeting',
      college: 'Andhra University',
      description: 'Festival greeting card design',
      gradient: 'from-orange-600 via-yellow-600 to-red-600'
    },
    {
      id: 4,
      title: 'Campus Tour Reel',
      category: 'reels',
      type: 'Video Content',
      college: 'Tamil Nadu College',
      description: 'Virtual campus experience video',
      gradient: 'from-green-600 via-emerald-600 to-teal-600'
    },
    {
      id: 5,
      title: 'Graduation Day',
      category: 'events',
      type: 'Event Announcement',
      college: 'Tamil Nadu Engineering College',
      description: 'Class of 2024 graduation ceremony',
      gradient: 'from-indigo-600 via-purple-600 to-pink-600'
    },
    {
      id: 6,
      title: 'Scholarship Program',
      category: 'admissions',
      type: 'Admission Drive',
      college: 'Cochin Tech Institute',
      description: 'Up to 100% fee waiver program',
      gradient: 'from-rose-600 via-pink-600 to-purple-600'
    },
    {
      id: 7,
      title: 'College Branding',
      category: 'branding',
      type: 'Brand Identity',
      college: 'Modern Arts College',
      description: 'Complete brand identity design',
      gradient: 'from-slate-600 via-gray-600 to-stone-600'
    },
    {
      id: 8,
      title: 'Research Excellence',
      category: 'events',
      type: 'Achievement Post',
      college: 'Research University',
      description: 'Research milestone celebration',
      gradient: 'from-blue-500 via-indigo-500 to-purple-500'
    },
    {
      id: 9,
      title: 'Student Life Reel',
      category: 'reels',
      type: 'Campus Life',
      college: 'Liberal Arts College',
      description: 'Day in the life of students',
      gradient: 'from-pink-500 via-rose-500 to-red-500'
    },
    {
      id: 10,
      title: 'Onam Celebration',
      category: 'festive',
      type: 'Cultural Event',
      college: 'Kerala Arts College',
      description: 'Traditional festival celebration',
      gradient: 'from-yellow-500 via-orange-500 to-red-500'
    },
    {
      id: 11,
      title: 'Placement Drive',
      category: 'admissions',
      type: 'Career Event',
      college: 'Business School',
      description: 'Campus recruitment announcement',
      gradient: 'from-emerald-500 via-teal-500 to-cyan-500'
    },
    {
      id: 12,
      title: 'Alumni Meet',
      category: 'events',
      type: 'Networking Event',
      college: 'Engineering College',
      description: 'Annual alumni gathering',
      gradient: 'from-violet-500 via-purple-500 to-fuchsia-500'
    }
  ];

  const filteredItems = activeCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <>
      <SEO
        title="Our Work | Social Creatives & Campaigns"
        description="Explore sample posters, reels, admissions and event campaigns for colleges."
        path="/portfolio"
        jsonLd={jsonLd}
      />

      <Breadcrumbs items={breadcrumbItems} />

      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-brand-text mb-6">
                Our <span className="gradient-text">Portfolio</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Scroll-stopping creatives that drive enrollment and engagement. Explore our work across different colleges and campaign types.
              </p>
            </div>

            {/* Portfolio Categories */}
            <div className="flex flex-wrap justify-center mb-12 gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-brand-gradient text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Portfolio Grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredItems.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="group cursor-pointer"
                  >
                    <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                      {/* Sample creative mockup */}
                      <div className={`h-80 bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white relative`}>
                        <div className="text-center p-6">
                          <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                          {item.type && (
                            <p className="text-lg opacity-90">{item.type}</p>
                          )}
                          {item.college && (
                            <p className="text-sm mt-2 opacity-75">{item.college}</p>
                          )}
                          {item.description && (
                            <p className="text-sm mt-1 opacity-75">{item.description}</p>
                          )}
                        </div>
                        
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                          <div className="transform scale-75 group-hover:scale-100 transition-transform duration-300">
                            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 9c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3m0-2c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z"/>
                                <path d="M2 12l1.41 1.41L7 10H4l4-4 4 4H8l3.59 3.59 1.41-1.41-1.41-1.41L12 10z"/>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Item details */}
                    <div className="pt-4">
                      <h3 className="text-lg font-bold text-brand-text mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.college}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Work With Us CTA */}
            <div className="mt-20 bg-brand-gradient rounded-2xl p-8 md:p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Create Stunning Visuals?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Let's collaborate to create eye-catching designs that make your college stand out and drive real engagement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-white text-brand-blue rounded-xl font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  Start Your Project
                </a>
                <a
                  href="/services"
                  className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-brand-blue transition-all duration-300"
                >
                  View Services
                </a>
              </div>
            </div>

            {/* Client Testimonial */}
            <div className="mt-16 text-center">
              <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
                <div className="flex justify-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-2xl">★</span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-6 italic text-lg">
                  "The creative work from TREND MAKERS 360 completely transformed our social media presence. Our posts now get 5x more engagement than before!"
                </p>
                <div className="flex items-center justify-center">
                  <div className="w-12 h-12 bg-brand-gradient rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                    PM
                  </div>
                  <div>
                    <div className="font-semibold text-brand-text">Priya Menon</div>
                    <div className="text-sm text-gray-500">Marketing Head, Cochin Tech Institute</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
