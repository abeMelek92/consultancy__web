// pages/contact.js

import ContactForm from "@/components/ContactUs/ContactForm";
import ContactInformation from "@/components/ContactUs/ContactInformation";
import GoogleMap from "@/components/ContactUs/GoogleMap";
import Heading from "@/components/ContactUs/Heading";

const ContactUsPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <Heading />

      <div
        className="w-full h-full bg-cover bg-center flex p-8"
        style={{ backgroundImage: "url('/hero-3.jpg')" }}
      >
        <ContactForm />
        <ContactInformation />
      </div>
      <GoogleMap />
    </div>
  );
};

export default ContactUsPage;
