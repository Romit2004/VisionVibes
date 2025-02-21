import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import Comment from '../../components/video/Comment'
import { useAddComment } from '../../hooks/useAddComment'
import { useGetAllComments } from '../../hooks/useGetAllComments'


const VideoDisplay = () => {
  const location = useLocation()
  const videoFile = location.state?.videoFile;
  const title = location.state?.title;
  const description = location.state?.description;
  const uploadedAt = location.state?.uploadedAt;
  const videoId = location.state?.videoId;
  console.log(uploadedAt)

  const isoDate = uploadedAt;
  const date = new Date(isoDate);
  const [clicked,setClicked] = useState(false)
  const [comment,setComment] = useState("")
  const {loading,addComment} = useAddComment();
  const {comments,getAllComments} = useGetAllComments(); 

  // Format the date and time in Indian format
  const options = { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true };
  const formattedDateTime = date.toLocaleString("en-IN", options);

  console.log(formattedDateTime); 

  useEffect(()=>{
    getAllComments({videoId})
    console.log(comments)
  },[comments])



  const handleComment = async () => {
    console.log(comment)
    setClicked(false)
    await addComment({text : comment,videoId})
  }


  // console.log(description)
  // console.log(videoId)
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
          <div className="divider divider-error"></div>

          <div>
            <span className='text-red-500'>
              Uploaded At :
            </span>
            {` ${formattedDateTime}`}
          </div>

        </div>
        <div className="divider divider-error"></div>
        <div className='mt-3 flex-col'>
      
        <div className='mt-2 mb-3'>
        <span className='text-red-500'>
            Comments
          </span>
        </div>
        <button className="btn btn-outline btn-error flex m-auto mb-4" onClick={()=>setClicked((prev)=>!prev)}>Add Comment</button>

        {clicked ? 
        <div>
          <input type="text" placeholder="Type here" className="input w-full max-w-xs border-red-500 focus:border-red-700 m-auto mb-3" onChange={(e)=>setComment(e.target.value)} />
          <button className="btn btn-error ml-2" onClick={handleComment}>Add</button>
        </div>
        
       : null}
       {comments && comments.map((comment,idx)=>(
        <Comment comment={comment.content} avatar={comment.owner.avatar} owner={comment.owner.username}/>
       ))}
          
        </div>


      </div>

    </div>

  )
}

export default VideoDisplay
