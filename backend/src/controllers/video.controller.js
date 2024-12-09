import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { Video } from "../models/video.model.js";
import { ApiError } from "../utils/ApiError.js";
// import { ApiError } from "../utils/ApiError";



const publishVideo = async (req,res) => {
    const {title,description} = req.body;
    const {videoFile,thumbnail} = req.files;
    // console.log(req.files.videoFile[0]);

    if(!videoFile || !thumbnail){
        return res.status(400).json({
            success : false,
            error : "Video file and thumbnail are required"
        });
    }
    // console.log(req.files?.videoFile[0].buffer);
    const videoLocalPath = videoFile[0].path;
    const thumbnailLocalPath = thumbnail[0].path;
    try {
        const video = await uploadOnCloudinary(videoLocalPath);
        const thumbNailImage = await uploadOnCloudinary(thumbnailLocalPath)
        console.log(video);
        console.log(thumbNailImage)

       const duration =  Math.floor(Math.random()*300); 
       const videoUrl = video.url;
       const thumbnailUrl = thumbNailImage.url;
       const newVideo = new Video({
        videoFile: videoUrl,
        thumbnail: thumbnailUrl,
        title,
        description,
        duration,
        owner: req.user_id
       })
       const videoData = await newVideo.save();

       return res.status(201).json({
         success: true,
         message: "Video uploaded successfully",
         data: videoData,
       });
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "Error uploading video",
            error: error.message,
          });
          
    }
};

const getAllVideos = async (req,res) => {
    try {
       const videos = await Video.find().sort({createdAt : -1}) ;
       if(!videos){
        throw new ApiError(400,"error on fetching videos")
       }
       res.status(200).json({
        success : true,
        message : "Videos fetched successfully",
        data : videos,
       })
    } catch (error) {
        console.error("Error fetching videos:", error);
        res.status(500).json({
            success : false,
            message : "error on fetching videos",
            error : error.message
        })
    }
}

export {publishVideo,getAllVideos}