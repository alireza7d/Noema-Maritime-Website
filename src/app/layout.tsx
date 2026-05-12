import type { Metadata } from 'next';
import { DM_Sans, Playfair_Display, Courier_Prime } from 'next/font/google';
import './globals.css';

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-sans', weight: ['300','400','500','600'] });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif', weight: ['400','600','700'] });
const courierPrime = Courier_Prime({ subsets: ['latin'], variable: '--font-mono', weight: ['400','700'] });

export const metadata: Metadata = {
  title: 'NOEMA GROUP - Maritime Freight Solutions',
  description: 'NOEMA GROUP is a U.S.-based maritime freight and chartering company focused on dry bulk cargo movement, vessel capacity coordination, and port-to-port shipment solutions.',
  keywords: 'maritime freight, dry bulk cargo, vessel capacity, port-to-port shipping, voyage coordination, chartering, gypsum, limestone, cement clinker',
  metadataBase: new URL('https://noemagroup.co'),
  alternates: { canonical: 'https://noemagroup.co' },
  verification: {
    google: 'iLxjArQJueCB7NoPRdl6WnzsKjCzvaF5FkkpuqyqRZE',
  },
  openGraph: {
    title: 'NOEMA GROUP - Maritime Freight Solutions',
    description: 'U.S.-based maritime freight and chartering company for dry bulk cargo.',
    url: 'https://noemagroup.co',
    siteName: 'NOEMA GROUP',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: { icon: '/logo-icon.png', apple: '/logo-icon.png' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={dmSans.variable + ' ' + playfair.variable + ' ' + courierPrime.variable} style={{ background: 'var(--deep)', color: '#f0f4fa', fontFamily: 'var(--font-sans)' }}>
        {children}
      </body>
    </html>
  );
}