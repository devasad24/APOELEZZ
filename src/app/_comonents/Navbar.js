// import Image from "next/image";
// import React from "react";
// import Link from "next/link";

// const Navbar = () => {
//   const links = [
//     {
//       name: "Home",
//       link: "/",
//     },
//     {
//       name: "Properties",
//       link: "/properties",
//     },
//     {
//       name: "Developers",
//       link: "/developers",
//     },
//     {
//       name: "Career",
//       link: "/career",
//     },
//     {
//       name: "About",
//       link: "/about",
//     },
//   ];
//   return (
//     <div className="flex items-center justify-center mt-4 absolute top-4 left-0 right-0 z-10 w-ful">
//       <div className="border-primary  flex gap-8 px-3.5 items-center  rounded-[14px] text-[#FFFFFF99]">
//         <Image src="/assests/new-Logo.png" width={"85"} height={85} alt="logo" />
//         {links?.map((link, ind) => {
//           return (
//             <Link key={ind} href={link?.link}>
//               <span className=""> {link?.name}</span>
//             </Link>
//           );
//         })}
//         <button className="p-2 px-4 btn_primary rounded-2xl">
//           <Link href="/contact">Contact</Link>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const Navbar = ({ links }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  console.log("pathname: ", pathname);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        !event.target.closest(".mobile-menu") &&
        !event.target.closest(".menu-button")
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuOpen]);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const links = [
  //   {
  //     name: "Home",
  //     link: "/",
  //   },
  //   {
  //     name: "Properties",
  //     link: "/properties",
  //   },
  //   {
  //     name: "Developers",
  //     link: "/developers",
  //   },
  //   {
  //     name: "Career",
  //     link: "/career",
  //   },
  //   {
  //     name: "About",
  //     link: "/about",
  //   },
  // ];

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50  w-full transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-sm py-2" : "py-4"
      }`}
    >
      <div className="w-fit mx-auto px-4 sm:px-6 ">
        <div
          className={`flex items-center justify-between ${
            // scrolled ? "" : "border-primary backdrop-blur-3xl shadow-2xl"
            scrolled
              ? ""
              : `border-primary ${
                  pathname == "/" && "bg-[#3D3D3D33] backdrop-blur-2xl"
                } `
          } rounded-[14px] text-white `}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/assests/new-Logo.png"
              width={85}
              height={85}
              alt="logo"
              className="md:w-[85px] lg:w-[120px] w-[85px] h-auto"
              // className="w-[50px] h-auto md:w-[70px]"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
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
            {/* <button className="p-2 px-4 btn_primary rounded-2xl whitespace-nowrap mr-4"> */}
            <button className="p-2 px-4 bg-[#e79911] rounded-lg whitespace-nowrap mr-4">
              <Link href="/contact">Contact</Link>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white focus:outline-none menu-button"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden mobile-menu absolute w-full bg-black/95 text-white backdrop-blur-sm transition-all duration-300 overflow-hidden ${
          isMenuOpen ? "max-h-[400px] border-b border-gray-800" : "max-h-0"
        }`}
      >
        <div className="px-4 py-4 space-y-3">
          {links?.map((link, ind) => {
            return (
              <Link
                key={ind}
                href={link?.link}
                className="block py-2 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>{link?.name}</span>
              </Link>
            );
          })}
          <div className="pt-2">
            <button className="w-full p-2 px-4 btn_primary rounded-2xl text-center">
              <Link href="/contact">Contact</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
