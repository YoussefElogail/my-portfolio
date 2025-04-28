import MotionElement from "@/components/shared/MotionElement";
import SectionTitle from "@/components/shared/SectionTitle";
import ContactForm from "@/components/app/home/contact-section/ContactForm";
import React from "react";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <MotionElement
      as="section"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="section-container "
      id="contact"
    >
      <SectionTitle title="Contact" subtitle="Contact With Me" />
      <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-4 gap-8">
        <ContactInfo />
        <ContactForm />
      </div>
    </MotionElement>
  );
};

export default Contact;
