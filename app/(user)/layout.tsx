import '../../styles/globals.css';

import Header from '../../components/Header.tsx';

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
      </body>
    </html>
  )
}
