import type { Metadata } from 'next';
import { DotGothic16, Geist_Mono } from 'next/font/google';
import './globals.css';
import ClientLayout from '@/components/ClientLayout';
import { Analytics } from '@vercel/analytics/next';

const dotGothic = DotGothic16({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-dotgothic',
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://agocsvince.com'),
  title: {
    default: "Vince Agocs's Portfolio | Web Developer & Videographer",
    template: "%s | Vince Agocs",
  },
  description: 'Vince Agocs - Web developer & videographer based in Budapest. Specializing in modern web development and professional video production.',
  keywords: ['web developer', 'videographer', 'Budapest', 'portfolio', 'freelance', 'Next.js', 'React', 'video production'],
  authors: [{ name: 'Vince Agocs' }],
  creator: 'Vince Agocs',
  publisher: 'Vince Agocs',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://agocsvince.com',
    siteName: "Vince Agocs's Portfolio",
    title: "Vince Agocs's Portfolio | Web Developer & Videographer",
    description: 'Vince Agocs - Web developer & videographer based in Budapest. Specializing in modern web development and professional video production.',
    images: [
      {
        url: '/og_image.jpg',
        width: 1200,
        height: 630,
        alt: 'Vince Agocs Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Vince Agocs's Portfolio | Web Developer & Videographer",
    description: 'Vince Agocs - Web developer & videographer based in Budapest. Specializing in modern web development and professional video production.',
    images: ['/og_image.jpg'],
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
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
  alternates: {
    canonical: 'https://agocsvince.com',
  },
  category: 'portfolio',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Vince Agocs',
  jobTitle: 'Web Developer & Videographer',
  description: 'Web developer & videographer based in Budapest, specializing in modern web development and professional video production.',
  image: 'https://agocsvince.com/og_image.jpg',
  url: 'https://agocsvince.com',
  sameAs: [
    'https://www.linkedin.com/in/vince-ag%C3%B3cs-74b585221/',
    'https://github.com/agocsvince',
  ],
  knowsAbout: ['Web Development', 'Video Production', 'Next.js', 'React', 'TypeScript'],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Budapest',
    addressCountry: 'HU',
  },
  worksFor: {
    '@type': 'Organization',
    name: 'Freelance',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo_alternative.svg" />
        <link rel="apple-touch-icon" href="/logo_alternative.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${dotGothic.variable} ${geistMono.variable} antialiased`}
      >
        <ClientLayout>{children}</ClientLayout>
        <Analytics />
      </body>
    </html>
  );
}
