import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Curriculum Explorer',
  description: 'A comprehensive curriculum explorer application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-primary text-primary-foreground py-4">
          <div className="container mx-auto">
            <h1 className="text-2xl font-bold">Curriculum Explorer</h1>
          </div>
        </header>
        <main className="container mx-auto py-8">{children}</main>
        <footer className="bg-muted py-4 mt-8">
          <div className="container mx-auto text-center text-muted-foreground">
            <p>© {new Date().getFullYear()} Curriculum Explorer</p>
          </div>
        </footer>
      </body>
    </html>
  );
} 