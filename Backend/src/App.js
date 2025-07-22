import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";
import { memberRouter } from "./routes/member.route.js";

const app = express()

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.get("/", (req, res) => {
    res.send("Welcome to the Gym Management System API");
});

app.use('/member', memberRouter)


export {app};