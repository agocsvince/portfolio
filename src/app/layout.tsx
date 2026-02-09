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
  title: "Vince Agocs's portfolio",
  description: 'Vince Agocs web developer & videographer based in Budapest',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name: "Vince Agocs's portfolio",
  description: 'Vince Agocs web developer & videographer based in Budapest',
  jobTitle: 'Web developer & videographer',
  image:
    'https://eu-central-1-shared-euc1-02.graphassets.com/AqQPMidZHRjK0BXidcGVez/mwyqI5LAT3CVgAvCUTJY',
  url: 'https://agocsvince.com',
  sameAs: [
    'https://www.linkedin.com/in/vince-ag%C3%B3cs-74b585221/',
    'https://github.com/agocsvince',
  ],
  worksFor: {
    '@type': 'Organization',
    name: 'Freelance',
  },
  author: {
    '@type': 'Person',
    name: 'Vince Agocs',
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
        <meta
          property="og:image"
          content="https://agocsvince.com/og_image.jpg"
        />
        <meta property="og:url" content="https://agocsvince.com" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/logo_alternative.svg" />
        <link rel="canonical" href="https://agocsvince.com" />
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
