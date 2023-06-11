import '../styles/globals.css';

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
      <body className='max-w-7xl mx-auto'>
        {children}
      </body>
    </html>
  )
}