import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Quikzyn — Message Alarm | Smart Notification Alerts',
  description:
    'Never miss important notifications. Message Alarm rings a smart alarm when notification keywords match. Set rules for WhatsApp, Slack, TradingView, and more.',
  keywords: [
    'message alarm',
    'notification alerts',
    'keyword alarm',
    'android notification',
    'smart alarm',
    'WhatsApp alarm',
    'notification sound',
    'quikzyn',
  ],
  authors: [{ name: 'Tawhid Islam' }],
  openGraph: {
    title: 'Message Alarm – Notification Alerts by Quikzyn',
    description:
      'Never miss important notifications. Smart alarm rules that ring when keywords match.',
    url: 'https://quikzyn.com',
    siteName: 'Quikzyn',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Message Alarm – Notification Alerts by Quikzyn',
    description:
      'Never miss important notifications. Smart alarm rules that ring when keywords match.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} flex min-h-screen flex-col`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
