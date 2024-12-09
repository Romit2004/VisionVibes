import { useState } from "react"
import { useAuthContext } from "../context/AuthContext";

const useSignup = () =>{
    const [loading,setLoading] = useState(false);
    const {setAuthUser} = useAuthContext()

    const signup = async ({fullname, email, username, password,avatar}) => {
        const submitFormData = new FormData()
        submitFormData.append("fullName", fullname) 
        submitFormData.append("email", email) 
        submitFormData.append("username", username) 
        submitFormData.append("password", password) 
        submitFormData.append("avatar", avatar) 
        for(let i of submitFormData){
            console.log(i)
        }
        try {
            setLoading(true);
            const data = await fetch("/api/v1/users/register", {
                method : "POST",
                // headers : {"content-type" : "application/json"},
                body : submitFormData
                
            })
            const user = await data.json();
            if(!user){
                throw new Error(user.error)
            }
            console.log(user)
            localStorage.setItem("currentUser",JSON.stringify(user))
            setAuthUser(user)

            
        } catch (error) {
           console.log(error); 
        } finally{
            setLoading(false)
        }
        
    }
    return {loading,signup}
}

export {useSignup}