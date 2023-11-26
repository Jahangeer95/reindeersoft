function generateSitemap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

<url>
  <loc>https://reindeersoft.com/</loc>
  <lastmod>2023-11-26T06:39:07+00:00</lastmod>
  <priority>1.00</priority>
</url>
<url>
  <loc>https://reindeersoft.com/about-us</loc>
  <lastmod>2023-11-26T06:39:07+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://reindeersoft.com/contact-us</loc>
  <lastmod>2023-11-26T06:39:07+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://reindeersoft.com/web-and-mobile-applications</loc>
  <lastmod>2023-11-26T06:39:07+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://reindeersoft.com/dedicated-development-team</loc>
  <lastmod>2023-11-26T06:39:07+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://reindeersoft.com/robotics-and-autonomy</loc>
  <lastmod>2023-11-26T06:39:07+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://reindeersoft.com/qa-and-test-automation</loc>
  <lastmod>2023-11-26T06:39:07+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://reindeersoft.com/cloud-application-development</loc>
  <lastmod>2023-11-26T06:39:07+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://reindeersoft.com/internet-of-things</loc>
  <lastmod>2023-11-26T06:39:07+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://reindeersoft.com/large-language-model</loc>
  <lastmod>2023-11-26T06:39:07+00:00</lastmod>
  <priority>0.80</priority>
</url>
</urlset>`;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }: any) {
  // We make an API call to gather the URLs for our site
  // const request = await fetch(EXTERNAL_DATA_URL);
  // const posts = await request.json();

  // We generate the XML sitemap with the posts data
  const sitemap = generateSitemap();

  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
