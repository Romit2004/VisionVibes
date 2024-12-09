import { useState } from "react"
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";


const useLogout = () => {
    const [loading,setLoading] = useState(false);
    const {setAuthUser} = useAuthContext()
    const logout = async () => {
        
    try {
        setLoading(true)
        const res = await fetch("/api/v1/users/logout",{
            method: "POST",
            headers : {"authorization" : "Bearer "}
        });
        const data = await res.json();
        localStorage.removeItem("currentUser");
        setAuthUser(null)
        if(!data){
            throw new Error(data.error)
        }

    } catch (error) {
      toast.error(error.message)  
    }finally{
        setLoading(false)
    }
    }
   return {loading,logout}
}

export {useLogout}