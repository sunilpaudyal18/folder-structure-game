import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'PathPilot - Learn File Paths Through Interactive Game',
  description:
    'Master file system navigation with PathPilot, an interactive puzzle game that teaches relative and absolute paths through visual tree exploration.',
  keywords: [
    'file system game',
    'learn relative path',
    'linux path practice',
    'file navigation game',
    'terminal path trainer',
    'command line practice',
  ],
  openGraph: {
    title: 'PathPilot - Learn File Paths Through Interactive Game',
    description:
      'Master file system navigation with PathPilot. Navigate visual folder trees using path commands in this interactive educational game.',
    type: 'website',
    locale: 'en_US',
    siteName: 'PathPilot',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PathPilot - Learn File Paths Through Interactive Game',
    description:
      'Master file system navigation with PathPilot. Navigate visual folder trees using path commands.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
