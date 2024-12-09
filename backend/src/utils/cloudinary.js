import { v2 as cloudinary } from "cloudinary";
import fs from "fs"

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET, // Click 'View API Keys' above to copy your API secret
});
// const uploadResult = await cloudinary.uploader
//        .upload(
//            'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg', {
//                public_id: 'shoes',
//            }
//        )
//        .catch((error) => {
//            console.log(error);
//        });

       const uploadOnCloudinary = async (localFilepath) => {
        try {
            if(!localFilepath) return null;
        const response = await cloudinary.uploader.upload(localFilepath,{
         resource_type : "auto"   
        })
        console.log("File is uploaded",response.url)
        fs.unlinkSync(localFilepath)
        return response;
        } catch (error) {
           fs.unlinkSync(localFilepath) //remove the locally saved file
           return null;
        }
        
       }
      
      
export {uploadOnCloudinary}