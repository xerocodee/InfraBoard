const fs = require('fs')

const pages = [{ path: '/', priority: 1.0 }]

const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(
      (page) => `
    <url>
      <loc>https://www.infraboard.xerocodee.com${page.path}</loc>
      <priority>${page.priority}</priority>
    </url>
  `,
    )
    .join('')}
</urlset>
`

fs.writeFileSync('public/sitemap.xml', sitemapContent)
console.log('sitemap.xml generated!')
