// components/ContactUs/ContactForm.jsx
"use client";

import { useState } from "react";
import { FaUser, FaEnvelope, FaPhoneAlt } from "react-icons/fa"; // Icons for the input fields
import { motion } from "framer-motion";
import Heading from "@/components/ContactUs/Heading";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitSuccess, setSubmitSuccess] = useState<boolean | null>(null);

  // Handling input field changes
  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    // Simulate form submission
    if (formData.name && formData.email && formData.message) {
      setSubmitSuccess(true);
    } else {
      setSubmitSuccess(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="w-full max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Heading />

      <div className="mb-4 relative">
        <label className="block text-lg mb-2">Name</label>
        <div className="flex items-center bg-green-100 rounded-md">
          <FaUser className="mx-3 text-gray-500" />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-4 focus:outline-none focus:ring-2 bg-gray-200 rounded-lg focus:ring-green-600 placeholder-black"
            placeholder="Your Name"
          />
        </div>
      </div>
      <div className="mb-4 relative">
        <label className="block text-lg mb-2">Email</label>
        <div className="flex items-center bg-green-100 rounded-md">
          <FaEnvelope className="mx-3 text-gray-500" />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-4 focus:outline-none focus:ring-2 bg-gray-200 rounded-lg focus:ring-green-600 placeholder-black"
            placeholder="Your Email"
          />
        </div>
      </div>
      <div className="mb-4 relative">
        <label className="block text-lg mb-2">Message</label>
        <div className="flex items-center bg-green-100 rounded-md">
          <FaPhoneAlt className="mx-3 text-gray-500" />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-4 focus:outline-none focus:ring-2 bg-gray-200 rounded-lg focus:ring-green-600 placeholder-black"
            placeholder="Your Message"
          ></textarea>
        </div>
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg"
      >
        Send Message
      </button>

      {submitSuccess !== null && (
        <div
          className={`mt-4 text-center text-lg ${
            submitSuccess ? "text-green-600" : "text-red-600"
          }`}
        >
          {submitSuccess
            ? "Message Sent Successfully!"
            : "Please fill in all fields."}
        </div>
      )}
    </motion.form>
  );
};

export default ContactForm;
