import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { breadcrumbSchema } from '../lib/jsonld';

const CaseStudies = () => {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Case Studies', url: '/case-studies' }
  ];

  const jsonLd = breadcrumbSchema(breadcrumbItems);

  const caseStudies = [
    {
      id: 1,
      title: 'XYZ College (Kerala) — 5× Instagram Engagement in 60 Days',
      college: 'XYZ College',
      location: 'Kerala',
      challenge: 'Low social media engagement and poor brand visibility during admission season',
      result: '500% increase in Instagram engagement, 300% more inquiries',
      timeline: '60 Days',
      category: 'Social Media Growth',
      metrics: [
        { label: 'Engagement Rate', before: '2.1%', after: '12.3%' },
        { label: 'Followers', before: '1.2K', after: '5.8K' },
        { label: 'Inquiries/Month', before: '45', after: '180' }
      ],
      services: ['Social Media Management', 'Creative Design', 'Content Strategy'],
      link: '/case-studies/xyz-college-kerala',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      id: 2,
      title: 'Chennai Engineering College — From Zero to #1 Local Ranking',
      college: 'Chennai Engineering College',
      location: 'Tamil Nadu',
      challenge: 'Poor search visibility for engineering programs in Chennai',
      result: 'Ranked #1 for "Engineering College in Chennai" in 4 months',
      timeline: '4 Months',
      category: 'SEO Success',
      metrics: [
        { label: 'Organic Traffic', before: '2.3K/month', after: '18.5K/month' },
        { label: 'Keyword Rankings', before: '12 keywords', after: '145 keywords' },
        { label: 'Local Visibility', before: '15%', after: '89%' }
      ],
      services: ['SEO', 'Content Marketing', 'Local SEO'],
      link: '#',
      gradient: 'from-green-500 to-teal-600'
    },
    {
      id: 3,
      title: 'Hyderabad Business School — 400% ROI from Facebook Ads',
      college: 'Hyderabad Business School',
      location: 'Andhra Pradesh',
      challenge: 'High cost per lead and low conversion rates from paid campaigns',
      result: '400% improvement in ROAS, 60% reduction in cost per lead',
      timeline: '3 Months',
      category: 'Performance Marketing',
      metrics: [
        { label: 'Cost Per Lead', before: '₹850', after: '₹340' },
        { label: 'ROAS', before: '1.2x', after: '4.8x' },
        { label: 'Conversion Rate', before: '2.1%', after: '8.7%' }
      ],
      services: ['Meta Ads', 'Google Ads', 'Landing Page Optimization'],
      link: '#',
      gradient: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <>
      <SEO
        title="Case Studies | Results for Colleges"
        description="Real wins: more engagement, more leads, stronger admissions seasons."
        path="/case-studies"
        jsonLd={jsonLd}
      />

      <Breadcrumbs items={breadcrumbItems} />

      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-brand-text mb-6">
                Case <span className="gradient-text">Studies</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Real wins: more engagement, more leads, stronger admissions seasons. See how we've helped colleges across South India achieve remarkable results.
              </p>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-brand-blue mb-2">20+</div>
                <div className="text-gray-600">Successful Projects</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-brand-blue mb-2">300%</div>
                <div className="text-gray-600">Average Growth</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-brand-blue mb-2">3</div>
                <div className="text-gray-600">States Covered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-brand-blue mb-2">95%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
            </div>

            {/* Case Studies Grid */}
            <div className="space-y-12">
              {caseStudies.map((study, index) => (
                <div key={study.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Content */}
                    <div className="p-8">
                      <div className="flex items-center mb-4">
                        <span className="px-3 py-1 bg-brand-gradient text-white text-sm rounded-full">
                          {study.category}
                        </span>
                        <span className="ml-3 text-gray-500 text-sm">{study.timeline}</span>
                      </div>
                      
                      <h2 className="text-2xl font-bold text-brand-text mb-4">
                        {study.title}
                      </h2>
                      
                      <div className="space-y-4 mb-6">
                        <div>
                          <h3 className="font-semibold text-brand-text mb-2">Challenge</h3>
                          <p className="text-gray-600">{study.challenge}</p>
                        </div>
                        
                        <div>
                          <h3 className="font-semibold text-brand-text mb-2">Result</h3>
                          <p className="text-gray-600">{study.result}</p>
                        </div>
                      </div>

                      {/* Services Used */}
                      <div className="mb-6">
                        <h3 className="font-semibold text-brand-text mb-2">Services Used</h3>
                        <div className="flex flex-wrap gap-2">
                          {study.services.map((service, serviceIndex) => (
                            <span 
                              key={serviceIndex}
                              className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-lg"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="flex items-center">
                        {study.link !== '#' ? (
                          <Link
                            to={study.link}
                            className="inline-flex items-center px-6 py-3 bg-brand-gradient text-white rounded-xl font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                          >
                            Read Full Case Study
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                            </svg>
                          </Link>
                        ) : (
                          <span className="inline-flex items-center px-6 py-3 bg-gray-200 text-gray-500 rounded-xl font-semibold">
                            Coming Soon
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className={`bg-gradient-to-br ${study.gradient} p-8 text-white relative overflow-hidden`}>
                      <div className="relative z-10">
                        <h3 className="text-xl font-bold mb-6">Key Metrics</h3>
                        <div className="space-y-6">
                          {study.metrics.map((metric, metricIndex) => (
                            <div key={metricIndex} className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                              <div className="text-sm opacity-80 mb-1">{metric.label}</div>
                              <div className="flex items-center justify-between">
                                <div>
                                  <div className="text-xs opacity-70">Before</div>
                                  <div className="text-lg font-bold">{metric.before}</div>
                                </div>
                                <svg className="w-6 h-6 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                                </svg>
                                <div>
                                  <div className="text-xs opacity-70">After</div>
                                  <div className="text-lg font-bold">{metric.after}</div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Background decoration */}
                      <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full"></div>
                      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/5 rounded-full"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Client Testimonials */}
            <div className="mt-20">
              <h2 className="text-3xl font-bold text-brand-text mb-12 text-center">
                What Our Clients Say
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-xl">★</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 italic">
                    "The results speak for themselves. Our social media engagement went through the roof, and we saw a direct impact on our admission inquiries."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-brand-gradient rounded-full flex items-center justify-center text-white font-bold mr-4">
                      AC
                    </div>
                    <div>
                      <div className="font-semibold text-brand-text">Dr. Arjun Chakraborty</div>
                      <div className="text-sm text-gray-500">Dean, XYZ College Kerala</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-xl">★</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 italic">
                    "TREND MAKERS 360 understood our challenges and delivered exactly what we needed. The ROI from our ad campaigns improved dramatically."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-brand-gradient rounded-full flex items-center justify-center text-white font-bold mr-4">
                      RK
                    </div>
                    <div>
                      <div className="font-semibold text-brand-text">Rajesh Kumar</div>
                      <div className="text-sm text-gray-500">Director, Hyderabad Business School</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-20 bg-brand-gradient rounded-2xl p-8 md:p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Become Our Next Success Story?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Let's discuss your challenges and create a strategy that delivers measurable results for your college.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-white text-brand-blue rounded-xl font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  Get Your Free Strategy Session
                </Link>
                <Link
                  to="/services"
                  className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-brand-blue transition-all duration-300"
                >
                  Explore Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudies;
