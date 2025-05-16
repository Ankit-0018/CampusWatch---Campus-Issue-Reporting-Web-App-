import {  createContext, useContext , useEffect, useState} from "react";
import axios, { Axios } from "axios";

const IssueContext = createContext();

export const IssueProvider = ({children}) => {

const [issueDetails , setIssueDetails] = useState([])
const [error , setError] = useState("")
const [isLoading, setIsLoading] = useState(true)

useEffect(() => {


 axios.get("http://localhost:3000/api/issues").then(res => {
    
    setIssueDetails(res.data.issues)
setIsLoading(false)
}).catch(err =>  {
    setError(err)
    setIsLoading(false)

})


},[])

    return <IssueContext.Provider value={{issueDetails , error , isLoading , setIsLoading , setIssueDetails}}>
        {children}
    </IssueContext.Provider>
}

export const useIssues = () =>  useContext(IssueContext)
