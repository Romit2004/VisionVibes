import { useState } from "react"
import toast from "react-hot-toast"


const useGetAllComments = () => {
    const [loading,setLoading] = useState(false)
    const [comments,setComments] = useState([])
    const getAllComments = async ({videoId}) => {
        console.log(videoId)
        try {
            setLoading(true)
            const data = await fetch(`/api/v1/comment/${videoId}`)
            if(!data){
                throw new Error(data.error)
            }
             const allComments = await data.json()
             console.log(allComments)
            setComments(allComments.data)
            console.log(comments)

        } catch (error) {
            toast.error(error.message)
        }finally{
            setLoading(false)
        }
    }
    return {loading,comments,getAllComments}
}

export {useGetAllComments}