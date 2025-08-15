import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import ServiceCard from '../components/ServiceCard';
import { breadcrumbSchema } from '../lib/jsonld';

const Services = () => {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' }
  ];

  const jsonLd = breadcrumbSchema(breadcrumbItems);

  const services = [
    {
      title: 'Social Media Management',
      description: 'End-to-end social media for Instagram, Facebook, Threads, Pinterest — content, engagement, reporting.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      link: '/services/social-media-management',
      gradient: 'from-pink-500 to-purple-600'
    },
    {
      title: 'Creative Design',
      description: 'Admissions campaigns, event posters, reels, and carousels that your students actually share.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      link: '/services/creative-design',
      gradient: 'from-orange-500 to-red-600'
    },
    {
      title: 'SEO for Colleges',
      description: 'Rank for program keywords and admissions queries with technical, on-page, and local SEO.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
        </svg>
      ),
      link: '/services/seo-for-colleges',
      gradient: 'from-green-500 to-teal-600'
    },
    {
      title: 'Performance Marketing',
      description: 'Smart targeting, landing pages, conversion tracking — ROI-focused paid campaigns.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
        </svg>
      ),
      link: '/services/performance-marketing',
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      title: 'Branding Strategy',
      description: 'Build consistent brand voice, color systems, hashtags, and content pillars for your college.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
        </svg>
      ),
      link: '/services/branding-strategy',
      gradient: 'from-purple-500 to-pink-600'
    }
  ];

  return (
    <>
      <SEO
        title="Services | Social, SEO, Ads & Creative for Colleges"
        description="Full-stack marketing for colleges: social media, creative design, SEO, Meta & Google Ads."
        path="/services"
        jsonLd={jsonLd}
      />

      <Breadcrumbs items={breadcrumbItems} />

      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-brand-text mb-6">
                Our <span className="gradient-text">Services</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Full-stack digital marketing solutions designed specifically for educational institutions across Tamil Nadu, Kerala, and Andhra Pradesh.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  link={service.link}
                  gradient={service.gradient}
                />
              ))}
            </div>

            {/* Process Section */}
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-brand-text mb-4">
                  Our Process
                </h2>
                <p className="text-xl text-gray-600">
                  How we deliver results for your college
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-8">
                {[
                  {
                    step: '01',
                    title: 'Discovery',
                    description: 'We analyze your current digital presence, target audience, and competitive landscape.'
                  },
                  {
                    step: '02',
                    title: 'Strategy',
                    description: 'Custom strategy development based on your goals, budget, and admissions calendar.'
                  },
                  {
                    step: '03',
                    title: 'Execution',
                    description: 'Implementation of campaigns with regular monitoring and real-time optimizations.'
                  },
                  {
                    step: '04',
                    title: 'Reporting',
                    description: 'Detailed analytics and insights to measure ROI and plan future campaigns.'
                  }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-brand-gradient rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-bold text-brand-text mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-brand-text mb-8">
                Why Choose TREND MAKERS 360?
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: 'Education Specialists',
                    description: 'We exclusively work with educational institutions and understand the unique challenges of college marketing.'
                  },
                  {
                    title: 'Regional Expertise',
                    description: 'Deep knowledge of South Indian markets, cultures, and languages for authentic local connections.'
                  },
                  {
                    title: 'Proven Results',
                    description: 'Track record of driving enrollment growth, improving brand awareness, and maximizing ROI for colleges.'
                  }
                ].map((benefit, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg p-6">
                    <h3 className="text-xl font-bold text-brand-text mb-3">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-brand-gradient rounded-2xl p-8 md:p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Transform Your College's Digital Presence?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Let's discuss your goals and create a custom strategy that drives real results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-white text-brand-blue rounded-xl font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  Get Started Today
                </Link>
                <Link
                  to="/portfolio"
                  className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-brand-blue transition-all duration-300"
                >
                  View Our Work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
