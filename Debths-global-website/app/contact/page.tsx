// pages/contact.js

import ContactForm from "@/components/ContactUs/ContactForm";
import ContactInformation from "@/components/ContactUs/ContactInformation";
import GoogleMap from "@/components/ContactUs/GoogleMap";
import Heading from "@/components/ContactUs/Heading";

const ContactUsPage = () => {
  return (
    <section className="mx-auto h-full mt-16 px-4 pt-16">
      <div className="flex w-1/2 mx-auto p-8 lg:flex-col">
        <ContactForm />
        <ContactInformation />
      </div>
      <GoogleMap />
    </section>
  );
};

export default ContactUsPage;
