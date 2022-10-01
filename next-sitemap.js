/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://www.serverhostingreviews.com',
    generateRobotsTxt: true, // (optional)
    outDir: "./out"
    // ...other options
}