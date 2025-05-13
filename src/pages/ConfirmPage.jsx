import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const ConfirmPage = () => {
    const navigate = useNavigate()

  useEffect(() => {
const timer = setTimeout(() => {
navigate("/")
} , 5000)

return () => clearTimeout(timer);
  },[navigate])

  return (
    <div>
      <h1>For your security, we've sent a confirmation email.  Please verify your email address by clicking the link provided.  You'll be redirected to log in 5 second.
      </h1>
    </div>
  )
}

export default ConfirmPage
