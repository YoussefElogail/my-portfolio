"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { ILoginAdmin } from "@/types/admin";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { auth } from "@/config/firebase";
import { activeRoutes } from "./../../routes/activeRoutes";
import { useRouter } from "next/navigation";
import Spier from "@/components/shared/Spier";

const inputs = [
  { name: "email", label: "Email", type: "email" },
  { name: "password", label: "password", type: "password" },
];

const AdminLoginPage = () => {
  const router = useRouter();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [currentUser, currentLoading] = useAuthState(auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ILoginAdmin>();

  useEffect(() => {
    if (!currentLoading && (user || currentUser)) {
      router.push(activeRoutes.admin.dashboard);
    }
  }, [user, currentUser, currentLoading]);
  const onSubmit = async (data: ILoginAdmin) => {
    signInWithEmailAndPassword(data.email, data.password);
  };

  return (
    <main className="my-container flex flex-col justify-center items-center h-screen">
      <Spier loading={loading || currentLoading} />
      <section className="text-white rounded-lg">
        <Card
          className={cn(
            "border-none border-transparent bg-primary-black  shadow-sm shadow-primary-color gap-2 group md:col-span-3  h-fit"
          )}
        >
          <CardContent className="space-y-4 text-lightn">
            <h2 className="text-white text-center">Login to dashbord</h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
              {inputs.map((input, index) => {
                const fieldName = input.name as keyof ILoginAdmin;
                const fieldError = errors[fieldName];

                return (
                  <React.Fragment key={index}>
                    <Input
                      type={input.type}
                      placeholder={input.label}
                      {...register(fieldName, {
                        required: `${input.label} is required`,
                      })}
                      className="border-secondary-black focus-visible:ring-primary-color  "
                    />
                    {fieldError && (
                      <span className="text-sm text-red-500">
                        {fieldError.message}
                      </span>
                    )}
                  </React.Fragment>
                );
              })}
              <Button
                type="submit"
                className="hover:bg-primary-color bg-secondary-black"
              >
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </main>
  );
};

export default AdminLoginPage;
