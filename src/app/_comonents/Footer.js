"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Facebook,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  // Search,
  Twitter,
  Youtube,
  // Snapchat,
  // Tiktok,
} from "lucide-react";
import Link from "next/link";
import { MdLocationPin } from "react-icons/md";

const contacts = [
  {
    icon: <Phone className="h-5 w-5" />,
    text: "+971-528097303",
    type: "phone",
  },
  {
    icon: <Mail className="h-5 w-5" />,
    text: "info@apoelezz.com",
    type: "email",
  },
  {
    icon: <Globe className="h-5 w-5" />,
    text: "www.apoelezz.com",
    type: "website",
  },
  {
    icon: <MdLocationPin className="h-5 w-5" />,
    text: "Indigo Central 8 - Office 6R, Sheikh Zayed Rd - Al Manara - Dubai",
    type: "location",
  },
];

// Helper to get appropriate link for each type
const getLink = (contact) => {
  switch (contact.type) {
    case "phone":
      return `tel:${contact.text.replace(/\s+/g, "")}`;
    case "email":
      return `mailto:${contact.text}`;
    case "website":
      return contact.text.startsWith("http")
        ? contact.text
        : `https://${contact.text}`;
    case "location":
      return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        contact.text
      )}`;
    default:
      return "#";
  }
};

const social_links = [
  {
    icon: <Facebook className="h-5 w-5" />,
    link: "https://web.facebook.com/people/AP-Properties/61575839320827/?_rdc=1&_rdr#",
  },
  {
    icon: <Twitter className="h-5 w-5" />,
    link: "https://x.com/ApProperti11",
  },
  {
    icon: <Instagram className="h-5 w-5" />,
    link: "https://www.instagram.com/approperties11/?fbclid=IwZXh0bgNhZW0CMTEAYnJpZBExcFdMWWFwSE9iVERSREdkUQEe_mD_D8ZoO0i6FaXTuXqMoLiLQLZ1_xUKMV_-c9PysaYfAvEYhoW451flS4U_aem_dmDbM25pGto8YbyqlqFx_w",
  },
  {
    icon: <Youtube className="h-5 w-5" />,
    link: "https://www.youtube.com/@ApProperties11",
  },
];
const Footer = ({ links }) => {
  useEffect(() => {
    console.log("google translate");
    const script = document.createElement("script");
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.body.appendChild(script);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: "en", includedLanguages: "en,ar" },
        "google_translate_element"
      );
    };
  }, []);

  return (
    <>
      {/* Footer */}
      <footer className="relative px-[7%] pt-12 z-10 border-t border-gray-800">
        <div className="flex flex-col w-full gap-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="col-span-1 md:col-span-2 w-full flex flex-col gap-4 items-center md:items-start">
              <Image
                src="/assests/new-Logo.png"
                alt="Logo"
                width={180}
                height={180}
                className="object-contain"
              />
              <p className="text-white font-light text-sm text-wrap">
                <b>APOELEZZ </b> Real Estate L.L.C is a Dubai-based firm
                specializing in sales, leasing, investment advisory, and
                property management. We are committed to professionalism and
                client satisfaction, helping clients secure the best deals and
                value in the market.
              </p>
              <p className="text-white font-light text-sm text-wrap">
                With strong developer partnerships and deep expertise in key
                areas such as Business Bay and Downtown, we deliver smart,
                sustainable real estate solutions with a professional touch.
              </p>
            </div>
            <div className="col-span-1 md:col-span-2 w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* FEATURES */}
                <div className="flex flex-col gap-4">
                  <h1 className="primary-color font-semibold text-lg">
                    Quick Links
                  </h1>
                  <div className="flex lg:flex-col items-start gap-x-6 gap-y-2 text-white font-light flex-wrap">
                    {links?.map((link, ind) => {
                      return (
                        <Link
                          key={ind}
                          href={link?.link}
                          className="hover:text-white transition-colors"
                        >
                          <span>{link?.name}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
                {/* CONTACT */}
                <div className="flex flex-col gap-10">
                  {/* CONTACT DETAILS */}
                  <div className="flex flex-col gap-4">
                    <h1 className="primary-color font-semibold text-lg">
                      Get in touch
                    </h1>
                    <div className="flex flex-col gap-3">
                      {contacts?.map((contact, index) => (
                        <a
                          key={index}
                          href={getLink(contact)}
                          target={
                            contact.type === "website" ||
                              contact.type === "location"
                              ? "_blank"
                              : "_self"
                          }
                          rel="noopener noreferrer"
                          className="flex items-center text-white hover:text-primary transition-colors duration-200"
                        >
                          <div className="mr-4">{contact.icon}</div>
                          <p className="font-light text-sm break-words">
                            {contact.text}
                          </p>
                        </a>
                      ))}
                    </div>
                  </div>
                  {/* SOCIAL MEDIA */}
                  <div className="flex flex-col gap-4">
                    <h1 className="primary-color font-semibold text-lg">
                      Follow Us
                    </h1>
                    <div className="flex flex-row gap-4 items-center">
                      {social_links?.map((social, index) => (
                        <Link
                          key={index}
                          href={social?.link}
                          className="text-white/70 hover:text-white"
                          target="_blank"
                        >
                          {social?.icon}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <div id="google_translate_element" className=""></div>
          </div>
          <div className="text-white/50 py-6 text-center border-t-1">
            © 2025 APOELEZZ. All Rights Reserved |{" "}
            <Link href="/privacy_policies">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
