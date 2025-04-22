import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="h-[200px] flex flex-col justify-center items-center text-lightn">
      <Image
        unoptimized
        src="\images\logo.png"
        alt="logo"
        height={1000}
        width={1000}
        className="w-[200] h-auto object-contain"
      />
      <p>© 2025. All rights reserved by Parv infotech.</p>
    </footer>
  );
};

export default Footer;
