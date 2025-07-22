import express from 'express';
import { registerMember,loginMember,getMemberProfile,logoutMember } from '../controllers/member.controller.js';
import { body } from 'express-validator';
import { authMember } from '../middleares/auth.middleware.js';
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
    body('dob').isDate().withMessage('Valid date of birth is required'),
    body('gender')
      .isIn(['Male', 'Female', 'Other'])
      .withMessage('Gender must be Male, Female or Other'),
    body('address').optional().isString(),
    body('emergencyContact')
      .notEmpty()
      .withMessage('Emergency contact is required'),
    body('membershipType')
      .isIn(['Monthly', 'Quarterly', 'Yearly'])
      .withMessage('Membership type must be Monthly, Quarterly, or Yearly'),
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

export {memberRouter};
