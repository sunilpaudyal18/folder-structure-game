import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import PwaInit from '@/components/PwaInit';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const viewport: Viewport = {
  themeColor: '#06b6d4',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://folderrun.app'), // Replace with actual domain when deployed
  title: 'FolderRun - Learn File Paths Through Interactive Game',
  description:
    'Master file system navigation with FolderRun, an interactive puzzle game that teaches relative and absolute paths through visual tree exploration.',
  keywords: [
    'file system game',
    'learn relative path',
    'linux path practice',
    'file navigation game',
    'terminal path trainer',
    'command line practice',
  ],
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.png', type: 'image/png' }
    ],
    apple: [
      { url: '/icons/icons/icon-192x192.png' }
    ]
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'FolderRun',
  },
  openGraph: {
    title: 'FolderRun - Learn File Paths Through Interactive Game',
    description:
      'Master file system navigation with FolderRun. Navigate visual folder trees using path commands in this interactive educational game.',
    type: 'website',
    locale: 'en_US',
    siteName: 'FolderRun',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'FolderRun - Interactive File System Navigation Game',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FolderRun - Learn File Paths Through Interactive Game',
    description:
      'Master file system navigation with FolderRun. Navigate visual folder trees using path commands.',
    images: ['/og-image.png'],
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
      <body className="min-h-full flex flex-col">
        <PwaInit />
        {children}
      </body>
    </html>
  );
}
