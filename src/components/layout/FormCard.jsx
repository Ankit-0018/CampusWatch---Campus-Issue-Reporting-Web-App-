import React, { useEffect, useState } from 'react'
import RegisterForm from '../forms/RegisterForm'
import LoginForm from '../forms/LoginForm'
import { useUser } from '../../context/UserContext'
import { useNavigate } from 'react-router-dom'


const FormCard = () => {
const [isRegistering , setIsRegistering] = useState(false)
const navigate = useNavigate()
const {user} = useUser()

useEffect(() => {
if(user) navigate("/dashboard")
},[])

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
