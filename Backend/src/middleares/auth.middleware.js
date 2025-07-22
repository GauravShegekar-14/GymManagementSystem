import jwt from 'jsonwebtoken';
import { MemberModel } from '../models/member.model.js';
import { BlacklistToken } from "../models/blacklist.model.js";

const authMember = async (req,res,next)=>{
   const token = req.cookies.token || req.headers.authorization?.split(' ')[[1]];

   const isBlacklisted = await BlacklistToken.findOne({token:token});

   if(isBlacklisted){
    return res.status(401).json({message:'Unauthorized'})
   }

   try {
     const decoded = jwt.verify(token,process.env.JWT_SECRET);
    //  console.log('Decoded token:', decoded);
     const member = await MemberModel.findById(decoded._id);
    //  if (!user) {
    //   console.log('User not found with ID:', decoded._id); // Log the user ID
    // }
     req.member = member;
    //  console.log('User:', user); // Add this line

     return next();

   } catch (err) {
    return res.status(401).json({message:'Unauthorized'})
   }
}


export { authMember };