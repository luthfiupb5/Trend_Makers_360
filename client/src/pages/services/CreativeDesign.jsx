import React from 'react';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';
import CTAButtons from '../../components/CTAButtons';
import { breadcrumbSchema, serviceSchema } from '../../lib/jsonld';

const CreativeDesign = () => {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Creative Design', url: '/services/creative-design' }
  ];

  const jsonLd = [
    breadcrumbSchema(breadcrumbItems),
    serviceSchema({
      name: 'Creative Design',
      description: 'Admissions campaigns, event posters, reels, and carousels that your students actually share and engage with.',
      url: '/services/creative-design',
      areaServed: ['Tamil Nadu', 'Kerala', 'Andhra Pradesh']
    })
  ];

  return (
    <>
      <SEO
        title="Creative Design for Colleges | Scroll-Stopping Posters & Reels"
        description="Admissions campaigns, event posters, reels, and carousels that your students actually share."
        path="/services/creative-design"
        jsonLd={jsonLd}
      />

      <Breadcrumbs items={breadcrumbItems} />

      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-brand-text mb-6">
                Creative <span className="gradient-text">Design</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Admissions campaigns, event posters, reels, and carousels that your students actually share and that drive real engagement.
              </p>
            </div>

            {/* Design Categories */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-brand-text mb-8 text-center">What We Design</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    category: 'Admission Campaigns',
                    items: ['Application deadline reminders', 'Course highlight graphics', 'Scholarship announcements', 'Admission process infographics'],
                    color: 'from-blue-500 to-blue-600'
                  },
                  {
                    category: 'Event Promotion',
                    items: ['Cultural fest posters', 'Webinar announcements', 'Guest lecture graphics', 'Sports event banners'],
                    color: 'from-purple-500 to-purple-600'
                  },
                  {
                    category: 'Social Media Content',
                    items: ['Instagram story templates', 'Carousel post designs', 'Reel cover graphics', 'Quote card templates'],
                    color: 'from-pink-500 to-pink-600'
                  },
                  {
                    category: 'Achievement Posts',
                    items: ['Student success stories', 'Faculty achievements', 'Ranking announcements', 'Award celebrations'],
                    color: 'from-green-500 to-green-600'
                  },
                  {
                    category: 'Festive Content',
                    items: ['Holiday greetings', 'Cultural celebrations', 'National day posts', 'Seasonal campaigns'],
                    color: 'from-orange-500 to-orange-600'
                  },
                  {
                    category: 'Brand Materials',
                    items: ['Digital letterheads', 'Presentation templates', 'Email signatures', 'Brand guidelines'],
                    color: 'from-indigo-500 to-indigo-600'
                  }
                ].map((category, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg p-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center text-white mb-4`}>
                      <span className="text-2xl font-bold">{category.category.charAt(0)}</span>
                    </div>
                    <h3 className="text-xl font-bold text-brand-text mb-4">{category.category}</h3>
                    <ul className="space-y-2">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-600 text-sm flex items-start">
                          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Design Process */}
            <div className="bg-gray-50 rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold text-brand-text mb-8 text-center">Our Design Process</h2>
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  {
                    step: '01',
                    title: 'Brief & Research',
                    description: 'Understanding your brand, audience, and campaign objectives'
                  },
                  {
                    step: '02',
                    title: 'Concept Development',
                    description: 'Creating initial concepts and mood boards for approval'
                  },
                  {
                    step: '03',
                    title: 'Design Execution',
                    description: 'Finalizing designs with multiple format variations'
                  },
                  {
                    step: '04',
                    title: 'Delivery & Support',
                    description: 'File delivery with usage guidelines and support'
                  }
                ].map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-brand-gradient rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-bold text-brand-text mb-3">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Design Styles */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-brand-text mb-8 text-center">Design Styles We Master</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { style: 'Modern Minimalist', example: 'Clean, professional, corporate-friendly' },
                  { style: 'Vibrant & Youthful', example: 'Colorful, energetic, student-appealing' },
                  { style: 'Academic Traditional', example: 'Classic, elegant, institution-focused' },
                  { style: 'Tech & Innovation', example: 'Futuristic, tech-savvy, progressive' }
                ].map((style, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-4 text-center">
                    <div className="w-full h-24 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg mb-3 flex items-center justify-center">
                      <span className="text-gray-500 text-xs">Design Style</span>
                    </div>
                    <h3 className="font-bold text-brand-text text-sm mb-1">{style.style}</h3>
                    <p className="text-gray-600 text-xs">{style.example}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* File Formats & Deliverables */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-brand-text mb-4">File Formats Delivered</h3>
                <div className="grid grid-cols-2 gap-3">
                  {['PNG (High-res)', 'JPEG (Optimized)', 'PDF (Print)', 'SVG (Vector)', 'MP4 (Video)', 'GIF (Animated)'].map((format, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-3 text-center">
                      <span className="text-sm font-medium text-brand-text">{format}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-brand-text mb-4">What You Get</h3>
                <ul className="space-y-3">
                  {[
                    'Source files for future edits',
                    'Multiple size variations',
                    'Usage guidelines document',
                    'Brand-consistent templates',
                    'Quick turnaround revisions'
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

            {/* Sample Deliverables Timeline */}
            <div className="bg-brand-gradient rounded-2xl p-8 text-white mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">Typical Turnaround Times</h2>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold mb-2">1-2 Days</div>
                  <div className="text-lg mb-2">Social Media Posts</div>
                  <p className="text-sm opacity-90">Single graphics, story templates</p>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">3-5 Days</div>
                  <div className="text-lg mb-2">Campaign Materials</div>
                  <p className="text-sm opacity-90">Event posters, admission graphics</p>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">5-7 Days</div>
                  <div className="text-lg mb-2">Brand Packages</div>
                  <p className="text-sm opacity-90">Complete brand identity sets</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-brand-text mb-6">
                Ready for Designs That Drive Results?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Let's create visuals that make your college stand out and drive real engagement.
              </p>
              <CTAButtons className="justify-center" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreativeDesign;
