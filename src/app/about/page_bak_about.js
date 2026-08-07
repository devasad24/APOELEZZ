// import React from "react";
// import Hero from "@/app/_comonents/Hero";
// import { IoIosArrowRoundBack } from "react-icons/io";
// import ContactUs from "../_comonents/ContactUs";
// import WhoWeAre from "./_components/whoWeAre";
// import WhyChooseUsPage from "./_components/whyApoelezz";
// import TeamPage from "./_components/ourExperiencedTeam";
// const Page = () => {
//   return (
//     <div>
//       <Hero>
//         <div className="px-[40px] pt-[80px] text-white flex items-start">
//           <button className="btn_secondary px-5 py-3 rounded-[14px]  flex gap-3 items-center min-w-fit">
//             <IoIosArrowRoundBack size={18} />
//             Go Back
//           </button>
//           <div className="justify-self-center w-full">
//             <h1 className="text-[140px] font-[700] uppercase   leading-[140px] text-center">
//               About
//             </h1>
//             <h1 className="text-[140px] font-[700] uppercase   leading-[140px] text-center">
//               Apoelezz
//             </h1>
//             <p className="text-center pt-6 text-xl text-white">
//               Elevating the real estate experience with refined service, trusted
//               partnerships, and a vision for excellence.
//             </p>
//           </div>
//         </div>
//       </Hero>
//       <div className="relative z-10">
//         <WhoWeAre />
//         <div
//           style={{
//             background:
//               "linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(244, 218, 121, 0.44) 57.83%, rgba(0, 0, 0, 0.8) 100%)",
//           }}
//         >
//           {" "}
//           <WhyChooseUsPage />
//           <TeamPage />
//         </div>
//       </div>
//       <ContactUs />
//     </div>
//   );
// };

// export default Page;
//for testing
"use client";
import Hero from "@/app/_comonents/Hero";
import { IoIosArrowRoundBack } from "react-icons/io";
import ContactUs from "../_comonents/ContactUs";
import WhoWeAre from "./_components/whoWeAre";
import WhyChooseUsPage from "./_components/whyApoelezz";
import TeamPage from "./_components/ourExperiencedTeam";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  return (
    <div>
      <Hero>
        <div className="px-4 sm:px-6 md:px-[40px] pt-6 sm:pt-10 md:pt-[80px] text-white">
          <div className="flex flex-col items-center md:items-start max-w-6xl mx-auto">
            <button
              onClick={() => router.back()}
              className="btn_secondary px-4 py-2 md:px-5 md:py-3 rounded-[14px] flex gap-2 md:gap-3 items-center min-w-fit self-start mb-6 md:mb-0"
            >
              <IoIosArrowRoundBack size={18} />
              Go Back
            </button>

            <div className="w-full">
              <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[120px] xl:text-[140px] font-[700] uppercase leading-tight sm:leading-tight md:leading-tight lg:leading-[140px] text-center">
                About
              </h1>
              <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[120px] xl:text-[140px] font-[700] uppercase leading-tight sm:leading-tight md:leading-tight lg:leading-[140px] text-center mt-0 sm:mt-2">
                Apoelezz
              </h1>
              <p className="text-center pt-3 md:pt-6 text-base md:text-xl text-white max-w-3xl mx-auto">
                Elevating the real estate experience with refined service,
                trusted partnerships, and a vision for excellence.
              </p>
            </div>
          </div>
        </div>
      </Hero>

      <div className="relative z-10">
        <WhoWeAre />
        <div
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(244, 218, 121, 0.44) 57.83%, rgba(0, 0, 0, 0.8) 100%)",
          }}
          className="w-full"
        >
          <WhyChooseUsPage />
          <TeamPage />
        </div>
      </div>

      <ContactUs />
    </div>
  );
};

export default Page;
