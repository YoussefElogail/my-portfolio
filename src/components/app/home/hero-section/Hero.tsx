import Skills from "@/components/shared/Skills";
import MotionElement from "@/components/shared/MotionElement";
import SocialMedia from "@/components/shared/SocialMedia";
import TypingEffect from "@/components/shared/TypingEffect";
import Image from "next/image";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
const skills = [
  {
    name: "JavaScript",
    icon: "/icons/javascript-r.svg",
  },
  {
    name: "TypeScript",
    icon: "/icons/typescript.svg",
  },
  {
    name: "React.js",
    icon: "/icons/react-2.svg",
  },
  {
    name: "Next.js",
    icon: "/icons/next-js.svg",
  },
];

const Hero = () => {
  return (
    <section className="section-container min-h-[calc(100vh-100px)] flex flex-col-reverse sm:flex-row gap-2 items-center text-lightn justify-between overflow-hidden">
      {/* Left Content */}
      <div className="flex flex-col gap-6">
        <div className="space-y-3">
          <p className="text-lg font-semibold">Welcome to my world</p>
          <h1 className="text-secondary font-bold text-3xl md:text-5xl leading-tight">
            Hi, I’m{" "}
            <span className="capitalize text-primary-color">
              Youssef Elogail
            </span>
            <br />
            <TypingEffect
              words={[
                "A Developer.",
                "A Professional Coder.",
                "A Tech Enthusiast.",
              ]}
            />
          </h1>
          <p className="text-opacity-90 leading-relaxed max-w-[700px]">
            I use animation as a third dimension to simplify experiences,
            guiding users through every interaction. I don’t just add motion for
            aesthetics but use it to enhance functionality and engagement.
          </p>
        </div>
        <SocialMedia />
        <Skills skills={skills} title="best skill on" />
      </div>

      {/* Right Image with Animation */}
      <MotionElement
        as="div"
        className=" flex justify-center"
        initial={{ y: 0 }}
        animate={{ y: [0, -20, 0] }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          type: "tween",
          repeat: Infinity,
        }}
      >
        <Image
          src="images/971.png"
          height={1000}
          width={1000}
          alt="Profile"
          unoptimized
        />
        {/* Floating Overlay Effect */}
      </MotionElement>
    </section>
  );
};

export default Hero;
