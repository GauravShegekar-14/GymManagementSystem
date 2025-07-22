// src/pages/auth/Register.jsx
import React, { useState } from "react";
import { Link,useNavigate  } from "react-router-dom";
import { registerMember } from "../../services/authService";


const Register = () => {
 const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password:"",
    phone: "",
    // dob: "",
    gender: "",
    address: "",
    emergencyContact: {
      name: "",
      phone: "",
    },
    membershipType: "",
    startDate: "",
  });

const handleChange = (e) => {
  const { name, value } = e.target;

  // Handle nested emergencyContact updates
  if (name === "emergencyContactName" || name === "emergencyContactPhone") {
    setForm((prevForm) => ({
      ...prevForm,
      emergencyContact: {
        ...prevForm.emergencyContact,
        [name === "emergencyContactName" ? "name" : "phone"]: value,
      },
    }));
  } else {
    // Handle other non-nested fields
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  }
};

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Form Data:", form);
      const data = await registerMember(form);
      alert("Registration successful!");
      navigate("/login");
    } catch (error) {
      console.error("Registration failed:", error.response?.data || error.message);
      alert("Something went wrong during registration.");
    }
  };


  return (
   <div className="min-h-screen flex justify-center items-center bg-gray-100 px-4 py-8">
  <form
    onSubmit={handleSubmit}
    className="bg-white w-full max-w-3xl p-6 sm:p-8 rounded-lg shadow-lg"
  >
    <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-800">
      Member Registration
    </h2>

    {/* Personal Information */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
      <input
        type="text"
        name="firstName"
        placeholder="First Name *"
        value={form.firstName}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 p-3 rounded-md"
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name *"
        value={form.lastName}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 p-3 rounded-md"
      />
      <input
        type="email"
        name="email"
        placeholder="Email *"
        value={form.email}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 p-3 rounded-md"
      />
       <input
        type="password"
        name="password"
        placeholder="password *"
        value={form.password}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 p-3 rounded-md"
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone Number *"
        value={form.phone}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 p-3 rounded-md"
      />
    <div className="relative">
  {form.dob === '' && (
    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
     start date *
    </span>
  )}
  <input
    type="date"
    name="startDate"
    value={form.startDate}
    onChange={handleChange}
    required
    className={`w-full border border-gray-300 p-3 rounded-md ${
      form.dob === '' ? 'text-transparent' : 'text-black'
    }`}
  />
</div>
     
    </div>

    {/* Address */}
    <div className="mb-6">
      <textarea
        name="address"
        placeholder="Address *"
        value={form.address}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 p-3 rounded-md"
        rows={3}
      ></textarea>
    </div>

    {/* Emergency Contact */}
    <h3 className="text-lg font-semibold mb-3 text-gray-700">Emergency Contact</h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
  <input
    type="text"
    name="emergencyContactName"
    placeholder="Contact Name *"
    value={form.emergencyContact.name}
    onChange={handleChange}
    required
    className="w-full border border-gray-300 p-3 rounded-md"
  />
  <input
    type="tel"
    name="emergencyContactPhone"
    placeholder="Contact Phone *"
    value={form.emergencyContact.phone}
    onChange={handleChange}
    required
    className="w-full border border-gray-300 p-3 rounded-md"
  />
</div>


    {/* Membership Type */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
      <select
        name="membershipType"
        value={form.membershipType}
        onChange={handleChange}
        required
        className="w-{50%} border border-gray-300 p-3 rounded-md"
      >
        <option value="">Select Membership Type *</option>
        <option value="Monthly">Monthly</option>
        <option value="Quarterly">Quarterly</option>
        <option value="Half-Yearly">Half-Yearly</option>
        <option value="Yearly">Yearly</option>
      </select>
       <select
        name="gender"
        value={form.gender}
        onChange={handleChange}
        required
        className="w-{50%} border border-gray-300 p-3 rounded-md"
      >
        <option value="">Select Gender *</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
    </div>

    {/* Submit Button */}
    <button
      type="submit"
      className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold text-lg hover:bg-blue-700 transition"
    >
      Register
    </button>
     <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
                Login here
             </Link>
        </p>
  </form>
</div>

  );
};

export default Register;