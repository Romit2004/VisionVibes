import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/home/Home'
import Signup from './pages/signup/Signup'
import Login from './pages/login/Login'
import Layout from './layout/Layout'
import VideoDisplay from './pages/video/VideoDisplay'
import { useAuthContext } from './context/AuthContext'
import VideoUpload from './pages/video/VideoUpload'
import {Toaster} from "react-hot-toast"

function App() {
  const {authUser} = useAuthContext()

  return (
    <>
     <div className='min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'>
      <Routes>
        <Route path='/' element={authUser ? <Layout /> : null}>
        <Route path='/' element={authUser ? <Home /> : <Navigate to='/login'/>} />
        <Route path='/signup' element={ authUser? <Navigate to='/'/> : <Signup />} />
        <Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
        <Route path='/uploadVideo' element={!authUser ? < Navigate to='/login'/> : <VideoUpload />}/>
        <Route path='/videoDisplay' element={<VideoDisplay/>}/>
        </Route>
        
      </Routes>
      <Toaster />
     </div>
    </>
  )
}

export default App
