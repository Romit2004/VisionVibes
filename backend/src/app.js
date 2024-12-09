import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors"
import bodyParser from "body-parser";


const app = express()

app.on("error", (error)=>{
    console.log("Err :", error)
    throw error
})

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true

}))

app.use(express.json({limit:"10mb"}))
app.use(express.urlencoded({extended:"true", limit:"10mb"}))
app.use(express.static("public"))
app.use(cookieParser())
// app.use(bodyParser.json())

//routes

import userRouter from "./routes/user.routes.js"
import videRouter from "./routes/video.routes.js"

//routes declaration

app.use("/api/v1/users", userRouter)
app.use("/api/v1/video", videRouter)


export {app}