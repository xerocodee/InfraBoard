import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import { TooltipProvider } from '@/components/ui/tooltip'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'InfraBoard',
  description: 'Visual Cloud Infrastructure Management',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TooltipProvider delayDuration={50}>{children}</TooltipProvider>
      </body>
    </html>
  )
}
