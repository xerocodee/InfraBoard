// generate-robots.js
const fs = require('fs')

const robotsContent = `User-agent: *
Disallow:

Sitemap: https://www.infraboard.xerocodee.com/sitemap.xml
`

fs.writeFileSync('public/robots.txt', robotsContent)
console.log('robots.txt generated!')
