import Head from 'next/head'

interface SEOProps {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: string
}

export default function SEO({
  title = 'Kick Out Cancer - Ensemble, nous pouvons faire la différence',
  description = 'Kick Out Cancer est le premier tournoi de sports de combat mixant professionnels de la santé, sportifs et grand public autour d\'une même ambition : mettre KO le cancer par le mouvement, l\'innovation et la solidarité.',
  image = 'https://kickoutcancer.org/images/save-the-date.jpg',
  url = 'https://kickoutcancer.org',
  type = 'website'
}: SEOProps) {
  const siteTitle = title.includes('Kick Out Cancer') ? title : `${title} | Kick Out Cancer`

  return (
    <Head>
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/images/favicon.svg" />

      {/* Open Graph */}
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional SEO tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="French" />
      <meta name="author" content="Kick Out Cancer" />
      <link rel="canonical" href={url} />
    </Head>
  )
} 