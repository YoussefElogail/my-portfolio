import SocialMedia from "@/components/shared/SocialMedia";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const ContactInfo = () => {
  return (
    <Card
      className={cn(
        "border-none border-transparent bg-primary-black  shadow-sm shadow-primary-color gap-2 group"
      )}
    >
      <CardHeader>
        <CardTitle className="overflow-hidden rounded-md">
          <Image
            unoptimized
            src="/images/contact1.png"
            alt={"dd"}
            height={1000}
            width={1000}
            className="w-full aspect-square object-cover group-hover:scale-110 transition-all duration-300 "
          />
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4 text-lightn overflow-hidden ">
        <h3 className="text-3xl text-white">Youssef Elogail</h3>
        <h4>front end developer</h4>
        <p>
          I am available for freelance work. Connect with me via and call in to
          my account.
        </p>
        <div>
          Phone:{" "}
          <a
            className="relative inline-block text-stone-300 hover:text-primary-color after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-primary-color after:transition-all after:duration-300 "
            href="tel:+201150781257"
          >
            +201150781257
          </a>
        </div>
        <div className="">
          Email:{" "}
          <a
            className="relative inline-block text-stone-300 hover:text-primary-color after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-primary-color after:transition-all after:duration-300"
            href="mailto:youssef.elogail.0@gmail.com"
          >
            youssef.elogail.0@gmail.com
          </a>
        </div>
        <SocialMedia />
      </CardContent>
    </Card>
  );
};

export default ContactInfo;
