import React, { useState } from "react";

const initialData = {
  firstName: "Roland",
  lastName: "Donald",
  email: "rolandDonald@mail.com",
  phone: "(405) 555-0128",
  gender: "Male",
  address: "3605 Parker Rd.",
  dob: "1995-02-01",
  location: "Atlanta, USA",
  postalCode: "30301",
  profileImage: "https://static.vecteezy.com/system/resources/previews/036/280/650/non_2x/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg",
};

const Profile = () => {
  const [formData, setFormData] = useState(initialData);
  const [profileImage, setProfileImage] = useState(initialData.profileImage);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imgURL = URL.createObjectURL(file);
      setProfileImage(imgURL);
      // Optionally send `file` to server via FormData
    }
  };

  const handleDiscard = () => {
    setFormData(initialData);
    setProfileImage(initialData.profileImage);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Profile:", formData);
    alert("Changes saved!");
    // Submit logic: send to backend via API call
  };

  return (
    <div className="max-w-5xl mx-auto p-6 flex space-x-10">
      {/* Left Side Panel */}
      <div className="w-1/4 bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center">
        <div className="relative">
          <img
            src={profileImage}
            alt="Profile"
            className="w-28 h-28 rounded-full border border-gray-300"
          />
          <label className="absolute bottom-0 right-0 bg-orange-500 p-1 rounded-full cursor-pointer">
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
        </div>
        <h2 className="text-lg font-semibold mt-2">{formData.firstName} {formData.lastName}</h2>
        <p className="text-sm text-gray-500">Cashier</p>

        <nav className="mt-6 w-full space-y-3 text-left">
          <button className="w-full flex items-center gap-2 p-2 rounded-md text-orange-600 bg-orange-100 font-medium">
            <span>📝</span> Personal Information
          </button>
          <button className="w-full flex items-center gap-2 p-2 rounded-md text-gray-700 hover:bg-gray-100">
            <span>🔒</span> Login & Password
          </button>
          <button className="w-full flex items-center gap-2 p-2 rounded-md text-gray-700 hover:bg-gray-100">
            <span>🚪</span> Log Out
          </button>
        </nav>
      </div>

      {/* Right Side Form */}
      <form className="w-3/4 bg-white rounded-lg shadow-md p-6" onSubmit={handleSubmit}>
        <h3 className="text-xl font-semibold mb-4">Personal Information</h3>

        {/* Gender */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">Gender</label>
          <div className="flex items-center gap-6">
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === "Male"}
                onChange={handleChange}
                className="mr-2"
              />
              Male
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === "Female"}
                onChange={handleChange}
                className="mr-2"
              />
              Female
            </label>
          </div>
        </div>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            className="p-3 border border-gray-300 rounded-md w-full"
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            className="p-3 border border-gray-300 rounded-md w-full"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="p-3 border border-gray-300 rounded-md w-full"
          />
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
            className="p-3 border border-gray-300 rounded-md w-full"
          />

          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="p-3 border border-gray-300 rounded-md w-full"
          />
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            placeholder="Date of Birth"
            className="p-3 border border-gray-300 rounded-md w-full"
          />

          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Location"
            className="p-3 border border-gray-300 rounded-md w-full"
          />
          <input
            type="text"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            placeholder="Postal Code"
            className="p-3 border border-gray-300 rounded-md w-full"
          />
        </div>

        {/* Buttons */}
        <div className="mt-6 flex justify-end gap-4">
          <button
            type="button"
            onClick={handleDiscard}
            className="px-6 py-2 border border-orange-500 text-orange-500 rounded-md hover:bg-orange-50"
          >
            Discard Changes
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
