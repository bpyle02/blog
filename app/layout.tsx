import { Metadata } from 'next';
import '../styles/globals.css';
import Header from '@/components/Header';

export const metadata:Metadata = {
  title: "Brandon's Portfolio",
  description: "Brandon's Personal Portfolio Website",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='mx-auto'>
        <Header />
        {children}
      </body>
    </html>
  )
}