import { useState } from "react"
import toast from "react-hot-toast";

const useGetAllVideos = () =>{
    const [loading,setLoading] = useState(false);
    const [videos,setVideos] = useState([])
    const getAllVideos = async () =>{
        try {
            setLoading(true)
            const data = await fetch("/api/v1/video");
            const video = await data.json();
            if(!video){
                throw new Error(videos.error)
            }
            setVideos(video.data)
        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
    }
    
    return {loading,getAllVideos,videos}
}

export {useGetAllVideos}