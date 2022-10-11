/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://www.serverhostingreviews.com',
    generateRobotsTxt: true, // (optional)
    exclude: ['/login','/create','/logout','/server-sitemap.xml',"/csgo","/rust","/garrys-mod","/minecraft","/ark","/terraria"],
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
            'https://www.serverhostingreviews.com/server-sitemap.xml'
        ],
    },
    // ...other options
}