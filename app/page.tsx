import Image from "next/image";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Loandeal } from "./components/Loandeal";
import { Financing } from "./components/Financing";
import { Dms } from "./components/Dms";
import { WhyOneLot } from "./components/WhyOneLot";
import { Testimonials } from "./components/Testimonials";
import { Connection } from "./components/Connection";
import { Faqs } from "./components/Faqs";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Loandeal />
      <Financing />
      <Dms />
      <WhyOneLot />
      <Testimonials />
      <Connection />
      <Faqs />
      <Contact />
      <Footer />
    </>
  );
}
