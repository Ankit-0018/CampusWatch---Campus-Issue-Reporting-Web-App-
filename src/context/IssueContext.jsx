import {  createContext, useContext , useEffect, useState} from "react";
import axios, { Axios } from "axios";

const IssueContext = createContext();

const IssueProvider = ({children}) => {

const [issueDetails , setIssueDetails] = useState({
    created_at : "",
    created_by : "",
    title : "",
    description : "",
    location : "",
})

useEffect(() => {

axios.get()

},[])

    return <IssueContext.Provider value={issueDetails}>
        {children}
    </IssueContext.Provider>
}