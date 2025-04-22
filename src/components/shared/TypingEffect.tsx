"use client"
import React from "react";
import { Typewriter } from "react-simple-typewriter";

const TypingEffect = ({words}:{words:string[]}) => {
  return (
    <Typewriter
      words={words}
      loop={true}
      cursor
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1500}
    />
  );
};

export default TypingEffect;
