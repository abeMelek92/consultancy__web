// components/Footer.jsx
"use client";

import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa"; // Icons for social media

const Footer = () => {
  return (
    <footer className="bg-green-100 mt-16 text-black py-8">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between mb-6">
          {/* Company Info Section */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-semibold">DEBTHS Global</h3>
            <p className="mt-2 text-lg">Addis Ababa, Ethiopia</p>
            <p className="text-lg">+251 (134) 567-890</p>
            <p className="text-lg">
              <a href="mailto:info@company.com" className="text-green-500">
                info@company.com
              </a>
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="mb-6 md:mb-0">
            <h4 className="text-xl font-semibold">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="/" className="text-lg hover:text-green-500">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-lg hover:text-green-500">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="text-lg hover:text-green-500">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="text-lg hover:text-green-500">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h4 className="text-xl font-semibold">Follow Us</h4>
            <div className="flex mt-4 space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-green-500"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-green-500"
              >
                <FaTwitter />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-green-500"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-green-500"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 pt-4">
          <p className="text-center text-lg">
            &copy; {new Date().getFullYear()} Debths Global. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
