"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Menu } from "lucide-react";
import { useScroll, useTransform, motion } from "framer-motion";
import Drawer from "./Drawer";
import Link from "next/link";
import { activeRoutes } from "@/routes/activeRoutes";

const Header = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 200], [0, 0.8]); // Adjusted opacity range

  const handleShowDrawer = () => {
    setShowDrawer((prv) => !prv);
  };

  return (
    <>
      <motion.header className="py-2 fixed top-0 left-0 right-0  backdrop-blur-sm z-10">
        {/* Animated background overlay */}

        <div className="my-container flex justify-between items-center relative z-10">
          <Link href={activeRoutes.home}>
            <Image
              unoptimized
              src="\images\logo.png"
              alt="logo"
              height={100}
              width={100}
            />
          </Link>
          <motion.span
            whileHover={{
              scale: 1.1,
            }}
          >
            <Menu
              className="text-primary-color cursor-pointer"
              size={36}
              onClick={handleShowDrawer}
            />
          </motion.span>
        </div>
      </motion.header>
      <Drawer {...{ handleShowDrawer, showDrawer }} />
    </>
  );
};

export default Header;
