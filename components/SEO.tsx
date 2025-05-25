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
  article?: {
    publishedTime?: string
    modifiedTime?: string
    authors?: string[]
    tags?: string[]
  }
}

export default function SEO({ 
  title, 
  description, 
  image = '/images/og-default.jpg', 
  noindex = false,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  keywords = ['cancer', 'sport', 'solidarité', 'événement', 'santé'],
  article
}: SEOProps) {
  const router = useRouter()
  const canonicalUrl = `https://kickoutcancer.org${router.asPath}`
  const siteName = 'Kick Out Cancer'

  const jsonLd = article ? {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    image: `https://kickoutcancer.org${image}`,
    datePublished: article.publishedTime,
    dateModified: article.modifiedTime,
    author: article.authors?.map(author => ({
      '@type': 'Person',
      name: author
    })),
    publisher: {
      '@type': 'Organization',
      name: siteName,
      logo: {
        '@type': 'ImageObject',
        url: 'https://kickoutcancer.org/logo.png'
      }
    },
    keywords: keywords.join(', '),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl
    }
  } : {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteName,
    url: 'https://kickoutcancer.org',
    description: description,
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://kickoutcancer.org/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  }

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
      {article && (
        <>
          {article.publishedTime && (
            <meta property="article:published_time" content={article.publishedTime} />
          )}
          {article.modifiedTime && (
            <meta property="article:modified_time" content={article.modifiedTime} />
          )}
          {article.authors?.map((author, index) => (
            <meta key={index} property="article:author" content={author} />
          ))}
          {article.tags?.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`https://kickoutcancer.org${image}`} />
      <meta name="twitter:site" content="@kickoutcancer" />
      <meta name="twitter:creator" content="@kickoutcancer" />

      {/* Robots */}
      <meta name="robots" content={noindex ? 'noindex,nofollow' : 'index,follow'} />

      {/* Additional Meta Tags */}
      <meta name="author" content={siteName} />
      <meta name="language" content="fr" />
      <meta name="revisit-after" content="7 days" />
      <meta name="generator" content="Next.js" />
      
      {/* Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={siteName} />
      
      {/* Favicon */}
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
      <meta name="msapplication-TileColor" content="#000000" />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </Head>
  )
} 