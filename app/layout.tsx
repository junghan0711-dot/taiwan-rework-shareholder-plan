import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '台灣再沃｜股東營運規劃',
  description: '台灣再沃 2026–2027 成立前營運規劃：收入結構、成本配置與現金水位。',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
