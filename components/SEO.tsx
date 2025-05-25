import Head from 'next/head'
import { useRouter } from 'next/router'

interface SEOProps {
  title: string
  description: string
  image?: string
  noindex?: boolean
  ogType?: string
  twitterCard?: string
  keywords?: string[]
}

export default function SEO({ 
  title, 
  description, 
  image = '/images/og-default.jpg', 
  noindex = false,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  keywords = ['cancer', 'sport', 'solidarité', 'événement', 'santé']
}: SEOProps) {
  const router = useRouter()
  const canonicalUrl = `https://kickoutcancer.org${router.asPath}`
  const siteName = 'Kick Out Cancer'

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`https://kickoutcancer.org${image}`} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="fr_FR" />

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`https://kickoutcancer.org${image}`} />
      <meta name="twitter:site" content="@kickoutcancer" />

      {/* Robots */}
      <meta name="robots" content={noindex ? 'noindex,nofollow' : 'index,follow'} />

      {/* Additional Meta Tags */}
      <meta name="author" content={siteName} />
      <meta name="language" content="fr" />
      <meta name="revisit-after" content="7 days" />
      <meta name="generator" content="Next.js" />
      
      {/* Security Headers */}
      <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      
      {/* Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
    </Head>
  )
} 