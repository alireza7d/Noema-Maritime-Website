import type { Metadata } from 'next';
import { DM_Sans, Playfair_Display, Courier_Prime } from 'next/font/google';
import './globals.css';

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-sans', weight: ['300','400','500','600'] });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif', weight: ['400','600','700'] });
const courierPrime = Courier_Prime({ subsets: ['latin'], variable: '--font-mono', weight: ['400','700'] });

export const metadata: Metadata = {
  title: 'NOEMA GROUP – Maritime Freight Solutions',
  description: 'NOEMA GROUP coordinates vessel capacity, cargo movement, and port-to-port shipping solutions for cargo owners, traders, and commercial clients.',
  keywords: 'maritime freight, dry bulk cargo, vessel capacity, port-to-port shipping, voyage coordination',
  openGraph: {
    title: 'NOEMA GROUP – Maritime Freight Solutions',
    description: 'Dry bulk cargo transportation and freight solutions for global maritime trade.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${playfair.variable} ${courierPrime.variable} bg-deep text-white font-sans`}>
        {children}
      </body>
    </html>
  );
}