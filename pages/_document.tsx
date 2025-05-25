import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        <link
          rel="preload"
          href="/fonts/inter-var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
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