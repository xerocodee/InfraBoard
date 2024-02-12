'use client'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Button, buttonVariants } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa6'
import { useRouter } from 'next/navigation'
import useAuth from '@/context/useAuth'
import appwriteService, { account } from '@/appwrite/config'
import { FormEvent, useState } from 'react'

const page = () => {
  const router = useRouter()
  const { authStatus } = useAuth()
  if (authStatus) {
    router.replace('/')
    return <></>
  }
  const suceesPath = process.env.NEXT_PUBLIC_SUCCESS_LOGIN_PATH
  const failurePath = process.env.NEXT_PUBLIC_FAILURE_LOGIN_PATH

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
  })
  const [error, setError] = useState('')

  const { setAuthStatus } = useAuth()

  const urlParams = new URLSearchParams(window.location.search)
  const userId = urlParams.get('userId')
  const secret = urlParams.get('secret')

  const verifyParams = {
    userId: userId,
    secret: secret,
  }

  const create = async (e: FormEvent) => {
    e.preventDefault()
    console.log('s')
    try {
      const userData = await appwriteService.createUserAccount(formData)
      await appwriteService.createDatabaseAccount(formData)

      await appwriteService.createVerification()

      if (userData) {
        setAuthStatus(true)
      }
      appwriteService
        .verifyUser(verifyParams)
        .then(() => {
          console.log('user is verified')
          router.replace('/')
        })
        .catch((err) => {
          console.log(err)
          setError(err.message)
        })
    } catch (error: any) {
      console.log(error)
      setError(error.message)
    }
  }

  const googleAuth = async (e: any) => {
    e.preventDefault()
    account.createOAuth2Session('google', suceesPath, failurePath)
  }
  const githubAuth = async (e: any) => {
    e.preventDefault()
    account.createOAuth2Session('github', suceesPath, failurePath)
  }

  return (
    <>
      <div className="container relative  h-[100vh] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols- lg:px-0">
        <Link
          href="/login"
          className={cn(
            buttonVariants({ variant: 'ghost' }),
            'absolute right-4 top-4 md:right-8 md:top-8',
          )}
        >
          Login
        </Link>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 lg:max-w-lg">
            <Card>
              <CardHeader className="space-y-1">
                <CardTitle className="text-2xl text-center">Sign Up</CardTitle>
                <CardDescription className="text-center">
                  Enter your email and password to register
                </CardDescription>
              </CardHeader>
              <form>
                <CardContent className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          name: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder=""
                      value={formData.email}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      value={formData.password}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          password: e.target.value,
                        }))
                      }
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Remember me
                    </label>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col">
                  <Button className="w-full" onClick={create}>
                    Register
                  </Button>
                </CardFooter>
              </form>
              <div className="relative mb-2">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    Or continue with
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6 m-2">
                <Button variant="outline" onClick={googleAuth}>
                  <FcGoogle className="mr-2 h-4 w-4" />
                  Google
                </Button>
                <Button variant="outline" onClick={githubAuth}>
                  <FaGithub className="mr-2 h-4 w-4" />
                  Github
                </Button>
              </div>

              <p className="mt-2 text-xs text-center text-gray-700 mb-2">
                {' '}
                Already have an account?{' '}
                <Link href="/login">
                  <span className=" text-blue-600 hover:underline">Log in</span>
                </Link>
              </p>
            </Card>

            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{' '}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default page
