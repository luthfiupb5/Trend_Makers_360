export const orgSchema = () => ({
  "@context": "https://schema.org",
  "@type": "AdvertisingAgency",
  "name": "TREND MAKERS 360",
  "url": "https://www.trendmakers360.in",
  "logo": "https://www.trendmakers360.in/assets/img/logo.svg",
  "description": "Digital marketing agency specializing in college marketing across Tamil Nadu, Kerala, and Andhra Pradesh",
  "foundingDate": "2022",
  "areaServed": ["Tamil Nadu", "Kerala", "Andhra Pradesh"],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-XXXXXXXXXX",
    "contactType": "customer service",
    "email": "hello@trendmakers360.in"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Chennai",
    "addressRegion": "Tamil Nadu",
    "addressCountry": "IN"
  },
  "sameAs": [
    "https://www.instagram.com/trendmakers360",
    "https://www.linkedin.com/company/trendmakers360",
    "https://www.facebook.com/trendmakers360"
  ]
});

export const breadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": `https://www.trendmakers360.in${item.url}`
  }))
});

export const serviceSchema = ({ name, description, url, areaServed }) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": name,
  "description": description,
  "url": `https://www.trendmakers360.in${url}`,
  "provider": {
    "@type": "Organization",
    "name": "TREND MAKERS 360",
    "url": "https://www.trendmakers360.in"
  },
  "areaServed": areaServed || ["Tamil Nadu", "Kerala", "Andhra Pradesh"],
  "serviceType": "Digital Marketing"
});

export const faqSchema = (qaArray) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": qaArray.map(qa => ({
    "@type": "Question",
    "name": qa.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": qa.answer
    }
  }))
});

export const articleSchema = ({ headline, description, image, datePublished, author, url }) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": headline,
  "description": description,
  "image": image || "https://www.trendmakers360.in/og/og-default.jpg",
  "datePublished": datePublished,
  "author": {
    "@type": "Organization",
    "name": author || "TREND MAKERS 360"
  },
  "publisher": {
    "@type": "Organization",
    "name": "TREND MAKERS 360",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.trendmakers360.in/assets/img/logo.svg"
    }
  },
  "url": `https://www.trendmakers360.in${url}`
});
