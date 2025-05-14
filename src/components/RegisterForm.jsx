import React,  { useState } from 'react';
import toast from 'react-hot-toast';
import { registerUser } from '../lib/authService';
import { supabase } from '../lib/supabase';
import { NavLink, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getSession } from '../lib/authService';
import axios from 'axios';

const RegisterForm = ({setIsRegistering}) => {

        const navigate = useNavigate()
  const [registerData, setRegisterData] = useState({
    fullname: "",
    email: "",
    password: "",
    gender: "",
    role: "",
    phone: "",
    confirmPassword: "",
    department: ""
  });


  const handleSubmit = async (e) => {
    e.preventDefault();

    
    if (registerData.password !== registerData.confirmPassword) { 
        toast.error("Password Not Matched");
        return;
    }
 

    console.log(registerData);
    const { fullname, email, password, gender, role, department, phone } = registerData;

   try {

   const response = await axios.post("http://localhost:3000/auth/api/register", registerData)
 if(!response.data.success){
     
return toast.error( response.data.message)

     }
  
    toast.success("Register successfull")
    setIsRegistering(false)
   
    
   } catch (error) {
    console.log("Error sending Data" , error)
   }
  };
  return (
   <div className="form p-4">
        <form onSubmit={handleSubmit}>
          <h1 className='text-center my-3 text-xl font-2xl'>Register with your Official Email Id</h1>

          <span>Join Campus Watch - <span>An Issue Reporting Platform</span></span>

          <input type="text" placeholder='Enter Your Full Name' value={registerData.fullname} onChange={e => setRegisterData({ ...registerData, fullname: e.target.value })} />
          <input type="email" placeholder='Enter Your Official Email' value={registerData.email} onChange={e => setRegisterData({ ...registerData, email: e.target.value })} />
          <input type="phone" placeholder='Enter Your Phone Number' value={registerData.phone} onChange={e => setRegisterData({ ...registerData, phone: e.target.value })} />
          <select name="department" value={registerData.department} onChange={e => setRegisterData({ ...registerData, department: e.target.value })} >
            <option value="">Select Your Branch</option> 
            <option value="BCA">BCA</option>
            <option value="MCA">MCA</option>
            <option value="B.tech">B.tech</option>
            <option value="BBA">BBA</option>
          </select>
          <select name="gender" value={registerData.gender} onChange={e => setRegisterData({ ...registerData, gender: e.target.value })} >
            <option value="">Select Your Gender</option>  
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <select name="role" value={registerData.role} onChange={e => setRegisterData({ ...registerData, role: e.target.value })} >
            <option value="">Role</option>  
            <option value="student">Student</option>
            <option value="faculty">Faculty</option>
          </select>
          <input type="password" placeholder='Create password' value={registerData.password} onChange={e => setRegisterData({ ...registerData, password: e.target.value })} />

          <input type="password" placeholder='Confirm your Password' value={registerData.confirmPassword} onChange={e => setRegisterData({ ...registerData, confirmPassword: e.target.value })} />
          <button>Submit</button>
        </form>


        <p>Already have an account? <NavLink onClick={() => setIsRegistering(false)}>Login Here</NavLink></p>
      </div>

  )
}

export default RegisterForm
