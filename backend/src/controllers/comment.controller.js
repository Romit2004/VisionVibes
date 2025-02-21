import { Video } from "../models/video.model.js";
import { Comment } from "../models/comment.model.js";


const addComment = async (req,res) => {
    try {
        const {videoId} = req.params;
        const {text} = req.body;
        const userId = req.user._id;
        console.log(videoId);
        console.log(userId);

        if(!text){
            return res.status(400).json({success: false, message: "Comment text is required"});
        }

        const video = await Video.findById(videoId);
        if(!video){
            return res.status(404).json({success : false, message: "Video not found"})
        }
        const comment = await Comment.create({content: text, video: videoId, owner:userId})
        console.log(comment)
        if(!comment){
           return res.status(400).json({success : false, message: "Error while creating comment"})
        }
        return res.status(200).json({success: true, data : comment})
        
    } catch (error) {
        return res.status(400).json({success : false, message: "Error while adding comment"})
    }
}

const getAllComments = async (req,res) => {
 try {
       const {videoId} = req.params;
       const comments = await Comment.find({ video: videoId })
       .populate("owner", "username avatar", null, { strictPopulate: false })
       .sort({ createdAt: -1 });
   
       if(!comments){
        return res.status(400).json({
            success : false,
            message : "error in finding comments"
        })
       }

       return res.status(200).json({
        success : true,
        data : comments,
       })
 } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
 }
}

export {addComment,getAllComments}