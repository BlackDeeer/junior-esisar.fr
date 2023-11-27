import type { Metadata } from 'next';
import { Darker_Grotesque } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/navigation/Navigation';
import Footer from '@/components/Footer';

const darkerGrotesque = Darker_Grotesque({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Junior Esisar',
  description:
    'La junior qui vous permet de réaliser vos projets sereinement et en un temps record.',
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
