import React from 'react'
import VideoContainer from '../../components/video/VideoContainer'
import { Link } from 'react-router'
import Videos from '../../components/video/Videos'

const Home = () => {
  return (
    <div>
      <div className='h-auto flex justify-end mb-5 flex-col'>
        <div className='mb-5 flex justify-end'>
        <Link to='/uploadVideo'> 
        <button className="btn btn-outline btn-error mr-4 ">Upload Video</button>
        </Link>
        </div>
        
        <Videos />

      
      </div>
      
      
    </div>
  )
}

export default Home
