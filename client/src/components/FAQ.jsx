import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqSchema } from '../lib/jsonld';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What makes TREND MAKERS 360 different from other digital marketing agencies?",
      answer: "We specialize exclusively in college marketing across South India, understanding the unique admissions cycles, student demographics, and regional preferences that drive enrollment success. Our team has deep experience in education marketing, not just general digital marketing."
    },
    {
      question: "Which states do you serve?",
      answer: "We primarily serve colleges in Tamil Nadu, Kerala, and Andhra Pradesh, with deep local market knowledge and language capabilities. Our team understands regional cultural nuances and can create content that resonates with local audiences."
    },
    {
      question: "What services do you offer for colleges?",
      answer: "Our services include social media management, creative design, SEO optimization, performance marketing (Meta & Google Ads), and comprehensive branding strategy. We also provide website development, content marketing, and reputation management services."
    },
    {
      question: "How quickly can you start working on our college's marketing?",
      answer: "We can begin with a strategy session within 48 hours and start executing campaigns within one week of project initiation. We understand that admissions marketing often requires quick turnarounds, especially during peak seasons."
    },
    {
      question: "Do you provide reporting and analytics?",
      answer: "Yes, we provide detailed monthly reports covering engagement metrics, lead generation, website traffic, and ROI analysis for all campaigns. We also offer real-time dashboards for key stakeholders to track performance."
    },
    {
      question: "What are your pricing models?",
      answer: "We offer flexible pricing models including monthly retainers, project-based pricing, and performance-based packages. Our pricing depends on the scope of services, college size, and campaign complexity. Contact us for a customized quote."
    },
    {
      question: "Do you work with small colleges or only large institutions?",
      answer: "We work with colleges of all sizes, from small specialized institutions to large universities. Our strategies are scalable and can be customized based on budget, goals, and institutional size. Every college deserves effective digital marketing."
    }
  ];

  const jsonLd = faqSchema(faqs.map(faq => ({ 
    question: faq.question, 
    answer: faq.answer 
  })));

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about working with us
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2"
                  aria-expanded={openIndex === index}
                >
                  <span className="text-lg font-semibold text-brand-text">{faq.question}</span>
                  <motion.svg
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-6 h-6 text-brand-blue"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6">
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
