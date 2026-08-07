// "use client";
// import React from "react";
// import Hero from "@/app/_comonents/Hero";
// import { IoIosArrowRoundBack } from "react-icons/io";
// import PrivacyPolicyPage from "./_components/policies";
// import { useRouter } from "next/navigation";
// const Page = () => {
//   const router = useRouter();
//   return (
//     <div>
//       <Hero>
//         <div className="px-[40px] pt-11 text-white flex items-start">
//           <button
//             onClick={() => router.back()}
//             className="btn_secondary px-5 py-3 rounded-[14px]  flex gap-3 items-center min-w-fit"
//           >
//             <IoIosArrowRoundBack size={18} />
//             Go Back
//           </button>
//           <div className="justify-self-center w-full">
//             <h1 className="text-[120px] font-[700] uppercase   leading-[140px] text-center">
//               Privacy Policies
//             </h1>
//             <p className="text-center pt-6 text-xl text-white">
//               Last updated: May 05, 2025
//             </p>
//           </div>
//         </div>
//       </Hero>
//       <div className="relative z-10">
//         <PrivacyPolicyPage />
//       </div>
//     </div>
//   );
// };

// export default Page;
"use client";
import React from "react";
import Hero from "@/app/_comonents/Hero";
import { IoIosArrowRoundBack } from "react-icons/io";
import PrivacyPolicyPage from "./_components/policies";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  return (
    <div>
      <Hero>
        {" "}
        <div className="flex flex-col gap-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl text-center leading-none font-[700] uppercase text-white">
            Privacy Policies
          </h1>
          <p className="text-center text-base sm:text-lg md:text-xl text-white mx-auto">
            Last updated: 12 November, 2025
          </p>
        </div>
      </Hero>

      {/* Policy Content */}
      {/* <div className="relative z-10 px-4 sm:px-6 md:px-12 lg:px-24 py-10"> */}
      <div className="relative z-10 py-12">
        <PrivacyPolicyPage />
      </div>
    </div>
  );
};

export default Page;
