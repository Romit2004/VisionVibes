import {Router} from "express"
import {verifyJWT} from "../middlewares/auth.middleware.js"
import { publishVideo } from "../controllers/video.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { getAllVideos } from "../controllers/video.controller.js";


const router = Router();

router.route("/publish").post(
    verifyJWT,
    upload.fields([
        {
            name : "videoFile",
            maxCount : 1,
        },
        {
            name: "thumbnail",
            maxCount : 1
        }
    ]),
    publishVideo
)

router.get("/",getAllVideos)

export default router