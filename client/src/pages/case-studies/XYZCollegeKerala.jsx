import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';
import CTAButtons from '../../components/CTAButtons';
import { breadcrumbSchema, articleSchema } from '../../lib/jsonld';

const XYZCollegeKerala = () => {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'XYZ College', url: '/case-studies/xyz-college-kerala' }
  ];

  const jsonLd = [
    breadcrumbSchema(breadcrumbItems),
    articleSchema({
      headline: '5× Instagram Engagement in 60 Days - XYZ College Kerala Case Study',
      description: 'Challenge, strategy, execution, and results of our social growth sprint for XYZ College.',
      image: '/og/og-default.jpg',
      datePublished: '2024-01-10',
      author: 'TREND MAKERS 360',
      url: '/case-studies/xyz-college-kerala'
    })
  ];

  return (
    <>
      <SEO
        title="Case Study: XYZ College (Kerala) — 5× Instagram Engagement in 60 Days"
        description="Challenge, strategy, execution, and results of our social growth sprint for XYZ College."
        path="/case-studies/xyz-college-kerala"
        jsonLd={jsonLd}
        article={true}
      />

      <Breadcrumbs items={breadcrumbItems} />

      <article className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-4">
                <span className="px-4 py-2 bg-brand-gradient text-white text-sm rounded-full">
                  Case Study
                </span>
                <span className="ml-3 text-gray-500 text-sm">60 Days</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-brand-text mb-6">
                XYZ College (Kerala) — <span className="gradient-text">5× Instagram Engagement</span> in 60 Days
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                How we transformed a struggling social media presence into a thriving community that drives real enrollment inquiries.
              </p>
            </div>

            {/* Key Results */}
            <div className="bg-brand-gradient rounded-2xl p-8 text-white mb-16">
              <h2 className="text-2xl font-bold mb-6 text-center">Key Results Achieved</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">500%</div>
                  <div className="text-lg">Engagement Increase</div>
                  <p className="text-sm opacity-80 mt-1">From 2.1% to 12.3%</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">383%</div>
                  <div className="text-lg">Follower Growth</div>
                  <p className="text-sm opacity-80 mt-1">1.2K to 5.8K followers</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">300%</div>
                  <div className="text-lg">Inquiry Increase</div>
                  <p className="text-sm opacity-80 mt-1">45 to 180 monthly inquiries</p>
                </div>
              </div>
            </div>

            {/* Challenge Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-brand-text mb-8">The Challenge</h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-gray-600 mb-4">
                    XYZ College came to us in early 2024 with a struggling social media presence. Despite being a well-established institution in Kerala, their digital footprint was minimal and failing to attract prospective students.
                  </p>
                  <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
                    <h3 className="font-semibold text-red-800 mb-2">Key Problems Identified:</h3>
                    <ul className="space-y-2 text-red-700">
                      <li>• Instagram engagement rate below 2%</li>
                      <li>• Inconsistent posting schedule</li>
                      <li>• Generic content not resonating with students</li>
                      <li>• Low inquiry conversion from social media</li>
                      <li>• Poor brand visibility during admission season</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-gray-100 rounded-2xl p-8 text-center">
                  <h3 className="text-xl font-bold text-brand-text mb-4">Before Our Intervention</h3>
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4">
                      <div className="text-2xl font-bold text-red-500">2.1%</div>
                      <div className="text-sm text-gray-600">Engagement Rate</div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="text-2xl font-bold text-red-500">1.2K</div>
                      <div className="text-sm text-gray-600">Instagram Followers</div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="text-2xl font-bold text-red-500">45</div>
                      <div className="text-sm text-gray-600">Monthly Inquiries</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Strategy Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-brand-text mb-8">Our Strategy</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white mb-4">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-bold text-brand-text mb-3">Content Audit & Planning</h3>
                  <p className="text-gray-600 text-sm">
                    Analyzed existing content, identified gaps, and created a comprehensive content strategy aligned with student interests and admission cycles.
                  </p>
                </div>
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center text-white mb-4">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-bold text-brand-text mb-3">Visual Identity Refresh</h3>
                  <p className="text-gray-600 text-sm">
                    Developed consistent visual branding, color schemes, and design templates that resonated with Gen Z students in Kerala.
                  </p>
                </div>
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center text-white mb-4">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-bold text-brand-text mb-3">Community Engagement</h3>
                  <p className="text-gray-600 text-sm">
                    Implemented proactive engagement strategies, responding to comments, DMs, and creating interactive content.
                  </p>
                </div>
              </div>
            </section>

            {/* Execution Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-brand-text mb-8">Execution Timeline</h2>
              <div className="space-y-8">
                {[
                  {
                    week: 'Week 1-2',
                    title: 'Foundation Setup',
                    activities: [
                      'Completed comprehensive audit of existing social media',
                      'Developed content pillars and posting strategy',
                      'Created visual brand guidelines and templates',
                      'Set up analytics tracking and KPI dashboards'
                    ]
                  },
                  {
                    week: 'Week 3-4',
                    title: 'Content Creation Sprint',
                    activities: [
                      'Produced 60+ pieces of branded content',
                      'Created Instagram story templates',
                      'Developed interactive polls and Q&A formats',
                      'Shot campus photography and video content'
                    ]
                  },
                  {
                    week: 'Week 5-6',
                    title: 'Launch & Optimize',
                    activities: [
                      'Launched new content strategy with consistent posting',
                      'Began active community engagement initiatives',
                      'A/B tested different content formats and timings',
                      'Implemented story highlights and IGTV strategy'
                    ]
                  },
                  {
                    week: 'Week 7-8',
                    title: 'Scale & Refine',
                    activities: [
                      'Scaled successful content formats',
                      'Introduced user-generated content campaigns',
                      'Launched student takeover series',
                      'Optimized posting times based on engagement data'
                    ]
                  }
                ].map((phase, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-24 text-right mr-8">
                      <span className="text-sm font-semibold text-brand-blue">{phase.week}</span>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-lg font-bold text-brand-text mb-2">{phase.title}</h3>
                      <ul className="space-y-1">
                        {phase.activities.map((activity, actIndex) => (
                          <li key={actIndex} className="text-gray-600 text-sm flex items-start">
                            <span className="w-1.5 h-1.5 bg-brand-blue rounded-full mr-3 mt-2 flex-shrink-0"></span>
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Results Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-brand-text mb-8">Detailed Results</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-brand-text mb-6">Social Media Metrics</h3>
                  <div className="space-y-4">
                    {[
                      { metric: 'Instagram Followers', before: '1,200', after: '5,800', change: '+383%' },
                      { metric: 'Engagement Rate', before: '2.1%', after: '12.3%', change: '+486%' },
                      { metric: 'Average Likes per Post', before: '25', after: '180', change: '+620%' },
                      { metric: 'Story Views', before: '300', after: '2,100', change: '+600%' }
                    ].map((result, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="text-gray-600 text-sm">{result.metric}</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-xs text-gray-500">{result.before}</span>
                          <span className="text-xs text-gray-400">→</span>
                          <span className="text-sm font-bold text-brand-text">{result.after}</span>
                          <span className="text-xs font-semibold text-green-600">{result.change}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-brand-text mb-6">Business Impact</h3>
                  <div className="space-y-4">
                    {[
                      { metric: 'Monthly Inquiries', before: '45', after: '180', change: '+300%' },
                      { metric: 'Campus Visit Bookings', before: '12', after: '48', change: '+300%' },
                      { metric: 'Brochure Downloads', before: '30', after: '120', change: '+300%' },
                      { metric: 'Website Traffic from Social', before: '8%', after: '28%', change: '+250%' }
                    ].map((result, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="text-gray-600 text-sm">{result.metric}</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-xs text-gray-500">{result.before}</span>
                          <span className="text-xs text-gray-400">→</span>
                          <span className="text-sm font-bold text-brand-text">{result.after}</span>
                          <span className="text-xs font-semibold text-green-600">{result.change}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Client Testimonial */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-brand-text mb-8">Client Testimonial</h2>
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="flex text-yellow-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-2xl">★</span>
                    ))}
                  </div>
                </div>
                <blockquote className="text-xl text-gray-700 italic mb-6">
                  "The transformation was remarkable. In just two months, our social media went from being a liability to our strongest marketing channel. The team at TREND MAKERS 360 didn't just improve our numbers – they helped us connect with our students in a way we never thought possible. The increase in genuine inquiries has been phenomenal."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-brand-gradient rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    AC
                  </div>
                  <div>
                    <div className="font-semibold text-brand-text text-lg">Dr. Arjun Chakraborty</div>
                    <div className="text-gray-600">Dean of Admissions, XYZ College</div>
                    <div className="text-sm text-gray-500">Kerala, India</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Key Learnings */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-brand-text mb-8">Key Learnings</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-brand-text mb-4">What Worked</h3>
                  <ul className="space-y-3">
                    {[
                      'Student-centric content that showcased real campus life',
                      'Consistent visual branding that stood out in feeds',
                      'Interactive content like polls and Q&As drove engagement',
                      'Behind-the-scenes content humanized the institution',
                      'Strategic posting times based on student activity patterns'
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
                  <h3 className="text-xl font-bold text-brand-text mb-4">Challenges Overcome</h3>
                  <ul className="space-y-3">
                    {[
                      'Initial resistance to showing "imperfect" campus moments',
                      'Balancing professional image with approachable content',
                      'Getting faculty and students comfortable on camera',
                      'Managing increased inquiry volume with existing staff',
                      'Maintaining consistency during exam periods'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="text-center">
              <h2 className="text-3xl font-bold text-brand-text mb-6">
                Ready for Similar Results?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Let's discuss how we can transform your college's social media presence and drive real enrollment results.
              </p>
              <CTAButtons className="justify-center" />
              
              <div className="mt-8 text-center">
                <Link
                  to="/case-studies"
                  className="text-brand-blue hover:text-brand-cyan transition-colors"
                >
                  ← Back to All Case Studies
                </Link>
              </div>
            </section>
          </div>
        </div>
      </article>
    </>
  );
};

export default XYZCollegeKerala;
