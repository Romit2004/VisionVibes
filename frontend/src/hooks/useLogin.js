import {useState} from 'react'
import { useAuthContext } from '../context/AuthContext';
const useLogin = () => {
const [loading,setLoading] = useState(false);
const {setAuthUser}= useAuthContext()

const login = async ({email,password}) => {
try {
    setLoading(true)
    const data = await fetch('/api/v1/users/login',{
        method : "POST",
        headers : {"content-type" : "application/json"},
        body : JSON.stringify({email,password})
    })
    const user = await data.json();
    if(!user){
        throw new Error(user.error)
    }
    console.log(user);
    localStorage.setItem("currentUser", JSON.stringify(user))
    setAuthUser(user);
    setLoading(true);
} catch (error) {
    console.log(error.message)
}finally{
    setLoading(false)
}
}
return {loading,login}
}

export {useLogin}