import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Jeju Damgyul',
  description: 'Boutique orchard storefront experience for Jeju citrus.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="bg-background font-body text-on-background antialiased">
        {children}
      </body>
    </html>
  );
}
