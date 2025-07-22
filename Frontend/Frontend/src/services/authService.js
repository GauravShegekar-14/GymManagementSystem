import { Auth_API } from "../config/member_API";

 const registerMember = async (formData) => {
  const res = await Auth_API.post("/register", formData);
  localStorage.setItem("token", res.data.token);
  return res.data;
};

export  {registerMember };