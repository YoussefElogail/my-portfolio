"use client";
import Spier from "@/components/shared/Spier";
import { auth } from "@/config/firebase";
import {
  DashboardContextProvider,
  useDashBoard,
} from "@/contexts/DashboardContext";
import DashboardDrawer from "@/includes/dashboard/DashboardDrawer";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { ToastContainer } from "react-toastify";

const LayoutContent = ({ children }: { children: React.ReactNode }) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [currentUser, currentLoading] = useAuthState(auth);
  const { isLoading } = useDashBoard(); // ✅ داخل Provider
  const router = useRouter();

  const handleOpenDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  useEffect(() => {
    if (!currentUser && !currentLoading) router.push("/admin-login");
  }, [currentUser, currentLoading]);

  return (
    <>
      <main className="min-h-screen text-secondary-color grid grid-cols-12">
        <DashboardDrawer {...{ openDrawer, setOpenDrawer }} />
        <div className={`p-4 ${openDrawer ? "col-span-10" : "col-span-11"}`}>
          {children}
        </div>
      </main>
      <ToastContainer />
      <Spier loading={isLoading} />
    </>
  );
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <DashboardContextProvider>
      <LayoutContent>{children}</LayoutContent>
    </DashboardContextProvider>
  );
};

export default Layout;
