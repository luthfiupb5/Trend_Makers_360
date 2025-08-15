import React from 'react';
import { Helmet } from 'react-helmet-async';
import { seoConfig } from '../lib/seoConfig';

const SEO = ({ 
  title, 
  description, 
  path, 
  ogImage, 
  jsonLd,
  article = false 
}) => {
  const url = seoConfig.siteUrl + path;
  const finalTitle = title || seoConfig.defaultTitle;
  const finalDescription = description || seoConfig.defaultDescription;
  const finalImage = ogImage || seoConfig.defaultImage;
  const fullImageUrl = finalImage.startsWith('http') ? finalImage : seoConfig.siteUrl + finalImage;

  return (
    <Helmet>
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <link rel="canonical" href={url} />
      
      {/* Open Graph */}
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={article ? "article" : "website"} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:site_name" content="TREND MAKERS 360" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:site" content={seoConfig.twitterHandle} />
      
      {/* Hreflang */}
      <link rel="alternate" hrefLang="en-IN" href={url} />
      
      {/* JSON-LD */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
