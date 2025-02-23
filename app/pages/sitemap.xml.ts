import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.setHeader("Content-Type", "application/xml");
    res.write(createSitemap());
    res.end();
}

const SITE_URL = "https://madhavjangid.vercel.app";

const pages = [
    { loc: `${SITE_URL}/`, changefreq: "daily", priority: 1.0 },
    { loc: `${SITE_URL}/about`, changefreq: "monthly", priority: 0.8 },
    { loc: `${SITE_URL}/services`, changefreq: "weekly", priority: 0.9 },
    { loc: `${SITE_URL}/projects`, changefreq: "weekly", priority: 0.9 },
    { loc: `${SITE_URL}/contact`, changefreq: "monthly", priority: 0.7 },
];

function createSitemap() {
    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
            .map(
                (page) => `
  <url>
    <loc>${page.loc}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
            )
            .join("")}
</urlset>`;
}
