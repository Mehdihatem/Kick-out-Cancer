import { GetStaticProps } from 'next'

function generateRobotsTxt() {
  return `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /

# Sitemaps
Sitemap: https://kickoutcancer.org/sitemap.xml`
}

function RobotsTxt() {
  return null
}

export const getStaticProps: GetStaticProps = async () => {
  const robotsTxt = generateRobotsTxt()

  return {
    props: {
      robotsTxt,
    },
  }
}

export default RobotsTxt 