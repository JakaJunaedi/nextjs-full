import FormSignIn from "@/components/auth/form-signin"

const SignIn = () => {
    return (
        <div className='p-6 space-y-4'>
      <h1 className='text-2xl font-bold text-gray-900'>Signin Account</h1>
      <FormSignIn />
    </div>
    )
}

export default SignIn