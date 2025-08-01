import http from "http"
import dotenv from "dotenv"
import connectDB from "./DB/index.js"
import { app } from "./App.js"

dotenv.config(
  { path: "../.env" } // Ensure the path is correct for your environment
);

connectDB()


const server = http.createServer(app);


const startServer = async () => {
  try {
    await connectDB();
    server.listen(process.env.PORT || 8000, () => {
      console.log(`🚀 Server is running on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("❌ MongoDB connection failed!", error);
  }
};



startServer();




















/*
import express from "express"
const app = express()



( async () => {
    try {
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       app.on("error", (error)=>{
        console.log("ERROR",error);
        throw error
        
       })

       app.listen(process.env.PORT, () =>{
        console.log(`App is listening on port ${process.env.PORT}`);
        
       })
    } catch (error) {
        console.error("ERROR",error)
        throw err
    }
})()

*/