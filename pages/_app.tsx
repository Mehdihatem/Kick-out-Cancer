import type { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'
import Navbar from '../components/Navbar'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.svg" />
        
        {/* Schema.org Event */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Event',
              name: 'Tournoi de Gala Kick Out Cancer 2025',
              startDate: '2025-09-13T09:00:00+02:00',
              endDate: '2025-09-13T18:00:00+02:00',
              location: {
                '@type': 'Place',
                name: 'Stade de CentraleSupélec',
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: '3 rue Joliot Curie',
                  addressLocality: 'Gif-sur-Yvette',
                  postalCode: '91190',
                  addressCountry: 'FR'
                }
              },
              organizer: {
                '@type': 'Organization',
                name: 'Kick Out Cancer',
                url: 'https://kickoutcancer.org'
              },
              description: 'Tournoi de football caritatif pour soutenir la recherche contre le cancer à l&#39;IHU PRISM.',
              image: 'https://kickoutcancer.org/images/save-the-date-affiche.jpg'
            })
          }}
        />
      </Head>

      {/* Google Analytics */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
        `}
      </Script>

      <Navbar />
      <Component {...pageProps} />
    </>
  )
} 