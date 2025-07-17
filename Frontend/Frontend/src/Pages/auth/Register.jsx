// src/pages/auth/Register.jsx
import React, { useState } from "react";
import { registerUser } from "../../services/authService";
import { Link,useNavigate  } from "react-router-dom";


const Register = () => {
 const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    address: "",
    emergencyContactName: "",
    emergencyContactPhone: "",
    membershipType: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", form);
    alert("Registration form submitted!");
    navigate("/login");
    // You can call your registerUser API here
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
        type="tel"
        name="phone"
        placeholder="Phone Number *"
        value={form.phone}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 p-3 rounded-md"
      />
      <input
        type="date"
        name="dob"
        value={form.dob}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 p-3 rounded-md"
      />
      <select
        name="gender"
        value={form.gender}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 p-3 rounded-md"
      >
        <option value="">Select Gender *</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
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
        value={form.emergencyContactName}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 p-3 rounded-md"
      />
      <input
        type="tel"
        name="emergencyContactPhone"
        placeholder="Contact Phone *"
        value={form.emergencyContactPhone}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 p-3 rounded-md"
      />
    </div>

    {/* Membership Type */}
    <div className="mb-6">
      <select
        name="membershipType"
        value={form.membershipType}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 p-3 rounded-md"
      >
        <option value="">Select Membership Type *</option>
        <option value="Monthly">Monthly</option>
        <option value="Quarterly">Quarterly</option>
        <option value="Half-Yearly">Half-Yearly</option>
        <option value="Yearly">Yearly</option>
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