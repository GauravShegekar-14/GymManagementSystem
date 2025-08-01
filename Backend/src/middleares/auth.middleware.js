import jwt from 'jsonwebtoken';
import { MemberModel } from '../models/member.model.js';
import { BlacklistToken } from "../models/blacklist.model.js";

const authMember = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Token not provided' });
  }

  try {
    const isBlacklisted = await BlacklistToken.findOne({ token });

    if (isBlacklisted) {
      return res.status(401).json({ message: 'Unauthorized - Token Blacklisted' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const member = await MemberModel.findById(decoded._id);

    if (!member) {
      return res.status(401).json({ message: 'Unauthorized - Member not found' });
    }

    req.member = member;

    next();
  } catch (err) {
    return res.status(401).json({ message: 'Unauthorized - Invalid Token' });
  }
};

export { authMember };
