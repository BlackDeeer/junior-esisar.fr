import type { Metadata, Viewport } from 'next';
import { Darker_Grotesque } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/navigation/Navigation';
import Footer from '@/components/Footer';

const darkerGrotesque = Darker_Grotesque({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Junior Esisar',
  description:
    "Réalisez vos projets aujourd'hui avec les ingénieurs de demain.",
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F6F6EB' },
    { media: '(prefers-color-scheme: dark)', color: '#7E4999' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='fr'>
      <body className={`${darkerGrotesque.className} bg-bone`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
