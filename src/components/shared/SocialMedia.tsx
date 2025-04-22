"use client";
import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import Image from "next/image";
import React from "react";
import MyToolTip from "./shadcn/MyToolTip";

const socialMedia = [
  {
    name: "github",
    href: "https://github.com/YoussefElogail",
    icon: "/icons/github-icon-1.svg",
  },
  {
    name: "linkedIn",
    href: "https://www.linkedin.com/in/youssef-el-ogail/",
    icon: "/icons/linkedin-icon-2.svg",
  },
  {
    name: "watsapp",
    href: "https://api.whatsapp.com/qr/CH7HTKIL67ABF1",
    icon: "/icons/whatsapp-3.svg",
  },
];

const SocialMedia = () => {
  return (
    <div className="space-y-2 capitalize">
      <p>find with me</p>
      <div className="flex gap-1.5 items-center">
        {socialMedia.map(({ href, name, icon }) => (
          <MyToolTip key={name} tip={name} className="capitalize">
            <motion.a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary-black rounded-lg inline-block"
              whileHover={{
                y: [0, -3], // Moves up and down while hovering
                boxShadow: "var(--shadow-white)",
              }}
              initial={{
                y: 0,
              }}
              transition={{
                duration: 0.2, // Controls speed
                ease: "easeInOut",
                type: "tween",
              }}
            >
              <div className="bg-secondary-black rounded-lg p-2 inline-block w-16 h-16">
                <Image
                  src={icon}
                  height={1000}
                  width={1000}
                  alt={name}
                  className="w-full h-full object-contain"
                  unoptimized
                />
              </div>
            </motion.a>
          </MyToolTip>
        ))}
      </div>
    </div>
  );
};

export default SocialMedia;
