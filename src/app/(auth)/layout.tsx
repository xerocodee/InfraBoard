'use client'
import { Inter } from 'next/font/google'
import '../globals.css'
import { TooltipProvider } from '@/components/ui/tooltip'
import { AuthProvider } from '@/context/authContext'
import appwriteService from '@/appwrite/config'
import { useEffect, useState } from 'react'
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [authStatus, setAuthStatus] = useState(false)
  const [loader, setLoader] = useState(true)
  useEffect(() => {
    appwriteService
      .isLoggedIn()
      .then(setAuthStatus)
      .finally(() => setLoader(false))
  }, [])

  return (
    <AuthProvider value={{ authStatus, setAuthStatus }}>
      {!loader && (
        <>
          <main className="px-2 py-4  bg-white">{children}</main>
        </>
      )}
    </AuthProvider>
  )
}
