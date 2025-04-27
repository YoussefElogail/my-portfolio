import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/includes/header/Header";
import Footer from "@/includes/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevPluse | Crafting Modern Web Experiences",
  description:
    "DevPluse is a portfolio showcasing modern web development, elegant design, and clean code. Built with Next.js, TypeScript, and powerful tools to deliver top-notch digital experiences.",
  keywords: [
    "DevPluse",
    "Next.js Portfolio",
    "Frontend Developer",
    "React",
    "TypeScript",
    "Web Design",
    "Software Engineer Portfolio",
  ],
  authors: [
    {
      name: "Youssef Elogail",
      url: "https://youssef-elogail-portfolio.vercel.app",
    },
  ],
  creator: "Youssef Elogail",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://youssef-elogail-portfolio.vercel.app",
    siteName: "DevPluse",
    title: "DevPluse | Crafting Modern Web Experiences",
    description:
      "Explore DevPluse, a modern web development portfolio built with Next.js, showing clean code, UI excellence, and frontend mastery.",
    images: [
      {
        url: "https://youssef-elogail-portfolio.vercel.app/images/logo.png",
        width: 1200,
        height: 630,
        alt: "DevPluse - Portfolio by Youssef Elogail",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DevPluse | Crafting Modern Web Experiences",
    description:
      "A powerful portfolio highlighting frontend creativity and coding passion, crafted with Next.js & React.",
    creator: "@JOEOGAIL",
    images: ["https://youssef-elogail-portfolio.vercel.app/images/logo.png"],
  },
  icons: {
    icon: "/images/favicon.png",
  },
  manifest: "/site.webmanifest",
  themeColor: "#c370ff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`w-full h-full ${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="antialiased bg-primary-black">{children}</body>
    </html>
  );
}
