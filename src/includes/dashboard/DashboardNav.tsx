"use client";
import MyToolTip from "@/components/shared/shadcn/MyToolTip";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type DashboardNavProps = {
  links: {
    label: string;
    href: string;
    icon: React.ReactNode;
  }[];
  openDrawer: boolean;
};

const DashboardNav = ({ links, openDrawer }: DashboardNavProps) => {
  const pathName = usePathname().split("/").at(-1);
  return (
    <nav>
      <ul className="flex flex-col overflow-hidden">
        {links.map(({ href, icon, label }, i) => (
          <li
            key={i}
            className={`${
              pathName === label && "bg-primary-color"
            } hover:bg-primary-color py-1 px-2 capitalize`}
          >
            <Link
              href={href}
              className={`flex ${!openDrawer && "justify-center"}`}
            >
              {openDrawer ? (
                <div className="flex gap-2 items-center">
                  <span>{icon} </span>
                  <span>{label}</span>
                </div>
              ) : (
                icon
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DashboardNav;
