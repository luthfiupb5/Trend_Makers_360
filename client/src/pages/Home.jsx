import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import StatRow from '../components/StatRow';
import ServiceCard from '../components/ServiceCard';
import TestimonialSlider from '../components/TestimonialSlider';
import FAQ from '../components/FAQ';
import CTAButtons from '../components/CTAButtons';
import { orgSchema, breadcrumbSchema } from '../lib/jsonld';

const Home = () => {
  const jsonLd = [
    orgSchema(),
    breadcrumbSchema([{ name: 'Home', url: '/' }])
  ];

  return (
    <>
      <SEO
        title="TREND MAKERS 360 | College Digital Marketing in Tamil Nadu"
        description="Scroll-stopping creatives, SEO, and ads for colleges in Tamil Nadu. From Kerala to AP — we make your brand trend."
        path="/"
        jsonLd={jsonLd}
      />

      {/* Hero Section */}
      <section className="pt-8 pb-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-text mb-6">
                  <span className="gradient-text">TREND MAKERS</span> 360
                </h1>
                <p className="text-xl md:text-2xl text-brand-blue font-semibold mb-4">
                  Trending starts here.
                </p>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl">
                  We help colleges dominate the digital space — from scroll-stopping social media to precision-targeted SEO & ads.
                </p>
                <CTAButtons 
                  primaryText="See Our Work"
                  primaryHref="#portfolio"
                  className="justify-center lg:justify-start"
                />
              </div>
              <div className="relative">
                {/* Creative collage mockups */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    {/* Instagram post mockup */}
                    <div className="bg-white rounded-2xl shadow-lg p-4 transform rotate-3">
                      <div className="h-48 bg-gradient-to-br from-pink-400 to-purple-600 rounded-xl mb-3 flex items-center justify-center text-white font-bold">
                        Instagram Post
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-brand-gradient rounded-full"></div>
                        <div className="text-sm font-medium">College Name</div>
                      </div>
                    </div>
                    {/* Facebook ad mockup */}
                    <div className="bg-white rounded-2xl shadow-lg p-4 transform -rotate-2">
                      <div className="h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl mb-3 flex items-center justify-center text-white font-bold text-sm">
                        Facebook Ad
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4 mt-8">
                    {/* Web design mockup */}
                    <div className="bg-white rounded-2xl shadow-lg p-4 transform -rotate-1">
                      <div className="h-40 bg-gradient-to-br from-green-400 to-teal-600 rounded-xl mb-3 flex items-center justify-center text-white font-bold text-sm">
                        Website Design
                      </div>
                    </div>
                    {/* Creative poster mockup */}
                    <div className="bg-white rounded-2xl shadow-lg p-4 transform rotate-2">
                      <div className="h-36 bg-gradient-to-br from-orange-400 to-red-600 rounded-xl mb-3 flex items-center justify-center text-white font-bold text-sm">
                        Event Poster
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <StatRow />

      {/* Services Preview */}
      <section id="services" className="py-16 bg-gray-50 scroll-margin-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">
                Our Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive digital marketing solutions designed specifically for educational institutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard
                title="Social Media Management"
                description="End-to-end social media for Instagram, Facebook, Threads, Pinterest — content, engagement, reporting."
                icon={
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                }
                link="/services/social-media-management"
                gradient="from-pink-500 to-purple-600"
              />
              
              <ServiceCard
                title="Creative Design"
                description="Admissions campaigns, event posters, reels, and carousels that your students actually share."
                icon={
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                }
                link="/services/creative-design"
                gradient="from-orange-500 to-red-600"
              />
              
              <ServiceCard
                title="SEO for Colleges"
                description="Rank for program keywords and admissions queries with technical, on-page, and local SEO."
                icon={
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                  </svg>
                }
                link="/services/seo-for-colleges"
                gradient="from-green-500 to-teal-600"
              />
              
              <ServiceCard
                title="Performance Marketing"
                description="Smart targeting, landing pages, conversion tracking — ROI-focused paid campaigns."
                icon={
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                  </svg>
                }
                link="/services/performance-marketing"
                gradient="from-blue-500 to-indigo-600"
              />
              
              <ServiceCard
                title="Branding Strategy"
                description="Build consistent brand voice, color systems, hashtags, and content pillars for your college."
                icon={
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                  </svg>
                }
                link="/services/branding-strategy"
                gradient="from-purple-500 to-pink-600"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why TREND MAKERS 360 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">
                Why TREND MAKERS 360?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're not just another digital agency. We're education marketing specialists.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                {[
                  {
                    title: "Education Marketing Expertise",
                    description: "Deep understanding of admissions cycles, student demographics, and what drives enrollment decisions.",
                    icon: "⭐"
                  },
                  {
                    title: "Multi-State Experience", 
                    description: "Successfully serving colleges across Tamil Nadu, Kerala, and Andhra Pradesh with local market insights.",
                    icon: "📍"
                  },
                  {
                    title: "Creative That Converts",
                    description: "Designs that don't just look good — they drive applications, inquiries, and actual enrollments.",
                    icon: "🎨"
                  },
                  {
                    title: "Fast Turnarounds",
                    description: "Quick execution during crucial admissions periods when timing makes all the difference.",
                    icon: "⚡"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-brand-gradient rounded-xl flex items-center justify-center text-white flex-shrink-0 text-xl">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-brand-text mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 h-96 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-brand-gradient rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold">
                      📈
                    </div>
                    <p className="text-brand-text font-semibold text-lg">Growth-Focused Strategies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-600">
                Success stories from colleges across South India
              </p>
            </div>
            
            <TestimonialSlider />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />

      {/* Final CTA Section */}
      <section className="py-16 bg-brand-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Trending starts here — let's make your college go viral.
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Ready to transform your college's digital presence? Let's discuss your goals and create a strategy that drives real results.
            </p>
            <CTAButtons 
              primaryText="Book Strategy Call"
              secondaryText="WhatsApp Us"
              className="justify-center"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
