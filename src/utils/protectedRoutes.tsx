'use client'
import { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import appwriteService from '@/appwrite/config'
import { Loader2 } from 'lucide-react'
import { BarLoader, ClockLoader} from 'react-spinners';

export const Icons = {
  spinner: Loader2,
}

const ProtectedLayout = (Component: any) => {
  return function IsAuth(props: any) {
    const router = useRouter()
    const pathname = usePathname()
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
      const checkAuthentication = async () => {
        try {
          const isAuthenticated = await appwriteService.isLoggedIn()
          if (!isAuthenticated) {
            if (pathname !== '/signup') {
              router.push('/login')
            }
          } else {
            router.replace('/')
          }
        } catch (error) {
          console.error('Error checking authentication:', error)
          router.push('/login') // Redirect in case of an error
        } finally {
          setIsLoading(false) // Hide spinner when done
        }
      }

      checkAuthentication()
    }, [router, pathname])

    if (loading){
      return (
        <div className="h-[100vh] w-full flex justify-center items-center">
          <ClockLoader color="#36d7b7" loading={loading} height={72} width={62} />
        </div>
      );
    }
    return <Component {...props} />
  }
}

export default ProtectedLayout
