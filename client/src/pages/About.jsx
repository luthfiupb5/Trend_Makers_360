import React from 'react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import CTAButtons from '../components/CTAButtons';
import { breadcrumbSchema } from '../lib/jsonld';

const About = () => {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' }
  ];

  const jsonLd = breadcrumbSchema(breadcrumbItems);

  return (
    <>
      <SEO
        title="About TREND MAKERS 360"
        description="From Kerala to Andhra, now powering Tamil Nadu's college marketing with creative + performance."
        path="/about"
        jsonLd={jsonLd}
      />

      <Breadcrumbs items={breadcrumbItems} />

      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-brand-text mb-6">
                About <span className="gradient-text">TREND MAKERS 360</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                From Kerala to Andhra, now powering Tamil Nadu's college marketing with creative + performance.
              </p>
            </div>

            {/* Story Section */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold text-brand-text mb-6">Our Story</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Founded in 2022, TREND MAKERS 360 began with a simple observation: colleges across South India were struggling to connect with prospective students in the digital age. Traditional marketing methods weren't cutting through the noise, and generic digital agencies didn't understand the unique challenges of education marketing.
                  </p>
                  <p>
                    We started with a handful of colleges in Kerala, focusing exclusively on understanding their admissions cycles, student demographics, and what truly drives enrollment decisions. Our specialized approach quickly showed results, and word spread.
                  </p>
                  <p>
                    Today, we're proud to serve 20+ educational institutions across Tamil Nadu, Kerala, and Andhra Pradesh, having delivered over 1000 creative assets and countless successful campaigns.
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 h-80 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-brand-gradient rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                    TM
                  </div>
                  <p className="text-brand-text font-semibold">Since 2022</p>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gray-50 rounded-2xl p-8 mb-16">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-brand-blue mb-2">20+</div>
                  <div className="text-gray-600">Institutions</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-blue mb-2">1000+</div>
                  <div className="text-gray-600">Creatives</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-blue mb-2">3</div>
                  <div className="text-gray-600">States</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-blue mb-2">2+</div>
                  <div className="text-gray-600">Years</div>
                </div>
              </div>
            </div>

            {/* Team Preview */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-brand-text mb-8 text-center">Our Team</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { name: 'Creative Team', role: 'Designers & Content Creators', count: '5+' },
                  { name: 'Strategy Team', role: 'Marketing Strategists', count: '3+' },
                  { name: 'Tech Team', role: 'Developers & SEO Experts', count: '4+' }
                ].map((team, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-center">
                    <div className="w-16 h-16 bg-brand-gradient rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                      {team.count}
                    </div>
                    <h3 className="text-xl font-bold text-brand-text mb-2">{team.name}</h3>
                    <p className="text-gray-600">{team.role}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Values */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-brand-text mb-8 text-center">Our Values</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: 'Education First',
                    description: 'We deeply understand the education sector and prioritize student success alongside institutional growth.'
                  },
                  {
                    title: 'Data-Driven Creativity',
                    description: 'Every creative decision is backed by insights, analytics, and a clear understanding of what converts.'
                  },
                  {
                    title: 'Local Expertise',
                    description: 'Regional knowledge matters. We understand local cultures, languages, and market dynamics.'
                  },
                  {
                    title: 'Partnership Approach',
                    description: 'We work as an extension of your team, not just a vendor. Your success is our success.'
                  }
                ].map((value, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg p-6">
                    <h3 className="text-xl font-bold text-brand-text mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-brand-text mb-6">
                Ready to work with us?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Let's discuss how we can help your college stand out in the digital space.
              </p>
              <CTAButtons className="justify-center" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
