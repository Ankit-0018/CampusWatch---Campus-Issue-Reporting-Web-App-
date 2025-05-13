import React, { useEffect, useState } from 'react'
import { getSession, login } from '../lib/authService';
import toast from 'react-hot-toast';
import { NavLink, useNavigate } from 'react-router-dom';

const LoginForm = ({setIsRegistering}) => {
  const navigate = useNavigate()
      const [loginData, setLoginData] = useState({
          email : "",
          password : ""
      })
  
    
  
  const handleSubmit = async (e) => {
  e.preventDefault();
  const {email , password} = loginData
  
      const {data, error} = await login(email , password)
  
  
  if(error){
      console.log("Error found" , error)
      toast.error("Login failed")
      return
  }
  
  toast.success("Login Successfull")
  console.log(data)
  navigate("/dashboard")
  setLoginData({
      email : "",
      password : ""
  })
  
  }
  
    return (
      <div>
        
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Enter Your Email...' value={loginData.email} onChange={e => setLoginData({...loginData, email: e.target.value})}
            />
            <input type="text" placeholder='Enter Password' value={loginData.password} onChange={e => setLoginData({...loginData, password: e.target.value})} />
            <button>Login</button>
        </form>

        <p>Don't have an account?<NavLink onClick={() => setIsRegistering(true)} >Register Here!</NavLink></p>
      </div>
    )
}

export default LoginForm
