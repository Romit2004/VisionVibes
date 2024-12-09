import React, { useState } from 'react'
import bgImage from "../../assets/bg.jpg";
import { useSignup } from '../../hooks/useSignup';

const Signup = () => {
  const [inputs, setInputs] = useState({ fullname: "", email: "", username: "", password: "",avatar: "" })
  const {loading,signup} = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs);
    await signup(inputs)
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
          <h1 className="text-3xl font-bold text-center mb-6">Signup</h1>
          <div className="relative w-full mb-6">
            <input
              type="text"
              placeholder="Full Name"
              required
              value={inputs.fullname}
              onChange={(e) => setInputs({ ...inputs, fullname: e.target.value })}
              className="w-full h-12 px-4 pl-10 bg-transparent border border-white/20 rounded-full text-white placeholder-white focus:ring-2 focus:ring-white outline-none"
            />

            <i className="bx bxs-user absolute left-4 top-1/2 transform -translate-y-1/2 text-xl"></i>
          </div>
          <div className="relative w-full mb-6">
            <input
              type="text"
              placeholder="Username"
              required
              value={inputs.username}
              onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
              className="w-full h-12 px-4 pl-10 bg-transparent border border-white/20 rounded-full text-white placeholder-white focus:ring-2 focus:ring-white outline-none"
            />

            <i className="bx bxs-user absolute left-4 top-1/2 transform -translate-y-1/2 text-xl"></i>
          </div>
          <div className="relative w-full mb-6">
            <input
              type="text"
              placeholder="E-Mail"
              required
              value={inputs.email}
              onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
              className="w-full h-12 px-4 pl-10 bg-transparent border border-white/20 rounded-full text-white placeholder-white focus:ring-2 focus:ring-white outline-none"
            />

            <i className="bx bxs-user absolute left-4 top-1/2 transform -translate-y-1/2 text-xl"></i>
          </div>
          <div className="relative w-full mb-6">
            <input
              type="password"
              placeholder="Password"
              required
              value={inputs.password}
              onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
              className="w-full h-12 px-4 pl-10 bg-transparent border border-white/20 rounded-full text-white placeholder-white focus:ring-2 focus:ring-white outline-none"
            />
            <i className="bx bxs-lock-alt absolute left-4 top-1/2 transform -translate-y-1/2 text-xl"></i>
          </div>
          <div className="relative w-full mb-6">
            
            <input
              id="avatarUpload"
              type="file"
              required
              className="hidden"
              onChange={(e)=>setInputs({...inputs,avatar:e.target.files[0]})}
            />
            <label
              htmlFor="avatarUpload"
              className="w-full h-12 flex items-center justify-center bg-transparent border border-white/20 rounded-full text-white placeholder-white focus:ring-2 focus:ring-white cursor-pointer px-4 pl-10 max-w-xs"
            >
              Upload Avatar
            </label>
            <i className="bx bxs-lock-alt absolute left-4 top-1/2 transform -translate-y-1/2 text-xl"></i>

          </div>
          <button
            type="submit"
            className="w-full h-12 bg-white text-gray-800 rounded-full font-semibold shadow-md hover:shadow-lg transition-all"
          >
            Signup
          </button>
          {/* <div className="text-center mt-6 text-sm">
            <p>
              Don’t have an account?{" "}
              <a href="#" className="font-semibold hover:underline">
                Register
              </a>
            </p>
          </div> */}
        </form>
      </div>
    </div>
  )
}

export default Signup
