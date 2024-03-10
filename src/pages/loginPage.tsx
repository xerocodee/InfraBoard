'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { FcGoogle } from 'react-icons/fc'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'
import { cn } from '@/lib/utils'
import { Button, buttonVariants } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
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
import { useEffect, useState } from 'react'
import useAuth from '@/context/useAuth'
import appwriteService, { account } from '@/appwrite/config'
import { useRouter } from 'next/navigation'
import { Loader2 } from 'lucide-react'
const Icons = {
  spinner: Loader2,
}

const formSchema = z.object({
  email: z
    .string()
    .min(2, {
      message: 'Invalid Email',
    })
    .email(),
  password: z
    .string()
    .min(8, { message: 'Password must be atleast 8 characters' }),
})

const Login = () => {
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const suceesPath = process.env.NEXT_PUBLIC_SUCCESS_LOGIN_PATH
  const failurePath = process.env.NEXT_PUBLIC_FAILURE_LOGIN_PATH
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const { setAuthStatus } = useAuth()

  const login = async ({ email, password }: any) => {
    try {
      const session = await appwriteService.login({ email, password })
      console.log(formData)
      if (session) {
        setAuthStatus(true)
        router.push('/')
      }
    } catch (error: any) {
      setError(error.message)
    }
  }
  const googleAuth = async (e: any) => {
    e.preventDefault()
    account.createOAuth2Session('google', suceesPath, failurePath)
    router.push('/')
  }

  const githubAuth = async (e: any) => {
    e.preventDefault()
    account.createOAuth2Session('github', suceesPath, failurePath)
    router.push('/')
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    login({ email: values.email, password: values.password })
  }

  useEffect(() => {
    const checkAuth = async () => {
      try {
        setLoading(true)
        const data = await appwriteService.isLoggedIn()
        if (data) router.replace('/')
      } catch (error) {
      } finally {
        setLoading(false)
      }
    }
    checkAuth()
  }, [router])
  if (loading)
    return (
      <div className="h-[100vh] w-full flex justify-center items-center">
        <Icons.spinner className="h-32 w-32 animate-spin" />
      </div>
    )
  return (
    <>
      <div className="container relative  h-[100vh] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-1 lg:px-0">
        <Link
          href="/signup"
          className={cn(
            buttonVariants({ variant: 'ghost' }),
            'absolute right-4 top-4 md:right-8 md:top-8',
          )}
        >
          Sign Up
        </Link>
        <div className="lg:p-8 w-full">
          <div className="w-full m-auto bg-white lg:max-w-lg space-y-6">
            <Card>
              <CardHeader className="space-y-1">
                <CardTitle className="text-2xl text-center">Log in</CardTitle>
                <CardDescription className="text-center">
                  Enter your email and password to login
                </CardDescription>
              </CardHeader>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <CardContent className="grid gap-4">
                    <div className="grid gap-2">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            {' '}
                            <FormLabel htmlFor="email">Email</FormLabel>
                            <FormControl>
                              <Input placeholder="" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="grid gap-2">
                      <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem>
                            {' '}
                            <FormLabel htmlFor="password">Password</FormLabel>
                            <FormControl>
                              <Input
                                type="password"
                                placeholder=""
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    {error && (
                      <p className="text-red-600 mt-2 text-center">{error}</p>
                    )}
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
                    <Button className="w-full" type="submit">
                      Login
                    </Button>
                  </CardFooter>
                </form>
              </Form>
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
                Don&apos;t have an account?{' '}
                <Link href="/signup">
                  {' '}
                  <span className=" text-blue-600 hover:underline">
                    Sign up
                  </span>
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

export default Login
