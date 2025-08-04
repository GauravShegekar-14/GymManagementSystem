import React, { useState, useEffect } from "react";
import { getMemberProfile, updateMemberProfile } from "../services/authService";
import Navbar from "../components/Navbar";

const initialData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  gender: "",
  address: "",
  emergencyContact: {
    name: "",
    phone: ""
  },
  membershipType: "",
  startDate: "",
  profileImageUrl: "",
  profileImage:""
};

const Profile = () => {
  const [formData, setFormData] = useState(initialData);
  const [profileImage, setProfileImage] = useState(initialData.profileImageUrl);
  const [isEditing, setIsEditing] = useState(false);
  const [imageFile, setImageFile] = useState(null);


  const handleGetData = async () => {
    try {
      const data = await getMemberProfile(); // API call
      setFormData(data);
      setProfileImage(data.profileImageUrl);
       console.log(data.profileImageUrl)
      console.log("Profile fetched:", data);
    } catch (err) {
      console.error("Error fetching profile:", err);
      alert("Failed to fetch profile. Please try again.");
    }
  };

  useEffect(() => {
    handleGetData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes("emergencyContact.")) {
      const key = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        emergencyContact: {
          ...prev.emergencyContact,
          [key]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

 const handleImageChange = (e) => {
  const file = e.target.files[0];
  if (file) {
    setImageFile(file); // ✅ store for upload
    const imgURL = URL.createObjectURL(file);
    setProfileImage(imgURL);
  }
};

  const handleDiscard = () => {
    setFormData(initialData);
    setProfileImage(initialData.profileImage);
    setIsEditing(false);
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const form = new FormData();

    // Append text fields
    for (const key in formData) {
      if (key === "emergencyContact") {
        form.append("emergencyContact.name", formData.emergencyContact.name);
        form.append("emergencyContact.phone", formData.emergencyContact.phone);
      } else {
        form.append(key, formData[key]);
      }
    }

    // Append image if changed
   
     if (imageFile) {
      form.append("profileImage", imageFile); // ✅ must match backend `req.file` field
    }
  

    // Send to service
    await updateMemberProfile(form, formData._id); // Assuming `_id` is part of formData

    alert("Changes saved!");
    console.log("Profile updated:", formData);
    setIsEditing(false);
  } catch (error) {
    console.error("Error updating profile:", error);
    alert("Failed to update profile. Please try again.");
  }
};


  return (
    <>
    <Navbar />
   <div className="max-w-5xl mx-auto p-4 md:p-6 flex flex-col lg:flex-row gap-6">
  {/* Left Side Panel */}
  <div className="w-full lg:w-1/4 bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
    <div className="relative">
      <img
        src={profileImage}
        alt="Profile"
        className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover border-2 border-gray-200"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "/uploads/default.jpg";
        }}
      />
      {isEditing && (
        <label className="absolute bottom-2 right-2 bg-orange-500 p-2 rounded-full cursor-pointer hover:bg-orange-600 shadow-lg">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M4 13V16H7L16 7L13 4L4 13Z" />
          </svg>
        </label>
      )}
    </div>

    <h2 className="text-lg md:text-xl font-semibold mt-4">{formData.firstName} {formData.lastName}</h2>
   

    <nav className="mt-6 w-full space-y-3 text-left">
      <button className="w-full flex items-center gap-3 p-3 rounded-lg text-orange-600 bg-orange-100 font-medium hover:bg-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-400">
        <span>📝</span> Personal Information
      </button>
      <button className="w-full flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300">
        <span>🔒</span> Login & Password
      </button>
      <button className="w-full flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-300">
        <span>🚪</span> Log Out
      </button>
    </nav>
  </div>

  {/* Right Side Form */}
  <form className="w-full lg:w-3/4 bg-white rounded-lg shadow-md p-4 md:p-6" onSubmit={handleSubmit}>
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-3">
      <h3 className="text-lg md:text-xl font-semibold">Personal Information</h3>
      {!isEditing && (
        <button
          type="button"
          onClick={() => setIsEditing(true)}
          className="text-sm text-white bg-blue-500 px-3 py-1 rounded hover:bg-blue-600"
        >
          Edit
        </button>
      )}
    </div>

    {/* Gender */}
    <div className="mb-4">
      <label className="block mb-1 font-medium">Gender</label>
      <div className="flex flex-wrap gap-4">
        {['Male', 'Female', 'Other'].map((g) => (
          <label key={g} className="flex items-center">
            <input
              type="radio"
              name="gender"
              value={g}
              checked={formData.gender === g}
              onChange={handleChange}
              disabled={!isEditing}
              className="mr-2"
            />
            {g}
          </label>
        ))}
      </div>
    </div>

    {/* Two Column Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" disabled={!isEditing} className={`p-3 border rounded-md w-full ${!isEditing ? '' : 'bg-gray-100'}`} />
      <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" disabled={!isEditing} className={`p-3 border rounded-md w-full ${!isEditing ? '' : 'bg-gray-100'}`} />
     
      <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" disabled={!isEditing} className={`p-3 border rounded-md w-full ${!isEditing ? '' : 'bg-gray-100'}`} />
      <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" disabled={!isEditing} className={`p-3 border rounded-md w-full ${!isEditing ? '' : 'bg-gray-100'}`} />
      <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} disabled={!isEditing} className={`p-3 border rounded-md w-full ${!isEditing ? '' : 'bg-gray-100'}`} />
     
      <select name="membershipType" value={formData.membershipType} onChange={handleChange} disabled={!isEditing} className={`p-3 border rounded-md w-full ${!isEditing ? '' : 'bg-gray-100'}`}>
        <option value="">Select Membership Type</option>
        {['Monthly', 'Quarterly', 'Half-Yearly', 'Yearly'].map((type) => (
          <option key={type} value={type}>{type}</option>
        ))}
      </select>
      <input type="text" name="emergencyContact.name" value={formData.emergencyContact.name} onChange={handleChange} placeholder="Emergency Contact Name" disabled={!isEditing} className={`p-3 border rounded-md w-full ${!isEditing ? '' : 'bg-gray-100'}`} />
      <input type="text" name="emergencyContact.phone" value={formData.emergencyContact.phone} onChange={handleChange} placeholder="Emergency Contact Phone" disabled={!isEditing} className={`p-3 border rounded-md w-full ${!isEditing ? '' : 'bg-gray-100'}`} />
    </div>

    {/* Buttons */}
    {isEditing && (
      <div className="mt-6 flex flex-col sm:flex-row justify-end gap-4">
        <button type="button" onClick={handleDiscard} className="px-6 py-2 border border-orange-500 text-orange-500 rounded-md hover:bg-orange-50">
          Discard Changes
        </button>
        <button type="submit" className="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600">
          Save Changes
        </button>
      </div>
    )}
  </form>
</div>

    </>
  );
};

export default Profile;
