import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      text: "TREND MAKERS 360 transformed our Instagram presence completely. Our engagement went from barely 100 likes to consistently hitting 1000+ likes and meaningful comments from prospective students.",
      author: "Dr. Arjun Chakraborty",
      title: "Dean of Admissions, Anna College",
      initials: "AC",
      rating: 5
    },
    {
      text: "Their SEO work helped us rank #1 for 'Engineering College in Kochi' within just 4 months. Our organic inquiries increased by 300% during the admission season.",
      author: "Priya Menon",
      title: "Marketing Head, Cochin Tech Institute",
      initials: "PM",
      rating: 5
    },
    {
      text: "The creative campaigns they designed for our annual fest went viral across college WhatsApp groups. We had record participation and social media buzz this year.",
      author: "Rajesh Kumar",
      title: "Director, Hyderabad Business School",
      initials: "RK",
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="relative bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <span key={i} className="text-2xl">★</span>
              ))}
            </div>
          </div>
          <p className="text-gray-600 mb-6 italic text-lg">
            "{testimonials[currentIndex].text}"
          </p>
          <div className="flex items-center">
            <div className="w-12 h-12 bg-brand-gradient rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
              {testimonials[currentIndex].initials}
            </div>
            <div>
              <div className="font-semibold text-brand-text">
                {testimonials[currentIndex].author}
              </div>
              <div className="text-sm text-gray-500">
                {testimonials[currentIndex].title}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-brand-blue' : 'bg-gray-300'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
