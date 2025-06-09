import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://db.onlinewebfonts.com/c/f1cdb0d38ca874854134382468e53a83?family=XBOX+Helvetica" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
