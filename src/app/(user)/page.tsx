import Contact from "@/components/app/home/contact-section/Contact";
import Features from "@/components/app/home/features-section/Features";
import Hero from "@/components/app/home/hero-section/Hero";
import MySkils from "@/components/app/home/my-skills-section/MySkills";
import Portfolio from "@/components/app/home/portfolio-section/Portfolio";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-36  ">
      <Hero />
      <Features />
      <Portfolio />
      <MySkils />
      <Contact />
    </div>
  );
}
