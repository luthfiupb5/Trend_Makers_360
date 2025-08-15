import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { breadcrumbSchema } from '../lib/jsonld';

const Blog = () => {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' }
  ];

  const jsonLd = breadcrumbSchema(breadcrumbItems);

  const blogPosts = [
    {
      id: 1,
      title: 'How Colleges in Tamil Nadu Can Boost Admissions with Digital Marketing',
      excerpt: 'Local SEO checklist, social calendar tips, and an ad funnel starter for colleges looking to improve their digital presence.',
      author: 'TREND MAKERS 360 Team',
      date: '2024-01-12',
      readTime: '8 min read',
      category: 'Digital Strategy',
      image: 'from-blue-500 to-purple-600',
      link: '/blog/how-colleges-in-tamil-nadu-can-boost-admissions-with-digital-marketing'
    },
    {
      id: 2,
      title: '5 Social Media Mistakes Colleges Make (And How to Fix Them)',
      excerpt: 'Common pitfalls in college social media marketing and practical solutions that drive real engagement.',
      author: 'Creative Team',
      date: '2024-01-08',
      readTime: '6 min read',
      category: 'Social Media',
      image: 'from-pink-500 to-red-600',
      link: '#'
    },
    {
      id: 3,
      title: 'The Complete Guide to College SEO in 2024',
      excerpt: 'Everything you need to know about optimizing your college website for search engines and local visibility.',
      author: 'SEO Team',
      date: '2024-01-05',
      readTime: '12 min read',
      category: 'SEO',
      image: 'from-green-500 to-teal-600',
      link: '#'
    },
    {
      id: 4,
      title: 'Creating Viral College Content: A Step-by-Step Guide',
      excerpt: 'Learn the secrets behind content that gets shared, saves, and drives real interest in your programs.',
      author: 'Content Team',
      date: '2024-01-02',
      readTime: '10 min read',
      category: 'Content Marketing',
      image: 'from-orange-500 to-yellow-500',
      link: '#'
    },
    {
      id: 5,
      title: 'ROI-Focused Facebook Ads for Educational Institutions',
      excerpt: 'How to create Facebook and Instagram ad campaigns that deliver quality leads at the lowest cost.',
      author: 'Ads Team',
      date: '2023-12-28',
      readTime: '9 min read',
      category: 'Paid Advertising',
      image: 'from-purple-500 to-indigo-600',
      link: '#'
    },
    {
      id: 6,
      title: 'Building a Strong College Brand Identity in the Digital Age',
      excerpt: 'Why brand consistency matters more than ever and how to develop a memorable college brand.',
      author: 'Branding Team',
      date: '2023-12-25',
      readTime: '7 min read',
      category: 'Branding',
      image: 'from-indigo-500 to-purple-600',
      link: '#'
    }
  ];

  const categories = ['All', 'Digital Strategy', 'Social Media', 'SEO', 'Content Marketing', 'Paid Advertising', 'Branding'];

  return (
    <>
      <SEO
        title="Insights | Digital Marketing for Colleges"
        description="Guides on admissions marketing, SEO, and social content that actually works."
        path="/blog"
        jsonLd={jsonLd}
      />

      <Breadcrumbs items={breadcrumbItems} />

      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-brand-text mb-6">
                Marketing <span className="gradient-text">Insights</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Guides on admissions marketing, SEO, and social content that actually works for educational institutions.
              </p>
            </div>

            {/* Featured Article */}
            <div className="mb-16">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className={`bg-gradient-to-br ${blogPosts[0].image} p-8 flex items-center justify-center text-white`}>
                    <div className="text-center">
                      <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                        </svg>
                      </div>
                      <span className="text-lg font-semibold">Featured Article</span>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      <span className="px-3 py-1 bg-brand-gradient text-white text-sm rounded-full">
                        {blogPosts[0].category}
                      </span>
                      <span className="ml-3 text-gray-500 text-sm">{blogPosts[0].readTime}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-brand-text mb-4">
                      {blogPosts[0].title}
                    </h2>
                    <p className="text-gray-600 mb-6">
                      {blogPosts[0].excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-brand-gradient rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                          TM
                        </div>
                        <div>
                          <div className="font-semibold text-brand-text text-sm">{blogPosts[0].author}</div>
                          <div className="text-xs text-gray-500">{blogPosts[0].date}</div>
                        </div>
                      </div>
                      <Link
                        to={blogPosts[0].link}
                        className="px-6 py-2 bg-brand-gradient text-white rounded-xl font-medium hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center mb-12 gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-6 py-3 bg-gray-200 text-gray-700 rounded-xl font-medium hover:bg-gray-300 transition-all duration-300"
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Blog Posts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {blogPosts.slice(1).map((post) => (
                <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className={`h-48 bg-gradient-to-br ${post.image} flex items-center justify-center text-white`}>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                        </svg>
                      </div>
                      <span className="text-sm font-medium">{post.category}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="text-xs text-gray-500">{post.date}</span>
                      <span className="mx-2 text-gray-300">•</span>
                      <span className="text-xs text-gray-500">{post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-brand-text mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-brand-gradient rounded-full flex items-center justify-center text-white font-bold text-xs mr-2">
                          TM
                        </div>
                        <span className="text-xs text-gray-600">{post.author}</span>
                      </div>
                      {post.link !== '#' ? (
                        <Link
                          to={post.link}
                          className="text-brand-blue hover:text-brand-cyan transition-colors text-sm font-medium"
                        >
                          Read More →
                        </Link>
                      ) : (
                        <span className="text-gray-400 text-sm">Coming Soon</span>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="bg-brand-gradient rounded-2xl p-8 md:p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">
                Stay Updated with Marketing Insights
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Get the latest college marketing strategies, case studies, and tips delivered to your inbox monthly.
              </p>
              <form className="max-w-md mx-auto flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-xl border-0 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-white text-brand-blue rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>

            {/* Topics We Cover */}
            <div className="mt-16">
              <h2 className="text-3xl font-bold text-brand-text mb-8 text-center">
                Topics We Cover
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: 'Admission Marketing',
                    description: 'Strategies to drive quality applications and improve enrollment rates',
                    icon: '🎓'
                  },
                  {
                    title: 'Social Media Growth',
                    description: 'Building engaged communities and driving brand awareness on social platforms',
                    icon: '📱'
                  },
                  {
                    title: 'SEO & Content',
                    description: 'Ranking higher in search results and creating content that converts',
                    icon: '🔍'
                  },
                  {
                    title: 'Paid Advertising',
                    description: 'ROI-focused ad campaigns that generate quality leads at scale',
                    icon: '💰'
                  },
                  {
                    title: 'Brand Building',
                    description: 'Creating memorable college brands that stand out in competitive markets',
                    icon: '🎨'
                  },
                  {
                    title: 'Analytics & Data',
                    description: 'Measuring what matters and using data to improve marketing performance',
                    icon: '📊'
                  }
                ].map((topic, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-center">
                    <div className="text-4xl mb-4">{topic.icon}</div>
                    <h3 className="text-lg font-bold text-brand-text mb-3">{topic.title}</h3>
                    <p className="text-gray-600 text-sm">{topic.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
