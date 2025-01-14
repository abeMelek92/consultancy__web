// components/ContactUs/ContactInformation.jsx
"use client";

const ContactInformation = () => (
  <div className="w-full max-w-md mx-auto p-8">
    <ul className="space-y-4 text-lg bg-lime-200 p-8 rounded-lg">
      <h3 className="text-2xl font-semibold mb-4">Our Contact Info</h3>

      <li>
        <strong>Phone:</strong> <a href="tel:+1234567890">+1 (234) 567-890</a>
      </li>
      <li>
        <strong>Email:</strong>{" "}
        <a href="mailto:info@company.com">info@company.com</a>
      </li>
      <li>
        <strong>Address:</strong> 1234 Street Name, City, State, 56789
      </li>
      <li>
        <strong>Business Hours:</strong> Monday - Friday, 9 AM - 6 PM
      </li>
    </ul>
  </div>
);

export default ContactInformation;
