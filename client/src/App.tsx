import React, { Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Lazy load pages
const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const Services = React.lazy(() => import("./pages/Services"));
const SocialMediaManagement = React.lazy(() => import("./pages/services/SocialMediaManagement"));
const CreativeDesign = React.lazy(() => import("./pages/services/CreativeDesign"));
const SEOForColleges = React.lazy(() => import("./pages/services/SEOForColleges"));
const PerformanceMarketing = React.lazy(() => import("./pages/services/PerformanceMarketing"));
const BrandingStrategy = React.lazy(() => import("./pages/services/BrandingStrategy"));
const Portfolio = React.lazy(() => import("./pages/Portfolio"));
const CaseStudies = React.lazy(() => import("./pages/CaseStudies"));
const XYZCollegeKerala = React.lazy(() => import("./pages/case-studies/XYZCollegeKerala"));
const Blog = React.lazy(() => import("./pages/Blog"));
const AdmissionsDigitalMarketingTN = React.lazy(() => import("./pages/blog/AdmissionsDigitalMarketingTN"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Privacy = React.lazy(() => import("./pages/Privacy"));
const Terms = React.lazy(() => import("./pages/Terms"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-brand-blue"></div>
  </div>
);

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-50">
      <ScrollToTop />
      <Header />
      <main className="pt-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/social-media-management" element={<SocialMediaManagement />} />
                <Route path="/services/creative-design" element={<CreativeDesign />} />
                <Route path="/services/seo-for-colleges" element={<SEOForColleges />} />
                <Route path="/services/performance-marketing" element={<PerformanceMarketing />} />
                <Route path="/services/branding-strategy" element={<BrandingStrategy />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/case-studies" element={<CaseStudies />} />
                <Route path="/case-studies/xyz-college-kerala" element={<XYZCollegeKerala />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/how-colleges-in-tamil-nadu-can-boost-admissions-with-digital-marketing" element={<AdmissionsDigitalMarketingTN />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App;
