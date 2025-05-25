import Head from 'next/head'
import { useRouter } from 'next/router'

interface SEOProps {
  title: string
  description: string
  image?: string
  noindex?: boolean
}

export default function SEO({ title, description, image = '/images/og-default.jpg', noindex = false }: SEOProps) {
  const router = useRouter()
  const canonicalUrl = `https://kickoutcancer.org${router.asPath}`
  const siteName = 'Kick Out Cancer'

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`https://kickoutcancer.org${image}`} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`https://kickoutcancer.org${image}`} />

      {/* Robots */}
      <meta name="robots" content={noindex ? 'noindex,nofollow' : 'index,follow'} />

      {/* Additional Meta Tags */}
      <meta name="author" content={siteName} />
      <meta name="language" content="fr" />
      <meta name="revisit-after" content="7 days" />
      <meta name="generator" content="Next.js" />
    </Head>
  )
} 