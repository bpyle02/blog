import { Metadata } from 'next';
import '../styles/globals.css';
import Head from 'next/head';

export const metadata:Metadata = {
  metadataBase: new URL("https://www.brandonpyle.com"),
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
      <body>
        {children}
      </body>
    </html>
  )
}