import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./_comonents/Navbar";
import Footer from "./_comonents/Footer";
import "react-loading-skeleton/dist/skeleton.css";
import LayoutWrapper from "./_comonents/LayoutWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "APOELEZZ",
  description:
    "Elevating the real estate experience with refined service, trusted partnerships, and a vision for excellence.",
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({ children }) {
  const links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Properties",
      link: "/properties",
    },
    {
      name: "Developers",
      link: "/developers",
    },
    {
      name: "Career",
      link: "/career",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Privacy Policy",
      link: "/privacy_policies",
    },
  ];
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="http://localhost:3000/images/logo.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black relative`}
      >
        <LayoutWrapper links={links}>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
