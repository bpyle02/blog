import '../../../../styles/globals.css';

export const metadata = {
  title: "Brandon's Blog Studio",
  description: "Brandon's Blog Studio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body>{children}</body>
    </html>
  )
}
