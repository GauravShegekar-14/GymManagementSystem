import express from 'express';
import { registerMember,loginMember,getMemberProfile,logoutMember,updateMemberProfile } from '../controllers/member.controller.js';
import { body } from 'express-validator';
import { authMember } from '../middleares/auth.middleware.js';
import { upload } from '../middleares/upload.middleware.js';
const memberRouter = express.Router();

memberRouter.post(
  '/register',
  [
    body('firstName').notEmpty().withMessage('First name is required'),
    body('lastName').notEmpty().withMessage('Last name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('password')
      .isLength({ min: 6 })
      .withMessage('Password must be at least 6 characters long'),
    body('phone').notEmpty().withMessage('Phone number is required'),
    // body('dob').isDate().withMessage('Valid date of birth is required'),
    body('gender')
      .isIn(['Male', 'Female', 'Other'])
      .withMessage('Gender must be Male, Female or Other'),
    body('address').optional().isString(),
    body('emergencyContact')
      .notEmpty()
      .withMessage('Emergency contact is required'),
    body('membershipType')
      .isIn(['Monthly', 'Quarterly','Half-Yearly', 'Yearly'])
      .withMessage('Membership type must be Monthly, Quarterly, Half-Yearly, Yearly'),
    body('startDate')
      .optional()
      .isISO8601()
      .withMessage('Start date must be a valid date'),
  ],
  registerMember
);

memberRouter.post('/login',[
  body('email').isEmail().withMessage('invalid Email'),
  body('password').isLength({min:6}).withMessage('Invalid Passowrd')
],
loginMember
)


memberRouter.get('/profile',authMember,getMemberProfile)
memberRouter.get('/logout',authMember,logoutMember)


memberRouter.put(
  '/profile-update/:id',
  authMember,
  upload.single('profileImage'),
  [
    body('firstName')
      .optional()
      .notEmpty()
      .withMessage('First name cannot be empty'),

    body('lastName')
      .optional()
      .notEmpty()
      .withMessage('Last name cannot be empty'),

    body('email')
      .optional()
      .isEmail()
      .withMessage('Valid email is required'),

    body('phone')
      .optional()
      .notEmpty()
      .withMessage('Phone number cannot be empty'),

    body('gender')
      .optional()
      .isIn(['Male', 'Female', 'Other'])
      .withMessage('Gender must be Male, Female or Other'),

    body('address')
      .optional()
      .isString(),

    body('emergencyContact')
      .optional()
      .notEmpty()
      .withMessage('Emergency contact is required'),

    body('membershipType')
      .optional()
      .isIn(['Monthly', 'Quarterly', 'Half-Yearly', 'Yearly'])
      .withMessage('Membership type must be Monthly, Quarterly, Half-Yearly, or Yearly'),

    body('startDate')
      .optional()
      .isISO8601()
      .withMessage('Start date must be a valid date'),
  ],
  updateMemberProfile
);


export {memberRouter};
