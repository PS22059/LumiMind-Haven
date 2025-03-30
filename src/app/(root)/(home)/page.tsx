"use client";

import Banner from "@/components/banner";
import Call from "@/components/Call";
import Footer from "@/components/Footer";
import About from "@/components/about";
import HowItWorks from "@/components/HowItWord";
import Counselors from "@/components/Counselors";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
export default function Home() {
  return (
    <div>
      <Banner />
      <About />
      <HowItWorks />
      <Counselors />
      <Call />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}
