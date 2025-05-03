import type { Metadata } from 'next';
import { DotGothic16, Geist_Mono } from 'next/font/google';
import './globals.css';
import ClientLayout from '@/components/ClientLayout';
import Head from 'next/head';

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta property="og:image" content="https://agocsvince.com/og_image.jpg" />
        <meta property="og:url" content="https://agocsvince.com" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://agocsvince.com" />
      </Head>
      <body
        className={`${dotGothic.variable} ${geistMono.variable} antialiased`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
