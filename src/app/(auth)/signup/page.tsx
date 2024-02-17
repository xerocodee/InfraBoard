import dynamic from 'next/dynamic'

const SignUpPage = dynamic(() => import('@/pages/signupPage'), { ssr: false });

const Signup = () => {
  return <SignUpPage />
}

export default Signup
