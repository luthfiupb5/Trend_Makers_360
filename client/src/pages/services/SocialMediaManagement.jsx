import React from 'react';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';
import CTAButtons from '../../components/CTAButtons';
import { breadcrumbSchema, serviceSchema } from '../../lib/jsonld';

const SocialMediaManagement = () => {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Social Media Management', url: '/services/social-media-management' }
  ];

  const jsonLd = [
    breadcrumbSchema(breadcrumbItems),
    serviceSchema({
      name: 'Social Media Management',
      description: 'End-to-end social media management for Instagram, Facebook, Threads, Pinterest — content creation, engagement, and detailed reporting for colleges.',
      url: '/services/social-media-management',
      areaServed: ['Tamil Nadu', 'Kerala', 'Andhra Pradesh']
    })
  ];

  return (
    <>
      <SEO
        title="Social Media Management for Colleges | TREND MAKERS 360"
        description="End-to-end social media for Instagram, Facebook, Threads, Pinterest — content, engagement, reporting."
        path="/services/social-media-management"
        jsonLd={jsonLd}
      />

      <Breadcrumbs items={breadcrumbItems} />

      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-brand-text mb-6">
                Social Media <span className="gradient-text">Management</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                End-to-end social media for Instagram, Facebook, Threads, Pinterest — content creation, engagement workflows, and detailed reporting.
              </p>
            </div>

            {/* What's Included */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-brand-text mb-8 text-center">What's Included</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: 'Content Strategy & Planning',
                    items: [
                      'Content calendar aligned with admissions cycles',
                      'Platform-specific content optimization',
                      'Hashtag research and strategy',
                      'Content pillars and themes'
                    ]
                  },
                  {
                    title: 'Content Creation',
                    items: [
                      'Custom graphics and carousel posts',
                      'Video content and reels',
                      'Photography direction',
                      'Copy writing and captions'
                    ]
                  },
                  {
                    title: 'Community Management',
                    items: [
                      'Daily engagement and response management',
                      'Prospective student inquiry handling',
                      'Crisis management protocols',
                      'Influencer collaboration management'
                    ]
                  },
                  {
                    title: 'Analytics & Reporting',
                    items: [
                      'Monthly performance reports',
                      'Engagement analytics and insights',
                      'Competitor analysis',
                      'ROI tracking and optimization'
                    ]
                  }
                ].map((section, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg p-6">
                    <h3 className="text-xl font-bold text-brand-text mb-4">{section.title}</h3>
                    <ul className="space-y-2">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                          </svg>
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Platform Strategy */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-brand-text mb-8 text-center">Platform-Specific Strategies</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    platform: 'Instagram',
                    focus: 'Visual storytelling, student life content, behind-the-scenes',
                    color: 'from-purple-500 to-pink-500'
                  },
                  {
                    platform: 'Facebook',
                    focus: 'Event promotion, parent engagement, detailed announcements',
                    color: 'from-blue-500 to-blue-600'
                  },
                  {
                    platform: 'Threads',
                    focus: 'Real-time updates, quick announcements, trending topics',
                    color: 'from-gray-700 to-gray-900'
                  },
                  {
                    platform: 'Pinterest',
                    focus: 'Infographics, course highlights, campus inspiration',
                    color: 'from-red-500 to-red-600'
                  }
                ].map((platform, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-center">
                    <div className={`w-16 h-16 bg-gradient-to-br ${platform.color} rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl`}>
                      {platform.platform.charAt(0)}
                    </div>
                    <h3 className="text-lg font-bold text-brand-text mb-2">{platform.platform}</h3>
                    <p className="text-gray-600 text-sm">{platform.focus}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Posting Schedule */}
            <div className="bg-gray-50 rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold text-brand-text mb-8 text-center">Our Posting Cadence</h2>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-brand-blue mb-2">15-20</div>
                  <div className="text-gray-600">Posts per month</div>
                  <p className="text-sm text-gray-500 mt-2">Optimized timing for maximum engagement</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-brand-blue mb-2">5-7</div>
                  <div className="text-gray-600">Stories per week</div>
                  <p className="text-sm text-gray-500 mt-2">Behind-the-scenes and real-time content</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-brand-blue mb-2">2-4</div>
                  <div className="text-gray-600">Reels per month</div>
                  <p className="text-sm text-gray-500 mt-2">Viral-ready video content</p>
                </div>
              </div>
            </div>

            {/* Sample Content Grid */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-brand-text mb-8 text-center">Sample Content Types</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { type: 'Admission Posts', color: 'bg-blue-500' },
                  { type: 'Student Features', color: 'bg-green-500' },
                  { type: 'Faculty Highlights', color: 'bg-purple-500' },
                  { type: 'Campus Events', color: 'bg-orange-500' },
                  { type: 'Achievement Posts', color: 'bg-yellow-500' },
                  { type: 'Behind-the-scenes', color: 'bg-pink-500' }
                ].map((content, index) => (
                  <div key={index} className={`${content.color} rounded-xl p-6 text-white text-center`}>
                    <div className="font-semibold">{content.type}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Results Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
              <h2 className="text-3xl font-bold text-brand-text mb-8 text-center">Expected Results</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-brand-text mb-4">30-Day Goals</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-brand-blue rounded-full mr-3"></span>
                      Increased follower growth rate
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-brand-blue rounded-full mr-3"></span>
                      Higher engagement rates
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-brand-blue rounded-full mr-3"></span>
                      Consistent brand voice
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-text mb-4">90-Day Goals</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-brand-cyan rounded-full mr-3"></span>
                      Measurable inquiry increase
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-brand-cyan rounded-full mr-3"></span>
                      Improved brand recognition
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-brand-cyan rounded-full mr-3"></span>
                      Strong community engagement
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-brand-text mb-6">
                Ready to Transform Your Social Media Presence?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Let's create a social media strategy that drives real enrollment results.
              </p>
              <CTAButtons className="justify-center" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialMediaManagement;
