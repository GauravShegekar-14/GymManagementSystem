import { Auth_API } from "../config/member_API";
import {jwtDecode} from "jwt-decode";
 const registerMember = async (formData) => {
  const res = await Auth_API.post("/register", formData);
  localStorage.setItem("token", res.data.token);
  return res.data;
};

const loginMember = async (formData) => {
  const res = await Auth_API.post("/login", formData);
  localStorage.setItem("token", res.data.token);
  return res.data;
};

const logoutMember = async () => {
  const res = await Auth_API.get("/logout");  
  localStorage.removeItem("token");
  return res.data;
}

const getMemberProfile = async () => {
  const token = localStorage.getItem('token'); // Make sure the token is stored in localStorage

  if (!token) {
    throw new Error("No token found in local storage");
  }

  const res = await Auth_API.get("/profile", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return res.data;
};

const updateMemberProfile = async (updatedData) => {
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("No token found in local storage");
  }

  const decoded = jwtDecode(token);
  const userId = decoded.id || decoded._id || decoded.userId;

  if (!userId) {
    throw new Error("User ID not found in token");
  }

  const res = await Auth_API.put(
    `/profile-update/${userId}`,
    updatedData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        // ❌ DO NOT manually set Content-Type here
      },
    }
  );

  return res.data;
};



export  {registerMember,loginMember,logoutMember,getMemberProfile,updateMemberProfile };