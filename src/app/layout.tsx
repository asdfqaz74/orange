import './styles/globals.css';

import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Be_Vietnam_Pro, Plus_Jakarta_Sans } from 'next/font/google';

import { cn } from '@/shared/utils/cn';

const headline = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-plus-jakarta',
});

const body = Be_Vietnam_Pro({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-be-vietnam',
});

const materialSymbols = localFont({
  src: './styles/fonts/material-symbols-outlined.woff2',
  variable: '--font-material-symbols',
  display: 'block',
});

export const metadata: Metadata = {
  title: '제주 담귤',
  description: '제주 감귤을 위한 부티크 과수원 스토어 경험.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={cn(headline.variable, body.variable, materialSymbols.variable, 'bg-background font-body text-on-background antialiased')}>
        {children}
      </body>
    </html>
  );
}
