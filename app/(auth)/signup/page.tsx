import FormSignup from '@/components/auth/form-signup'
import React from 'react'

const Signup = () => {
  return (
    <div className='p-6 space-y-4'>
      <h1 className='text-2xl font-bold text-gray-900'>Create Account</h1>
      <FormSignup />
    </div>
  )
}

export default Signup
