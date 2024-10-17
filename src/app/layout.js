import './globals.css';
import Head from 'next/head';
import React from 'react';


export const metadata = {
  title: 'Beqa Tvildiani Portfolio',
  description: 'Welcome to Beqa Tvildiani\'s personal portfolio website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className="bg-white dark:bg-black text-gray-900 dark:text-gray-100">
        {/* Navbar */}
        <nav className="bg-gray-800 p-4">
          <ul className="container mx-auto flex items-center">
            <li><a href="/" className="text-white">Home</a></li>
            <li><a href="portfolio" className="ml-4 text-white">Portfolio</a></li>
            <li><a href="work" className="ml-4 text-white">Work</a></li>
            <li><a href="contact" className="ml-4 text-white">Contact</a></li>
          </ul>
        </nav>

        {/* Main content */}
        <main className="bg-gray-900 min-h-[85vh]">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-800 p-4 absolute b-0 w-full">
          <div className="container mx-auto text-center">
            <p>&copy; chxikvia.tech | Design by <a href="https://github.com/BEQSONA-cmd" className="text-blue-400">BEQSONA-cmd</a></p>
          </div>
        </footer>
      </body>
    </html>
  );
}
