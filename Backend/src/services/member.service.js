import { MemberModel } from "../models/member.model.js";

export const createMember = async ({
    firstName,
    lastName,
    email,
    password,
    phone,
    ProfileImage,
    gender,
    address,
    emergencyContact,
    membershipType,
    startDate,
    endDate
}) => {
    if (
        !firstName ||
        !lastName ||
        !email ||
        !password ||
        !phone ||

        !gender ||  // corrected to !gender
        !address ||
        !emergencyContact ||
        !membershipType ||
        !startDate
    ) {
        throw new Error('All fields are required');
    }

    
    const member = await MemberModel.create({
        firstName,
        lastName,
        email,
        password,
        phone,
        ProfileImage,
        gender,
        address,
        emergencyContact,
        membershipType,
        startDate,
        endDate,
    });

    return member;
};

