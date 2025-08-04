import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";
import { memberRouter } from "./routes/member.route.js";
import path from 'path';
import { fileURLToPath } from 'url';
const app = express()

app.use(cors())

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.get("/", (req, res) => {
    res.send("Welcome to the Gym Management System API");
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/member', memberRouter)


export {app};