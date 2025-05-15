import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { CircleUserRound,CircleX, Menu, Search, LayoutDashboard, UserRound , ListChecks , CircleDot } from 'lucide-react'
import { useUser } from '../../context/UserContext'

const Sidebar = () => {
  const {logout} = useUser()
const navigate = useNavigate()
const [isActive, setIsActive] = useState(false)
const handleLogout = async () => {
try {
logout()

} catch (error) {
    console.log("Error During Logout" , error)
    toast.error("Logout Failed")
    return
}

toast.success("Log Out successfully")
navigate("/")

}

const handleClose = () => {

 setIsActive(!isActive)
}
  return (
 
 <div className='w-full flex justify-between '>
  <div>
  <div className='flex gap-2 p-2 m-2'>
      <CircleUserRound />
      <h1 className='text-lg font-bold'>Campus Watch</h1>
      </div>
    
  <nav className={`transition-all duration-500 ease-in-out overflow-hidden ${isActive ? 'max-h-0 ' : 'max-h-[400px]'}`}>
   
    <div>
      <div className='flex gap-2 p-1 m-2 '>
      <UserRound className='text-[#5664f5]' />
        <h2>Profile</h2>
      </div>
      <div className='flex gap-2 p-1 m-2 '>
      <ListChecks className='text-[#5664f5]' />
        <h2>My Issues</h2>
      </div>
      <div className='flex gap-2 p-1 m-2 '>
      <CircleDot className='text-[#5664f5]' />
        <h2>Issues</h2>
      </div>
      <div className='flex gap-2 p-1 m-2 '>
      <Search className='text-[#5664f5]' />
      <h2>Lost & Found</h2>
      </div>
      <div className='flex gap-2 p-1 m-2 '>
      <LayoutDashboard className='text-[#5664f5]' />
        <h2>Dashboard</h2>
      </div>
    </div>
  <button className='px-2 py-3 m-4 bg-red-500 text-white rounded-md' onClick={handleLogout}>
    Log out
  </button>
  </nav>

  </div>
    <div className='m-4 '>
      {isActive ? <Menu onClick={handleClose} className='transition-all duration-300 text-[#5664f5]'/> : <CircleX onClick={handleClose} className={`transition-all duration-300 transform ease-in-out ${!isActive ? 'rotate-360' : ''}`} />}
   
    </div>
 </div>
  )
}

export default Sidebar
