import mongoose from "mongoose";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const memberSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
     lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: [true,'email is required'],
      unique: true,
      lowercase: true,
      trim: true,
    },
     password:{
        type:String,
        required:[true,'password is required']
    },
     phone: {
      type: String,
      required: true,
      unique: true,
    },
    ProfileImage: {
      type: String,
      default: "../uploads/default.jpg",
    },
   
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      required: true,
    },
   
    address: {
      type: String,
      required: true
    },
    emergencyContact: { 
        name: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: true,
      },
    },

    membershipType: {
      type: String,
      enum: ["Monthly", "Quarterly","Half-Yearly", "Yearly"],
      required: true,
    },
    startDate: {
      type: Date,
      default: Date.now,
    },
    endDate: {
      type: Date,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

memberSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({_id:this._id},process.env.JWT_SECRET,{expiresIn:'24h'});
    return token;
}

memberSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password,this.password);
}

memberSchema.statics.hashpassword = async function (password) {
    return await bcrypt.hash(password, 10);
};


export const MemberModel = mongoose.model("Member", memberSchema);
