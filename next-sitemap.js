/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://www.serverhostingreviews.com',
    generateRobotsTxt: true, // (optional)
    outDir: "./out",
    exclude: ['/login','/create','/logout'],
    robotsTxtOptions: {
        policies: [
            {
                userAgent: "*",
                disallow: ["/login","/create","/logout"],
            },
            { 
                userAgent: "*", allow: "/"
            },
        ],
        additionalSitemaps: [
            `https://www.serverhostingreviews.com/sitemap.xml`,
            `https://www.serverhostingreviews.com/server-sitemap.xml`,
        ],
    },
    // ...other options
}