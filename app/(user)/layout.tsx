import '../../styles/globals.css';

import Header from '../../components/Header.tsx';
import Footer from '@/components/Footer.tsx';

import { Metadata } from "next";

export const metadata:Metadata = {
    robots: {
        index: true,
        nocache: false
    }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className=''>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
