import React, { useEffect, useState } from 'react'
import { useGetAllVideos } from '../../hooks/useGetAllVideos'
import VideoContainer from './VideoContainer';
import { Link } from 'react-router';

const Videos = () => {
    const [allVideos,setAllVideos] = useState([])
    const {loading,videos,getAllVideos} = useGetAllVideos();
    useEffect(()=>{
      getAllVideos();

    },[])
    console.log(videos)
    if(loading){
      return "loading"
    }

    

    
  return (
    <div className='flex items-center justify-center flex-wrap gap-x-4 gap-y-4 md:pl-[100px] md:justify-normal'>
      {videos && videos.map((video,idx)=>(
        <Link
        to='/videoDisplay'
        state ={{videoFile : video.videoFile, title : video.title, description : video.description, uploadedAt : video.updatedAt, videoId : video._id}}
        > 
          {video.isPublished? 
        <VideoContainer key={idx} title={video.title} description={video.description} thumbnail={video.thumbnail}/>
      : <></>}
        
        </Link>
      ))}
      
    </div>
  )
}

export default Videos
