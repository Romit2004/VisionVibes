import React from 'react'
import { useLocation } from 'react-router'

const VideoDisplay = () => {
    const location = useLocation()
    const videoFile = location.state?.videoFile;
    const title = location.state?.title; 
    const description = location.state?.description; 
    const uploadedAt = location.state?.uploadedAt;
    console.log(uploadedAt)
    
    const isoDate = uploadedAt;
const date = new Date(isoDate);

// Format the date and time in Indian format
const options = { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true };
const formattedDateTime = date.toLocaleString("en-IN", options);

console.log(formattedDateTime); // Output: "07-12-2024, 9:27 PM"


    console.log(description)
  return (
    <div className='flex justify-center items-center h-full w-full'>
<div className="flex flex-col rounded-md border-2 border-red-600 shadow-3xl box-border hover:shadow-4xl p-4 mb-5 overflow-auto">
  <video
    className="rounded-lg w-full sm:w-[600px] md:w-[700px] lg:w-[932px] h-auto aspect-video border-2 border-red-400"
    controls
    autoPlay
  >
    <source src={videoFile} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <h1 className="text-red-600 text-lg sm:text-xl md:text-2xl lg:text-3xl mt-4 mb-4">
    {title}
  </h1>
  {/* <h3>
    {description}
  </h3> */}
  <div className='text-lg'>
    <div>
  {description}

    </div>
  <div>
  <span className='text-red-500'>
        Uploaded At : 
    </span>
     {` ${formattedDateTime}`}
  </div>
    
  </div>

</div>

    </div>
    
  )
}

export default VideoDisplay
