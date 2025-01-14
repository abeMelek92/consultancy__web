// components/ContactUs/GoogleMap.jsx
"use client";

const GoogleMap = () => (
  <div className="mt-16">
    <h3 className="text-2xl font-semibold mb-4 text-center">Find Us</h3>
    <div className="flex justify-center">
      <iframe
        title="Company Location"
        src="https://www.google.com/maps/embed?pb=..."
        width="600"
        height="450"
        className="border-0"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  </div>
);

export default GoogleMap;
