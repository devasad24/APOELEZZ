// import React from "react";
// import Hero from "../_comonents/Hero";
// import Image from "next/image";
// import { IoIosArrowRoundBack } from "react-icons/io";
// import DevelopersGrid from "./_components/developerGrid";
// import ContactUs from "../_comonents/ContactUs";
// const Page = () => {
//   return (
//     <div>
//       <Hero>
//         <div className="px-[40px] pt-11 text-white flex items-start">
//           <button className="btn_secondary px-5 py-3 rounded-[14px]  flex gap-3 items-center min-w-fit">
//             <IoIosArrowRoundBack size={18} />
//             Go Back
//           </button>
//           <div className="justify-self-center">
//             <h1 className="text-[120px] font-[700] uppercase   leading-[140px] text-center">
//               Explore our developers
//             </h1>
//             <p className="text-center pt-6 text-xl text-white">
//               Discover meticulously crafted homes and properties, blending
//               contemporary aesthetics with sustainable living.
//             </p>
//           </div>
//         </div>
//       </Hero>

//       <DevelopersGrid />
//       <ContactUs />
//     </div>
//   );
// };

// export default Page;
"use client";
import Hero from "../_comonents/Hero";
import { IoIosArrowRoundBack } from "react-icons/io";
import DevelopersGrid from "./_components/developerGrid";
import ContactUs from "../_comonents/ContactUs";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import useApi from "@/utils/useApi";

const DevelopersPage = () => {
  const router = useRouter();
  const [developers, setDevelopers] = useState([]);
  const { fetchData } = useApi();

  function getDevelopers() {
    fetchData(
      // `/developers?page=${1}`,
      `/developers?priority=Emaar,Damac,Sobha,Binghatti,Azizi,Beyond`,
      {
        method: "GET",
      },
      (res, status) => {
        setDevelopers(res?.data?.developers);
      }
    );
  }
  useEffect(() => {
    getDevelopers();
  }, []);

  return (
    <div>
      <Hero>
        {" "}
        <div className="flex flex-col gap-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl text-center leading-none font-[700] uppercase text-white">
            Explore our developers
          </h1>
          <p className="text-center text-base sm:text-lg md:text-xl text-white mx-auto">
            Discover meticulously crafted homes and properties, blending
            contemporary aesthetics with sustainable living.
          </p>
        </div>
      </Hero>
      {/* <Hero>
        <div className="px-4 sm:px-6 md:px-[40px] pt-6 sm:pt-8 md:pt-11 text-white">
          <div className="flex flex-col items-center">
            <div className="self-start mb-6 sm:mb-0 sm:absolute sm:top-0 sm:left-6 md:left-[40px]">
              <button
                onClick={() => router.back()}
                className="btn_secondary px-3 sm:px-4 md:px-5 py-2 md:py-3 rounded-[14px] flex gap-2 md:gap-3 items-center text-sm sm:text-base"
              >
                <IoIosArrowRoundBack
                  size={16}
                  className="sm:text-lg md:text-xl"
                />
                Go Back
              </button>
            </div>

            <div className="mt-4 sm:mt-8 md:mt-12">
              <h1 className="text-2xl  sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-[700] uppercase leading-tight sm:leading-tight md:leading-tight lg:leading-[140px] text-center">
                Explore our developers
              </h1>
              <p className="text-center pt-3 sm:pt-4 md:pt-6 text-base sm:text-lg md:text-xl text-white max-w-3xl mx-auto">
                Discover meticulously crafted homes and properties, blending
                contemporary aesthetics with sustainable living.
              </p>
            </div>
          </div>
        </div>
      </Hero> */}
      <div className="relative px-[7%] py-12">
        <DevelopersGrid developers={developers} />
        {/* Gradient Overlay */}
        <div
          className="absolute bottom-1/2 left-0 right-0 z-0 h-[50%] opacity-50"
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(244, 218, 121, 0.44) 57.83%, rgba(0, 0, 0, 0.8) 100%)",
          }}
        ></div>
      </div>
      <div className="py-12">
        <ContactUs />
      </div>
    </div>
  );
};

export default DevelopersPage;
