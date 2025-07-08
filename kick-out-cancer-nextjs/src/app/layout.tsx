import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

const bebasNeue = Bebas_Neue({ 
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Kick Out Cancer - Ensemble contre le cancer | Tournoi caritatif 2025",
  description: "Rejoignez Kick Out Cancer, le tournoi caritatif qui unit la communauté pour lutter contre le cancer. Inscrivez votre équipe et soutenez la recherche.",
  keywords: "cancer, tournoi caritatif, football, recherche, IHU PRISM, solidarité, don, équipe",
  authors: [{ name: "Kick Out Cancer" }],
  robots: "index, follow",
  
  // Open Graph
  openGraph: {
    type: "website",
    url: "https://kickoutcancer.fr/",
    title: "Kick Out Cancer - Ensemble contre le cancer",
    description: "Rejoignez notre tournoi caritatif pour soutenir la recherche contre le cancer. Inscrivez votre équipe !",
    images: [
      {
        url: "https://kickoutcancer.fr/assets/hero-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kick Out Cancer - Tournoi caritatif",
      },
    ],
  },
  
  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "Kick Out Cancer - Ensemble contre le cancer",
    description: "Rejoignez notre tournoi caritatif pour soutenir la recherche contre le cancer.",
    images: ["https://kickoutcancer.fr/assets/hero-image.jpg"],
  },
  
  // JSON-LD pour l'événement et l'organisation
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Event",
      "name": "Kick Out Cancer - Tournoi caritatif 2025",
      "description": "Tournoi de football caritatif pour soutenir la recherche contre le cancer",
      "startDate": "2025-06-15T09:00:00+02:00",
      "endDate": "2025-06-15T18:00:00+02:00",
      "location": {
        "@type": "Place",
        "name": "Stade Municipal",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Paris",
          "addressCountry": "FR"
        }
      },
      "organizer": {
        "@type": "Organization",
        "name": "Kick Out Cancer",
        "url": "https://kickoutcancer.fr"
      },
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock"
      }
    }),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
      </head>
      <body className={`${inter.variable} ${bebasNeue.variable} font-inter bg-midnight text-text-light antialiased`}>
        {children}
      </body>
    </html>
  );
}
