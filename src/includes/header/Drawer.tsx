import SocialMedia from "@/components/shared/SocialMedia";
import { activeRoutes } from "@/routes/activeRoutes";
import { AnimatePresence, motion } from "framer-motion";
import { Github, Linkedin, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const variants = {
  hidden: { x: "-100vw" },
  visible: { x: 0 },
  exit: {
    x: "-100vw",
  },
};

const links = [
  { name: "home", href: activeRoutes.home },
  { name: "features", href: activeRoutes.features },
  { name: "portfolio", href: activeRoutes.portfolio },
  { name: "contact", href: activeRoutes.contact },
];

type DrawerProps = {
  showDrawer: boolean;
  handleShowDrawer: () => void;
};

const Drawer = ({ showDrawer, handleShowDrawer }: DrawerProps) => {
  return (
    <>
      <AnimatePresence>
        {showDrawer && (
          <>
            <div
              className="fixed top-0 bottom-0 right-0 left-0 bg-black-overlay  z-10 "
              onClick={handleShowDrawer}
            />
            <motion.nav
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{
                duration: 0.3,
                ease: "linear",
                type: "tween",
              }}
              exit="exit"
              className="overflow-y-auto fixed left-0 top-0 bottom-0 bg-primary-black flex flex-col  text-secondary-color w-3/4 sm:max-w-[300px] px-10 py-6 z-10"
            >
              <div className="flex flex-col gap-4 ">
                {" "}
                <Link href={activeRoutes.home}>
                  <Image
                    unoptimized
                    src="\images\logo.png"
                    alt="logo"
                    height={100}
                    width={100}
                  />
                </Link>
                {/* <p className="text-lightn">
                  Inbio is a personal portfolio template. You can customize all.
                </p> */}
                <motion.span
                  className="absolute right-4 top-4"
                  whileHover={{
                    scale: 1.1,
                  }}
                >
                  <X
                    className="text-primary-color cursor-pointer  bg-secondary-black rounded-full "
                    size={36}
                    onClick={handleShowDrawer}
                  />
                </motion.span>
              </div>
              <ul className=" border-t-1 border-b-1 py-4 my-4 border-secondary-black space-y-4 grow-1">
                {links.map(({ name, href }) => (
                  <motion.li
                    className="uppercase origin-left w-fit"
                    transition={{
                      duration: 0.2,
                      ease: "easeInOut",
                    }}
                    key={name}
                    whileHover={{
                      scale: 1.2,
                      color: "var(--color-primary-color)",
                    }}
                  >
                    <Link href={href}>{name}</Link>
                  </motion.li>
                ))}
              </ul>

              <SocialMedia />
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Drawer;
