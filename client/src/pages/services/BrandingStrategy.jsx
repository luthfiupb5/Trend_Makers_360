import React from 'react';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';
import CTAButtons from '../../components/CTAButtons';
import { breadcrumbSchema, serviceSchema } from '../../lib/jsonld';

const BrandingStrategy = () => {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Branding Strategy', url: '/services/branding-strategy' }
  ];

  const jsonLd = [
    breadcrumbSchema(breadcrumbItems),
    serviceSchema({
      name: 'Branding Strategy',
      description: 'Build consistent brand voice, color systems, hashtags, and content pillars for your college to create a memorable identity.',
      url: '/services/branding-strategy',
      areaServed: ['Tamil Nadu', 'Kerala', 'Andhra Pradesh']
    })
  ];

  return (
    <>
      <SEO
        title="Branding Strategy for Colleges | Voice, Visuals, Hashtags"
        description="Build consistent brand voice, color systems, hashtags, and content pillars for your college."
        path="/services/branding-strategy"
        jsonLd={jsonLd}
      />

      <Breadcrumbs items={breadcrumbItems} />

      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                </svg>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-brand-text mb-6">
                Branding <span className="gradient-text">Strategy</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Build consistent brand voice, color systems, hashtags, and content pillars to create a memorable and recognizable identity for your college.
              </p>
            </div>

            {/* Brand Elements */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-brand-text mb-8 text-center">Brand Elements We Develop</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    element: 'Brand Voice & Tone',
                    description: 'Personality and communication style',
                    details: [
                      'Voice personality definition',
                      'Tone guidelines for different contexts',
                      'Communication do\'s and don\'ts',
                      'Sample messaging examples'
                    ],
                    icon: '🗣️',
                    color: 'from-blue-500 to-blue-600'
                  },
                  {
                    element: 'Visual Identity',
                    description: 'Colors, typography, and visual style',
                    details: [
                      'Color palette selection',
                      'Typography guidelines',
                      'Logo usage standards',
                      'Visual style direction'
                    ],
                    icon: '🎨',
                    color: 'from-purple-500 to-purple-600'
                  },
                  {
                    element: 'Content Pillars',
                    description: 'Strategic content themes and topics',
                    details: [
                      '4-6 core content pillars',
                      'Content mix percentages',
                      'Seasonal content planning',
                      'Engagement strategies'
                    ],
                    icon: '📊',
                    color: 'from-green-500 to-green-600'
                  },
                  {
                    element: 'Hashtag Strategy',
                    description: 'Branded and campaign hashtags',
                    details: [
                      'Branded hashtag creation',
                      'Campaign-specific hashtags',
                      'Community hashtags',
                      'Hashtag usage guidelines'
                    ],
                    icon: '#️⃣',
                    color: 'from-orange-500 to-orange-600'
                  },
                  {
                    element: 'Messaging Framework',
                    description: 'Key messages and value propositions',
                    details: [
                      'Core value propositions',
                      'Key messaging pillars',
                      'Audience-specific messages',
                      'Competitive differentiation'
                    ],
                    icon: '💬',
                    color: 'from-pink-500 to-pink-600'
                  },
                  {
                    element: 'Brand Guidelines',
                    description: 'Comprehensive brand usage document',
                    details: [
                      'Complete brand guidebook',
                      'Usage examples',
                      'Implementation checklist',
                      'Brand compliance standards'
                    ],
                    icon: '📖',
                    color: 'from-indigo-500 to-indigo-600'
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg p-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center text-white mb-4 text-2xl`}>
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-brand-text mb-2">{item.element}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{item.description}</p>
                    <ul className="space-y-2">
                      {item.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="text-xs text-gray-600 flex items-start">
                          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Brand Discovery Process */}
            <div className="bg-gray-50 rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold text-brand-text mb-8 text-center">Our Brand Discovery Process</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-brand-text mb-4">Research Phase</h3>
                  <ul className="space-y-3">
                    {[
                      'Stakeholder interviews',
                      'Student and parent surveys',
                      'Competitive analysis',
                      'Market positioning review',
                      'Current brand audit',
                      'SWOT analysis'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-text mb-4">Strategy Development</h3>
                  <ul className="space-y-3">
                    {[
                      'Brand personality definition',
                      'Value proposition crafting',
                      'Target audience personas',
                      'Brand positioning statement',
                      'Messaging hierarchy',
                      'Visual direction planning'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Content Pillar Examples */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-brand-text mb-8 text-center">Sample Content Pillar Strategy</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    pillar: 'Academic Excellence',
                    percentage: '30%',
                    examples: ['Faculty achievements', 'Research highlights', 'Academic rankings', 'Course spotlights'],
                    color: 'bg-blue-500'
                  },
                  {
                    pillar: 'Student Life',
                    percentage: '25%',
                    examples: ['Campus events', 'Student achievements', 'Club activities', 'Behind-the-scenes'],
                    color: 'bg-green-500'
                  },
                  {
                    pillar: 'Career Success',
                    percentage: '25%',
                    examples: ['Alumni stories', 'Placement news', 'Industry connections', 'Skill development'],
                    color: 'bg-purple-500'
                  },
                  {
                    pillar: 'Community Impact',
                    percentage: '20%',
                    examples: ['Social initiatives', 'Community service', 'Sustainability efforts', 'Local partnerships'],
                    color: 'bg-orange-500'
                  }
                ].map((pillar, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg p-6">
                    <div className={`w-full h-3 ${pillar.color} rounded-full mb-4`}></div>
                    <h3 className="text-lg font-bold text-brand-text mb-2">{pillar.pillar}</h3>
                    <div className="text-2xl font-bold text-brand-blue mb-3">{pillar.percentage}</div>
                    <ul className="space-y-1">
                      {pillar.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="text-xs text-gray-600">{example}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Brand Voice Examples */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-brand-text mb-4">Voice Characteristics</h3>
                <div className="space-y-4">
                  {[
                    { trait: 'Inspiring', description: 'Motivational and encouraging' },
                    { trait: 'Professional', description: 'Credible and trustworthy' },
                    { trait: 'Approachable', description: 'Friendly and accessible' },
                    { trait: 'Innovative', description: 'Forward-thinking and modern' }
                  ].map((trait, index) => (
                    <div key={index} className="border-l-4 border-brand-blue pl-4">
                      <div className="font-semibold text-brand-text">{trait.trait}</div>
                      <div className="text-sm text-gray-600">{trait.description}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-brand-text mb-4">Tone Variations</h3>
                <div className="space-y-4">
                  {[
                    { context: 'Academic Content', tone: 'Professional, informative' },
                    { context: 'Student Events', tone: 'Energetic, fun' },
                    { context: 'Admission Info', tone: 'Helpful, encouraging' },
                    { context: 'Crisis Communication', tone: 'Clear, empathetic' }
                  ].map((item, index) => (
                    <div key={index} className="border-l-4 border-brand-cyan pl-4">
                      <div className="font-semibold text-brand-text">{item.context}</div>
                      <div className="text-sm text-gray-600">{item.tone}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Brand Implementation */}
            <div className="bg-brand-gradient rounded-2xl p-8 text-white mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">Brand Implementation Timeline</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">Week 1-2</div>
                  <div className="text-xl mb-2">Discovery & Research</div>
                  <ul className="text-sm opacity-90 space-y-1">
                    <li>Stakeholder interviews</li>
                    <li>Competitive analysis</li>
                    <li>Current brand audit</li>
                  </ul>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">Week 3-4</div>
                  <div className="text-xl mb-2">Strategy Development</div>
                  <ul className="text-sm opacity-90 space-y-1">
                    <li>Brand strategy creation</li>
                    <li>Visual identity design</li>
                    <li>Content framework</li>
                  </ul>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">Week 5-6</div>
                  <div className="text-xl mb-2">Guidelines & Launch</div>
                  <ul className="text-sm opacity-90 space-y-1">
                    <li>Brand guidelines creation</li>
                    <li>Team training</li>
                    <li>Implementation support</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Brand Deliverables */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-brand-text mb-8 text-center">What You'll Receive</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-brand-text mb-4">Brand Strategy Document</h3>
                  <ul className="space-y-2">
                    {[
                      'Brand positioning statement',
                      'Target audience personas',
                      'Value proposition framework',
                      'Competitive differentiation',
                      'Brand personality traits',
                      'Messaging hierarchy'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span className="text-gray-600 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-brand-text mb-4">Visual Brand Guidelines</h3>
                  <ul className="space-y-2">
                    {[
                      'Logo usage standards',
                      'Color palette with codes',
                      'Typography guidelines',
                      'Photography style guide',
                      'Social media templates',
                      'Implementation examples'
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

            {/* CTA */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-brand-text mb-6">
                Ready to Build a Memorable Brand?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Let's create a brand strategy that makes your college unforgettable and drives enrollment.
              </p>
              <CTAButtons className="justify-center" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandingStrategy;
