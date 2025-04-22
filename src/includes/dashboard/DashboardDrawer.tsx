"use client";
import { ChartPie, ChevronLeft, ChevronRight, FolderCheck } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import DashboardNav from "./DashboardNav";
import { activeRoutes } from "@/routes/activeRoutes";
import MyDropdownMenu from "@/components/shared/shadcn/MyDropdownMenu";
import MotionElement from "@/components/shared/MotionElement";
import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "@/config/firebase";
import { useRouter } from "next/navigation";

type DashboardDrawerProps = {
  openDrawer: boolean;
  setOpenDrawer: (prv: boolean) => void;
};

const dashboardLinks = [
  {
    label: "dashboard",
    icon: <ChartPie width={50} height={50} />,
    href: activeRoutes.admin.dashboard,
  },
  {
    label: "projects",
    icon: <FolderCheck width={50} height={50} />,
    href: activeRoutes.admin.projects,
  },
];

const DashboardDrawer = ({
  openDrawer,
  setOpenDrawer,
}: DashboardDrawerProps) => {
  const [signOut, loading, error] = useSignOut(auth);
  const settings = [
    {
      label: "logout",
      action: async () => {
        await signOut();
      },
    },
  ];
  return (
    <MotionElement
      as="aside"
      className={` bg-secondary-black flex flex-col w-full ${
        openDrawer && "col-span-2"
      }`}
    >
      <div className="flex p-2 relative items-center border-b border-black">
        <MyDropdownMenu
          className="bg-primary-black rounded-sm overflow-hidden"
          trigger={
            <Image
              unoptimized
              src="https://placehold.co/50"
              alt=""
              height={60}
              width={60}
              className="rounded-full border-2 border-black cursor-pointer"
            />
          }
          items={settings}
          label="Settings"
        />

        <button
          className="bg-black absolute -right-2.5 cursor-pointer rounded-md"
          onClick={() => setOpenDrawer(!openDrawer)}
        >
          {openDrawer ? <ChevronLeft /> : <ChevronRight />}
        </button>
      </div>
      <DashboardNav links={dashboardLinks} openDrawer={openDrawer} />
    </MotionElement>
  );
};

export default DashboardDrawer;
