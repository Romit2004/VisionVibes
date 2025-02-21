import {Router} from 'express'
import { addComment, getAllComments } from '../controllers/comment.controller.js'
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/:videoId").get(getAllComments).post(verifyJWT,addComment)

export default router;