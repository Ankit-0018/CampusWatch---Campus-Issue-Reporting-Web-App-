import React, { useState } from 'react'
import RegisterForm from '../components/RegisterForm'
import LoginForm from './LoginForm'

const FormCard = () => {
const [isRegistering , setIsRegistering] = useState(false)

  return (
    <div className='w-full min-h-screen flex justify-center items-center p-8'>
    <div className='min-h-[280px] max-w-[420px] m-4 border-2'>
     { isRegistering ? <RegisterForm key="register" setIsRegistering={setIsRegistering} /> : 
      <LoginForm key="login" setIsRegistering={setIsRegistering} />}
    </div>
    </div>
  )
}

export default FormCard
