import { MemberModel } from "../models/member.model.js";
import { createMember } from "../services/member.service.js";
import { validationResult } from "express-validator";
import { BlacklistToken } from "../models/blacklist.model.js";
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
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

    gender,
    address,
    emergencyContact,
    membershipType,
    startDate
  } = req.body;

  const isMemberAlreadyExist = await MemberModel.findOne({ email });
  if (isMemberAlreadyExist) {
    return res.status(400).json({ message: 'user already exist' })
  }

  const hashedPassword = await MemberModel.hashpassword(password);

  const member = await createMember({
    firstName,
    lastName,
    email,
    password: hashedPassword,
    phone,

    gender,
    address,
    emergencyContact,
    membershipType,
    startDate
  });

  const token = member.generateAuthToken();

  res.status(201).json({ token, member });

}

const loginMember = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  const { email, password } = req.body;

  const member = await MemberModel.findOne({ email }).select('+password');


  if (!member) {
    return res.status(401).json({ message: 'Invalid emai or password' });
  }

  const isMatch = await member.comparePassword(password);

  if (!isMatch) {
    return res.status(401).json({ message: 'Invalid emai or password' })
  }

  const token = member.generateAuthToken();
  res.cookie('token', token)

  res.status(200).json({ token, member })
}



const getMemberProfile = async (req, res, next) => {
  try {
    const member = req.member;
    // Default image path
    let profileImagePath = member.ProfileImage ||  '../uploads/default.jpg';

    // If custom profile image is available, update the path
    // Check if custom image exists
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const expectedPath = path.join(__dirname, '..', 'uploads', member.email, 'profile.jpg');

    if (fs.existsSync(expectedPath)) {
      profileImagePath = `uploads/${member.email}/profile.jpg`;
    }

    console.log(`Profile image path: ${profileImagePath}`);
    const fullImageUrl = `${req.protocol}://${req.get('host')}/${profileImagePath}`;


     console.log(`Full image URL: ${fullImageUrl}`);
    res.status(200).json({
      ...member.toObject(),
      profileImageUrl: fullImageUrl,
    });

  } catch (error) {
    next(error);
  }
};




const logoutMember = async (req, res, next) => {
  res.clearCookie('token');
  const token = req.cookies.token || req.headers.authorization.split(' ')[[1]];

  await BlacklistToken.create({ token })

  res.status(200).json({ message: 'logged out' })
}

const updateMemberProfile = async (req, res) => {
  try {
    const memberId = req.params.id;
    const updatedData = req.body;

    // Check if email is being updated
    if (updatedData.email) {
      const existingMember = await MemberModel.findOne({ email: updatedData.email });

      // If another member already has this email and it's not the same member
      if (existingMember && existingMember._id.toString() !== memberId) {
        return res.status(400).json({ message: 'Email already in use' });
      }
    }

    if (req.file) {
      const profileImagePath = path.join('../uploads', req.member.email, req.file.filename);

      updatedData.profileImage = profileImagePath.replace(/\\/g, '/'); // For Windows paths // for Windows compatibility
      
    }
    
    const updatedMember = await MemberModel.findByIdAndUpdate(memberId, updatedData, {
      new: true,
      runValidators: true,
    });

    if (!updatedMember) {
      return res.status(404).json({ message: 'Member not found' });
    }

    res.status(200).json({ message: 'Profile updated successfully', member: updatedMember });
  } catch (error) {
    console.error('Update Error:', error);
    res.status(500).json({ message: 'Server error while updating profile' });
  }
};



export { registerMember, loginMember, getMemberProfile, logoutMember, updateMemberProfile };
