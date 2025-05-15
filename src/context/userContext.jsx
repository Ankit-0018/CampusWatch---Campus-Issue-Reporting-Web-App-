import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";



const userContext = createContext();


export const  userProvider = ({children }) => {

    const [user,setUser] = useState(null)

    useEffect(() => {
        axios.get("http://localhost:3000/api/me").then(res => setUser(res.data.user)).catch(() => setUser(null))
    })

    const logout = () => {
axios.post("http://localhost:3000/api/logout").then(() => setUser(null))

    }

return <userContext.Provider value={{user,setUser,logout}}>
    {children}
</userContext.Provider>

}

export const useUser = useContext(userContext)