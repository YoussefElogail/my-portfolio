"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";
import { IContact } from "@/types/contact";
import MyInput from "@/components/shared/shadcn/MyInput";
import MyTextArea from "./MyTextArea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const inputs = [
  { name: "name", label: "Your Name", type: "text" },
  { name: "phone", label: "Phone Number", type: "phone" },
  { name: "email", label: "Email", type: "email" },
  { name: "subject", label: "Subject", type: "text" },
  { name: "message", label: "Your Message", type: "textarea" },
];

const ContactForm = () => {
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [isSending, setIsSending] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IContact>();

  const onSubmit = async (data: IContact) => {
    if (!captchaToken) {
      setErrorMsg("Please verify that you're not a robot.");
      return;
    }

    setIsSending(true);
    setErrorMsg("");
    setSuccessMsg("");

    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        {
          from_name: data.name,
          from_email: data.email,
          phone: data.phone,
          subject: data.subject,
          message: data.message,
          time: new Date().toLocaleString(),
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      );
      if (response.status === 200) {
        setSuccessMsg("Message sent successfully ✅");
        reset();
      } else {
        setErrorMsg("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setErrorMsg("Error sending message. Please try again later.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <Card
      className={cn(
        "border-none border-transparent bg-primary-black shadow-sm shadow-primary-color gap-2 group md:col-span-3 h-fit"
      )}
    >
      <CardContent className="space-y-4 text-lightn">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          {inputs.map((input, index) => {
            const fieldName = input.name as keyof IContact;
            const fieldError = errors[fieldName];

            return (
              <div key={index}>
                {input.type === "textarea" ? (
                  <MyTextArea
                    label={input.label}
                    type={input.type}
                    {...register(fieldName, {
                      required: `${input.label} is required`,
                    })}
                    fieldError={!!fieldError}
                    errMessage={fieldError?.message}
                  />
                ) : (
                  <MyInput
                    label={input.label}
                    type={input.type}
                    {...register(fieldName, {
                      required: `${input.label} is required`,
                    })}
                    fieldError={!!fieldError}
                    errMessage={fieldError?.message}
                  />
                )}
              </div>
            );
          })}

          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
            onChange={(token: string | null) => setCaptchaToken(token)}
          />

          {successMsg && <p className="text-green-500">{successMsg}</p>}
          {errorMsg && <p className="text-red-500">{errorMsg}</p>}

          <Button
            type="submit"
            disabled={isSending}
            className="hover:bg-primary-color bg-secondary-black"
          >
            {isSending ? "Sending..." : "Submit"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
