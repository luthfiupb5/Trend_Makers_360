import React from 'react';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';
import CTAButtons from '../../components/CTAButtons';
import { breadcrumbSchema, serviceSchema } from '../../lib/jsonld';

const PerformanceMarketing = () => {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Performance Marketing', url: '/services/performance-marketing' }
  ];

  const jsonLd = [
    breadcrumbSchema(breadcrumbItems),
    serviceSchema({
      name: 'Performance Marketing',
      description: 'Smart targeting, landing pages, conversion tracking — ROI-focused paid campaigns for colleges using Meta and Google Ads.',
      url: '/services/performance-marketing',
      areaServed: ['Tamil Nadu', 'Kerala', 'Andhra Pradesh']
    })
  ];

  return (
    <>
      <SEO
        title="Meta & Google Ads for Colleges | Lead Generation"
        description="Smart targeting, landing pages, conversion tracking — ROI-focused paid campaigns."
        path="/services/performance-marketing"
        jsonLd={jsonLd}
      />

      <Breadcrumbs items={breadcrumbItems} />

      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                </svg>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-brand-text mb-6">
                Performance <span className="gradient-text">Marketing</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Smart targeting, optimized landing pages, and conversion tracking — ROI-focused paid campaigns that deliver measurable results for your college.
              </p>
            </div>

            {/* Platforms */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-brand-text mb-8 text-center">Platforms We Master</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-white mr-4">
                      <span className="font-bold text-xl">G</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-brand-text">Google Ads</h3>
                      <p className="text-gray-600">Search, Display, YouTube</p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {[
                      'Search campaigns for program keywords',
                      'Display campaigns for brand awareness',
                      'YouTube ads for campus showcases',
                      'Shopping ads for course catalogs',
                      'Performance Max campaigns',
                      'Local campaigns for nearby students'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span className="text-gray-600 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white mr-4">
                      <span className="font-bold text-xl">M</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-brand-text">Meta Ads</h3>
                      <p className="text-gray-600">Facebook, Instagram, Messenger</p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {[
                      'Lead generation campaigns',
                      'Event promotion ads',
                      'Video ads for campus tours',
                      'Carousel ads for programs',
                      'Retargeting campaigns',
                      'Lookalike audience targeting'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span className="text-gray-600 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Campaign Types */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-brand-text mb-8 text-center">Campaign Types We Run</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    type: 'Lead Generation',
                    description: 'Capture prospective student information',
                    tactics: ['Form-based campaigns', 'Phone call campaigns', 'Brochure downloads', 'Webinar registrations'],
                    color: 'from-green-500 to-green-600'
                  },
                  {
                    type: 'Brand Awareness',
                    description: 'Increase college visibility and recognition',
                    tactics: ['Video view campaigns', 'Reach campaigns', 'Brand recall surveys', 'Impression tracking'],
                    color: 'from-purple-500 to-purple-600'
                  },
                  {
                    type: 'Conversion Focused',
                    description: 'Drive applications and enrollments',
                    tactics: ['Application campaigns', 'Event attendance', 'Campus visit bookings', 'Course inquiries'],
                    color: 'from-orange-500 to-orange-600'
                  }
                ].map((campaign, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg p-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${campaign.color} rounded-xl flex items-center justify-center text-white mb-4`}>
                      <span className="text-2xl font-bold">{campaign.type.charAt(0)}</span>
                    </div>
                    <h3 className="text-lg font-bold text-brand-text mb-2">{campaign.type}</h3>
                    <p className="text-gray-600 text-sm mb-4">{campaign.description}</p>
                    <ul className="space-y-2">
                      {campaign.tactics.map((tactic, tacticIndex) => (
                        <li key={tacticIndex} className="text-xs text-gray-600 flex items-start">
                          <span className="w-1 h-1 bg-gray-400 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                          {tactic}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Targeting Strategy */}
            <div className="bg-gray-50 rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold text-brand-text mb-8 text-center">Our Targeting Strategy</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    category: 'Demographics',
                    items: ['Age: 16-22 years', 'Location: Target cities', 'Education level', 'Income brackets']
                  },
                  {
                    category: 'Interests',
                    items: ['Education seekers', 'Career-focused', 'Skill development', 'Professional growth']
                  },
                  {
                    category: 'Behaviors',
                    items: ['College research', 'Education shopping', 'Career exploration', 'Application period']
                  },
                  {
                    category: 'Custom Audiences',
                    items: ['Website visitors', 'Video viewers', 'Lookalike audiences', 'Custom lists']
                  }
                ].map((target, index) => (
                  <div key={index} className="bg-white rounded-xl p-4">
                    <h3 className="font-bold text-brand-text mb-3">{target.category}</h3>
                    <ul className="space-y-1">
                      {target.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-sm text-gray-600">{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Landing Page Strategy */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-brand-text mb-8 text-center">Landing Page Optimization</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-brand-text mb-4">Page Elements We Optimize</h3>
                  <ul className="space-y-3">
                    {[
                      'Compelling headlines and sub-headlines',
                      'Clear value propositions',
                      'Trust signals and testimonials',
                      'Optimized form placement',
                      'Mobile-responsive design',
                      'Fast loading speeds'
                    ].map((element, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                        <span className="text-gray-600">{element}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-brand-text mb-4">A/B Testing Focus</h3>
                  <ul className="space-y-3">
                    {[
                      'Headline variations',
                      'CTA button colors and text',
                      'Form field optimization',
                      'Image and video placement',
                      'Social proof positioning',
                      'Page layout structures'
                    ].map((test, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                        <span className="text-gray-600">{test}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Conversion Tracking */}
            <div className="bg-brand-gradient rounded-2xl p-8 text-white mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">What We Track & Measure</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Primary Metrics</h3>
                  <ul className="space-y-2 text-sm opacity-90">
                    <li>• Cost per lead (CPL)</li>
                    <li>• Cost per acquisition (CPA)</li>
                    <li>• Return on ad spend (ROAS)</li>
                    <li>• Conversion rate</li>
                    <li>• Click-through rate (CTR)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Secondary Metrics</h3>
                  <ul className="space-y-2 text-sm opacity-90">
                    <li>• Quality score</li>
                    <li>• Impression share</li>
                    <li>• Average position</li>
                    <li>• Frequency</li>
                    <li>• Audience overlap</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Business Impact</h3>
                  <ul className="space-y-2 text-sm opacity-90">
                    <li>• Lead quality scores</li>
                    <li>• Application completion rates</li>
                    <li>• Enrollment attribution</li>
                    <li>• Lifetime value (LTV)</li>
                    <li>• Revenue attribution</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Campaign Management Process */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-brand-text mb-8 text-center">Our Campaign Management Process</h2>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  {
                    step: '01',
                    title: 'Strategy & Setup',
                    description: 'Audience research, campaign structure, tracking implementation'
                  },
                  {
                    step: '02',
                    title: 'Launch & Monitor',
                    description: 'Campaign launch, daily monitoring, performance tracking'
                  },
                  {
                    step: '03',
                    title: 'Optimize & Scale',
                    description: 'A/B testing, bid optimization, audience expansion'
                  },
                  {
                    step: '04',
                    title: 'Report & Improve',
                    description: 'Monthly reporting, insights analysis, strategy refinement'
                  }
                ].map((process, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-center">
                    <div className="w-16 h-16 bg-brand-gradient rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                      {process.step}
                    </div>
                    <h3 className="text-lg font-bold text-brand-text mb-3">{process.title}</h3>
                    <p className="text-gray-600 text-sm">{process.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-brand-text mb-6">
                Ready to Drive Quality Leads?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Let's create performance marketing campaigns that deliver measurable ROI for your college.
              </p>
              <CTAButtons className="justify-center" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PerformanceMarketing;
