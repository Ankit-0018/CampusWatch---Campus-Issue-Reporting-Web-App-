import React, { useEffect, useState } from 'react'
import { useUser } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../components/layout/sidebar'
import RecentIssue from '../components/RecentIssue'



const Dashboard = () => {
    const navigate = useNavigate()
      const {user , isLoading , error} = useUser()
   const [issueData , setIssueData] = useState({
    description : "",
    status : "",
    location : "",
    priority : "",
    title : ""
     })
     const [criticalCount , setCriticalCount] = useState(0)
     const [resolvedCount , setResolvedCount] = useState(0)
     const [inProgressCount , setInProgressCount] = useState(0)

   useEffect(() => {
    if (!isLoading && !user || error) {
      navigate("/");
    }
  }, [user, isLoading, navigate]);

  if(isLoading){
    return <div className="w-full h-screen flex justify-center items-center">Loading...</div>
  }
    
  return (
    <div className='w-full h-screen'>
      <Sidebar/>
    <div className='w-full flex px-2 py-3 my-3 gap-4'>
    <div className='w-full p-4 border-2 min-h-30 rounded-lg flex justify-center items-center bg-[#5664f5] text-white font-bold text-lg'>
        <div className='flex gap-3 flex-col text-center'>
          
        <span>{criticalCount}</span>
        <span>Critical</span>
        </div>
      </div>
      <div className='w-full p-4 border-2 min-h-30 rounded-lg flex justify-center items-center bg-[#5664f5] text-white font-bold text-lg'>
        <div className='flex gap-3 flex-col text-center '>
          
        <span>{resolvedCount}</span>
        <span>Resolved</span>
        </div>
      </div>
      <div className='w-full p-4 border-2 min-h-30 rounded-lg flex justify-center items-center bg-[#5664f5] text-white font-bold text-lg'>
        <div className='flex gap-3 flex-col text-center'>
          
        <span>{inProgressCount}</span>
        <span>In-Progress</span>
        </div>
      </div>
    </div>
      <RecentIssue/>
    </div>
  )
}

export default Dashboard
