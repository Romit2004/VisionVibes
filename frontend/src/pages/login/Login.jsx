import React, { useState } from 'react'
import bgImage from "../../assets/bg.jpg";
import { useLogin } from '../../hooks/useLogin';

const Login = () => {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("") 
    const {loading,login} = useLogin();


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email,password)
        await login({email,password})
    }

  return (
    <div
    className="flex justify-center items-center min-h-screen bg-cover bg-center w-screen"
    style={{
      backgroundImage: `url(${bgImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    <div className="w-full max-w-md bg-white/20 border border-white/20 backdrop-blur-lg text-white rounded-xl p-8 shadow-lg">
      <form onSubmit={handleSubmit}>
        <h1 className="text-3xl font-bold text-center mb-6">Login</h1>
        
        
        <div className="relative w-full mb-6">
          <input
            type="text"
            placeholder="E-Mail"
            required
             value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-12 px-4 pl-10 bg-transparent border border-white/20 rounded-full text-white placeholder-white focus:ring-2 focus:ring-white outline-none"
          />

          <i className="bx bxs-user absolute left-4 top-1/2 transform -translate-y-1/2 text-xl"></i>
        </div>
        <div className="relative w-full mb-6">
          <input
            type="password"
            placeholder="Password"
            required
             value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-12 px-4 pl-10 bg-transparent border border-white/20 rounded-full text-white placeholder-white focus:ring-2 focus:ring-white outline-none"
          />
          <i className="bx bxs-lock-alt absolute left-4 top-1/2 transform -translate-y-1/2 text-xl"></i>
        </div>
        
        <button
          type="submit"
          className="w-full h-12 bg-white text-gray-800 rounded-full font-semibold shadow-md hover:shadow-lg transition-all"
        >
          Login
        </button>
        <div className="text-center mt-6 text-sm">
          <p>
            Don’t have an account?{" "}
            <a href="/signup" className="font-semibold hover:underline">
              Register
            </a>
          </p>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Login
