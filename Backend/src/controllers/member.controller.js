import { MemberModel } from "../models/member.model.js";
import {createMember} from "../services/member.service.js";
import {validationResult} from "express-validator";

const registerMember = async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      firstName,
      lastName,
      email,
      password,
      phone,
      dob,
      gender,
      address,
      emergencyContact,
      membershipType,
      startDate
    } = req.body;

     const isMemberAlreadyExist = await MemberModel.findOne({email});
   if(isMemberAlreadyExist){
     return res.status(400).json({message:'user already exist'})
   }

   const hashedPassword = await MemberModel.hashpassword(password);

   const member = await createMember({
        firstName,
        lastName,
        email,
        password: hashedPassword,
        phone,
        dob,
        gender,
        address,
        emergencyContact,
        membershipType,
        startDate
    });

    const token = member.generateAuthToken();

     res.status(201).json({token,member});

}

const loginMember = async(req,res,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      return res.status(400).json({errors: errors.array()})
    }

    const {email,password} = req.body;

    const member = await MemberModel.findOne({email}).select('+password');


    if(!member){
      return res.status(401).json({message: 'Invalid emai or password'});
    }

    const isMatch  = await member.comparePassword(password);

    if(!isMatch){
      return res.status(401).json({message:'Invalid emai or password'})
    }

    const token = member.generateAuthToken();
    res.cookie('token',token)

    res.status(200).json({token,member})
}

const getMemberProfile = async(req,res,next)=>{
   res.status(200).json(req.member)
}


const logoutMember = async(req,res,next) =>{
   res.clearCookie('token');
   const token = req.cookies.token || req.headers.authorization.split(' ')[[1]];

   await BlacklistToken.create({token})

   res.status(200).json({message:'logged out'})
}


export { registerMember,loginMember,getMemberProfile,logoutMember };
