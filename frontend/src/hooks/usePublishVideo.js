import { useState } from "react"
import { useAuthContext } from "../context/AuthContext"
import toast from "react-hot-toast"

const usePublishVideo = () => {
    const [loading,setLoading] = useState(false)
    const {authUser} = useAuthContext()
  
    const publish = async ({title,description,video,thumbnail}) => {
        const uploadVideo = new FormData()
        uploadVideo.append("title",title)
        uploadVideo.append("description",description)
        uploadVideo.append("videoFile",video)
        uploadVideo.append("thumbnail",thumbnail)
        uploadVideo.append("owner",authUser.data.user._id)
        uploadVideo.append("duration",300)
        console.log(authUser.data.user._id)



        try {
            setLoading(true);
            const res = await fetch("/api/v1/video/publish",{
                method : "POST",
                body : uploadVideo
            })
            const data = await res.json();
            console.log(data)
            if(!data){
                throw new Error(data.error)
            }

            toast.success("Video successfully uploaded")
            
            
        } catch (error) {
           toast.error(error.message) 
           console.log(error.message)
        }finally{
            setLoading(true)
        }
    }
    return {loading,publish}
}

export default usePublishVideo