import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error , setError] = useState(null)
  const [isLoading , setIsLoading] = useState(true)
  

  useEffect(() => {
    axios.get("http://localhost:3000/api/me", { withCredentials: true })
      .then(res => {
        
        console.log(res.data.user.user)
        setUser(res.data.user)
      setError(null)
        setIsLoading(false)
      })
      .catch((err) => {
        setError(err)
        setUser(null)
        setIsLoading(false)
      });
  }, []);

  const logout = () => {
    axios.post("http://localhost:3000/api/logout", {}, { withCredentials: true })
      .then(() => setUser(null));
  };

  return (
    <UserContext.Provider value={{ user, setUser, logout , error, isLoading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
