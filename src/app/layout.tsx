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
  title: "YUNICITY - La Super-App qui Reconnecte votre Ville | Lancement Mars 2026",
  description: "Découvrez YUNICITY, la première super-app locale qui reconnecte les habitants à leur territoire. Événements, commerces, communauté : tout dans votre poche. Lancement MVP à Reims en Mars 2026.",
  keywords: ["yunicity", "application locale", "communauté locale", "ville connectée", "événements locaux", "commerces locaux", "Reims", "super-app", "réseau social local"],
  authors: [{ name: "YUNICITY Team" }],
  creator: "YUNICITY",
  publisher: "YUNICITY",
  metadataBase: new URL('https://yunicity.fr'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "YUNICITY - Faire battre le cœur de la ville",
    description: "La première super-app qui reconnecte les habitants à leur territoire. Découvrez, partagez et vivez votre ville autrement.",
    url: 'https://yunicity.fr',
    siteName: 'YUNICITY',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
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
    images: ['/twitter-image.png'],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#8B5CF6" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
