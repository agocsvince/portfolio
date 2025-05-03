/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://agocsvince.com',
  generateRobotsTxt: true, // robots.txt is generated automatikusan
  sitemapSize: 1,
  changefreq: 'monthly',
  priority: 1.0,
  exclude: [], // ha vannak kizárt útvonalak
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};
