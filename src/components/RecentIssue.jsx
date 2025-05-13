import React, { useEffect , useState} from 'react'
import {supabase} from '../lib/supabase'

const RecentIssue = () => {
  const [issue , setIssue] = useState([])


  useEffect(() => {
const fetchIssue = async () => {
  const {data , error} = await supabase.from("issues").select("*")
if(data){
  setIssue(data)
}

}
fetchIssue()

  },[])
  return (
    <div className='w-full min-h-[200px] px-3 '>
     {issue.map((iss) => {
      return  <div className='w-full px-4 py-3  rounded-lg mb-3 shadow-lg'>
      <span className='font-bold text-lg'>{iss.title}</span>
      <p className='text-md text-gray-500'>Status : {iss.status}</p>
      <p className='text-md text-gray-500'>Created by : {iss.created_by}</p>
    </div>
     })}
      
   
    </div>
  )
}

export default RecentIssue
