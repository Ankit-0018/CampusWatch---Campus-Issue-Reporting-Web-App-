import { useState } from "react"
import Sidebar from "../components/layout/sidebar"
import IssueCard from "../components/issues/issueCard"


const Issues = () => {
     const [isAddFormIssue , setIsFormIssue] = useState(false)

  return (
    <>
<Sidebar/>
    <div className="p-4 w-full min-h-screen">
      
<IssueCard/>
   </div>
    </>
  )
}

export default Issues
