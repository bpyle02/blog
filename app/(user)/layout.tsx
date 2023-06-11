import '../../styles/globals.css';

import Header from '../../components/Header.tsx';
import Banner from '../../components/Banner.tsx';

export const metadata = {
  title: "Brandon's Blog",
  description: "Brandon's Blog",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='max-w-[90rem] mx-auto'>
        <Header />
        <Banner />
        {children}
      </body>
    </html>
  )
}
