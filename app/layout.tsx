import './globals.css'
// import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Background',
  description: 'Manage your database',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // <ClerkProvider>
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    // </ClerkProvider>
  )
}