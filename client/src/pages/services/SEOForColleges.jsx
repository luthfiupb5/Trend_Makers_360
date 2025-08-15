import React from 'react';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';
import CTAButtons from '../../components/CTAButtons';
import { breadcrumbSchema, serviceSchema } from '../../lib/jsonld';

const SEOForColleges = () => {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'SEO for Colleges', url: '/services/seo-for-colleges' }
  ];

  const jsonLd = [
    breadcrumbSchema(breadcrumbItems),
    serviceSchema({
      name: 'SEO for Colleges',
      description: 'Rank for program keywords and admissions queries with technical, on-page, and local SEO optimization specifically for educational institutions.',
      url: '/services/seo-for-colleges',
      areaServed: ['Tamil Nadu', 'Kerala', 'Andhra Pradesh']
    })
  ];

  return (
    <>
      <SEO
        title="SEO for Colleges in Tamil Nadu | TREND MAKERS 360"
        description="Rank for program keywords and admissions queries with technical, on-page, and local SEO."
        path="/services/seo-for-colleges"
        jsonLd={jsonLd}
      />

      <Breadcrumbs items={breadcrumbItems} />

      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                </svg>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-brand-text mb-6">
                SEO for <span className="gradient-text">Colleges</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Rank for program keywords and admissions queries with technical, on-page, and local SEO optimization specifically designed for educational institutions.
              </p>
            </div>

            {/* SEO Services */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-brand-text mb-8 text-center">Our SEO Services</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: 'Technical SEO',
                    description: 'Foundation optimization for better search performance',
                    items: [
                      'Website speed optimization',
                      'Mobile responsiveness audit',
                      'Site structure improvements',
                      'Schema markup implementation',
                      'XML sitemap optimization',
                      'Robots.txt configuration'
                    ],
                    icon: '⚙️'
                  },
                  {
                    title: 'On-Page SEO',
                    description: 'Content and page-level optimization',
                    items: [
                      'Title tag optimization',
                      'Meta description crafting',
                      'Header structure improvement',
                      'Internal linking strategy',
                      'Image optimization',
                      'Content optimization'
                    ],
                    icon: '📄'
                  },
                  {
                    title: 'Local SEO',
                    description: 'Location-based visibility for your college',
                    items: [
                      'Google My Business optimization',
                      'Local citation building',
                      'Location page creation',
                      'Review management',
                      'Local keyword targeting',
                      'NAP consistency'
                    ],
                    icon: '📍'
                  },
                  {
                    title: 'Content SEO',
                    description: 'Strategic content creation and optimization',
                    items: [
                      'Keyword research & strategy',
                      'Program page optimization',
                      'Blog content strategy',
                      'FAQ page optimization',
                      'Admission guide creation',
                      'Student success stories'
                    ],
                    icon: '📝'
                  }
                ].map((service, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg p-6">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold text-brand-text mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          <span className="text-gray-600 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Keyword Strategy */}
            <div className="bg-gray-50 rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold text-brand-text mb-8 text-center">College-Specific Keyword Strategy</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-lg font-bold text-brand-text mb-4">Program Keywords</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>"Engineering colleges in Chennai"</li>
                    <li>"MBA admission in Kerala"</li>
                    <li>"Best medical colleges TN"</li>
                    <li>"Arts colleges in Kochi"</li>
                    <li>"Computer science degree"</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-text mb-4">Admission Keywords</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>"College admission 2024"</li>
                    <li>"Application deadline"</li>
                    <li>"Entrance exam dates"</li>
                    <li>"Scholarship programs"</li>
                    <li>"Fee structure"</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-text mb-4">Local Keywords</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>"Colleges near me"</li>
                    <li>"Top colleges in [City]"</li>
                    <li>"University in Tamil Nadu"</li>
                    <li>"Education in Kerala"</li>
                    <li>"Campus in Andhra Pradesh"</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* SEO Audit Checklist */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-brand-text mb-8 text-center">Our SEO Audit Process</h2>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-brand-text mb-4">Technical Analysis</h3>
                    <ul className="space-y-3">
                      {[
                        'Site speed and performance analysis',
                        'Mobile usability assessment',
                        'Crawl error identification',
                        'Indexation status review',
                        'Security and HTTPS implementation'
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                          </svg>
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-text mb-4">Content Analysis</h3>
                    <ul className="space-y-3">
                      {[
                        'Keyword gap analysis',
                        'Content quality assessment',
                        'Duplicate content identification',
                        'Meta tag optimization opportunities',
                        'Competitor content analysis'
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                          </svg>
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Expected Results Timeline */}
            <div className="bg-brand-gradient rounded-2xl p-8 text-white mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">SEO Results Timeline</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">1-3</div>
                  <div className="text-xl mb-2">Months</div>
                  <ul className="text-sm opacity-90 space-y-1">
                    <li>Technical improvements</li>
                    <li>Local SEO setup</li>
                    <li>Basic ranking improvements</li>
                  </ul>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">3-6</div>
                  <div className="text-xl mb-2">Months</div>
                  <ul className="text-sm opacity-90 space-y-1">
                    <li>Keyword ranking growth</li>
                    <li>Increased organic traffic</li>
                    <li>Better local visibility</li>
                  </ul>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">6-12</div>
                  <div className="text-xl mb-2">Months</div>
                  <ul className="text-sm opacity-90 space-y-1">
                    <li>Top rankings achieved</li>
                    <li>Significant traffic increase</li>
                    <li>Higher inquiry rates</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Local SEO for Colleges */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-brand-text mb-4">Google My Business Optimization</h3>
                <ul className="space-y-3">
                  {[
                    'Complete profile optimization',
                    'Regular post updates',
                    'Photo and video uploads',
                    'Review response management',
                    'Q&A section optimization',
                    'Event and announcement posting'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span className="text-gray-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-brand-text mb-4">Content Strategy</h3>
                <ul className="space-y-3">
                  {[
                    'Program-specific landing pages',
                    'Admission guide content',
                    'Student life blog posts',
                    'Faculty achievement articles',
                    'Campus news and updates',
                    'Success story features'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span className="text-gray-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-brand-text mb-6">
                Ready to Dominate Search Results?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Let's get your college ranking for the keywords that matter most to your admissions goals.
              </p>
              <CTAButtons className="justify-center" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SEOForColleges;
