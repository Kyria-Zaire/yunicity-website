import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "YUNICITY - La Super-App qui Reconnecte votre Ville | Lancement Mars 2026",
    template: "%s | YUNICITY"
  },
  description: "Découvrez YUNICITY, la première super-app locale qui reconnecte les habitants à leur territoire. Événements, commerces, communauté : tout dans votre poche. Lancement MVP à Reims en Mars 2026.",
  keywords: [
    "yunicity", 
    "application locale", 
    "communauté locale", 
    "ville connectée", 
    "événements locaux", 
    "commerces locaux", 
    "Reims", 
    "super-app", 
    "réseau social local",
    "application mobile locale",
    "communauté de quartier",
    "vie locale",
    "événements de quartier",
    "commerces de proximité",
    "application française",
    "startup française",
    "tech for good"
  ],
  authors: [{ name: "YUNICITY Team", url: "https://yunicity-website.vercel.app" }],
  creator: "YUNICITY",
  publisher: "YUNICITY",
  metadataBase: new URL('https://yunicity-website.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "YUNICITY - Faire battre le cœur de la ville",
    description: "La première super-app qui reconnecte les habitants à leur territoire. Découvrez, partagez et vivez votre ville autrement.",
    url: 'https://yunicity-website.vercel.app',
    siteName: 'YUNICITY',
    images: [
      {
        url: 'https://yunicity-website.vercel.app/yunicity-logo.png',
        width: 1200,
        height: 1200,
        alt: 'YUNICITY - Super-app locale',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "YUNICITY - La Super-App Locale",
    description: "Reconnectez-vous à votre territoire. Lancement Mars 2026.",
    images: ['https://yunicity-website.vercel.app/yunicity-logo.png'],
    creator: '@yunicity',
    site: '@yunicity',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // google: 'votre-code-google-search-console',
    // yandex: 'votre-code-yandex',
  },
  category: 'technology',
  classification: 'Application mobile, Réseau social local',
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'format-detection': 'telephone=no',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/yunicity-logo.png" />
        <link rel="apple-touch-icon" href="/yunicity-logo.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#8B5CF6" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="geo.region" content="FR-44" />
        <meta name="geo.placename" content="Reims" />
        <meta name="geo.position" content="49.2583;4.0317" />
        <meta name="ICBM" content="49.2583, 4.0317" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
