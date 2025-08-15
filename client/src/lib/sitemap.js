import fs from 'fs';
import path from 'path';

const routes = [
  { path: '/', lastmod: '2024-01-15', priority: '1.0' },
  { path: '/services', lastmod: '2024-01-15', priority: '0.9' },
  { path: '/services/social-media-management', lastmod: '2024-01-15', priority: '0.8' },
  { path: '/services/creative-design', lastmod: '2024-01-15', priority: '0.8' },
  { path: '/services/seo-for-colleges', lastmod: '2024-01-15', priority: '0.8' },
  { path: '/services/performance-marketing', lastmod: '2024-01-15', priority: '0.8' },
  { path: '/services/branding-strategy', lastmod: '2024-01-15', priority: '0.8' },
  { path: '/portfolio', lastmod: '2024-01-15', priority: '0.9' },
  { path: '/case-studies', lastmod: '2024-01-15', priority: '0.9' },
  { path: '/case-studies/xyz-college-kerala', lastmod: '2024-01-10', priority: '0.7' },
  { path: '/about', lastmod: '2024-01-15', priority: '0.8' },
  { path: '/blog', lastmod: '2024-01-15', priority: '0.8' },
  { path: '/blog/how-colleges-in-tamil-nadu-can-boost-admissions-with-digital-marketing', lastmod: '2024-01-12', priority: '0.7' },
  { path: '/contact', lastmod: '2024-01-15', priority: '0.9' },
  { path: '/privacy', lastmod: '2024-01-15', priority: '0.5' },
  { path: '/terms', lastmod: '2024-01-15', priority: '0.5' }
];

const generateSitemap = () => {
  const baseUrl = 'https://www.trendmakers360.in';
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  const publicDir = path.resolve(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
  console.log('Sitemap generated successfully!');
};

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  generateSitemap();
}

export default generateSitemap;
