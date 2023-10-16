import './globals.css';
import { Inter } from 'next/font/google';
import { Roboto } from 'next/font/google';
import NavBar from './components/navbar';

const inter = Inter({ subsets: ['latin'] });
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Ian Yip',
  description: "Ian's blog",
  // to understand if og:image or og:title should be setup here
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <Head>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <body
        className={`max-w-xl px-4 py-0 mx-auto mt-12 mb-24 ${roboto.className}`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
