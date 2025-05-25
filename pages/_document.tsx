import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https:; frame-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'self'; upgrade-insecure-requests;" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <noscript>
          <div style={{
            padding: '2rem',
            textAlign: 'center',
            backgroundColor: '#f3f4f6',
            color: '#1f2937',
            fontFamily: 'system-ui, -apple-system, sans-serif'
          }}>
            <h1 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
              Kick Out Cancer
            </h1>
            <p>
              Veuillez activer JavaScript pour afficher le site complet.
            </p>
          </div>
        </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
} 