import React from "react";

const userData = {
  name: "Gaurav Shegekar",
  email: "gaurav@example.com",
  phone: "+91 9876543210",
  gender: "Male",
  age: 26,
  location: "Nagpur, India",
  profileImage:
    "https://static.vecteezy.com/system/resources/previews/036/280/650/non_2x/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg",
  about:
    "Enthusiastic developer passionate about building modern web and mobile apps using MERN stack, React Native, and more. 🚀",
};

const Profile = () => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center space-x-6">
          <img
            src={userData.profileImage}
            alt="Profile"
            className="w-24 h-24 rounded-full border border-gray-300"
          />
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">{userData.name}</h2>
            <p className="text-gray-600">{userData.email}</p>
            <p className="text-gray-600">{userData.phone}</p>
          </div>
        </div>

        <div className="mt-6 space-y-2">
          <p>
            <span className="font-semibold text-gray-700">Gender:</span> {userData.gender}
          </p>
          <p>
            <span className="font-semibold text-gray-700">Age:</span> {userData.age}
          </p>
          <p>
            <span className="font-semibold text-gray-700">Location:</span> {userData.location}
          </p>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">About Me</h3>
          <p className="text-gray-700">{userData.about}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
