import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const robotTxt = `user agent: *
allow: /https://reindeersoft.com
allow: /https://reindeersoft.com/#engagement-modal
allow: /https://reindeersoft.com/about-us
allow: /https://reindeersoft.com/contact-us
allow: /https://reindeersoft.com/web-and-mobile-applications
allow: /https://reindeersoft.com/robotics-and-autonomy
allow: /https://reindeersoft.com/cloud-application-development
allow: /https://reindeersoft.com/large-language-model
allow: /https://reindeersoft.com/dedicated-development-team
allow: /https://reindeersoft.com/qa-and-test-automation
allow: /https://reindeersoft.com/internet-of-things
allow: /https://reindeersoft.com/sitemap.xml`;
  res.send(robotTxt); // Send your `robots.txt content here
}
