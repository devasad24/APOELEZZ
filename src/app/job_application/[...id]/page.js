// import React from "react";
// import Hero from "@/app/_comonents/Hero";
// import { IoIosArrowRoundBack } from "react-icons/io";
// import ContactUs from "../_comonents/ContactUs";
// import ApplyPage from "./_components/form";
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
//               Property consultant position
//             </h1>
//             <p className="text-center pt-6 text-xl text-white">
//               We’re looking for a driven, client-focused Property Consultant to
//               join our growing team. If you have a passion for real estate and a
//               sharp eye for opportunity, we want to hear from you.
//             </p>
//           </div>
//         </div>
//       </Hero>
//       <div className="relative z-10">
//         <ApplyPage />
//       </div>
//       <ContactUs />
//     </div>
//   );
// };

// export default Page;
"use client";
import { useEffect, useState } from "react";
import Hero from "@/app/_comonents/Hero";
import { IoIosArrowRoundBack } from "react-icons/io";
import ContactUs from "../../_comonents/ContactUs";
import ApplyPage from "./_components/form";
import { useRouter, useParams } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const [currentPosition, setCurrentPosition] = useState({});
  const { id } = useParams();
  const positions = [
    {
      id: 1,
      title: "Property consultant position",
      description:
        "We're looking for a driven, client-focused Property Consultant to join our growing team. If you have a passion for real estate and a sharp eye for opportunity, we want to hear from you.",
    },
    {
      id: 2,
      title: "Property Agent ",
      description:
        "We're seeking a motivated and personable Property Agent to become a key part of our expanding team. If you thrive in a fast-paced environment, have a passion for real estate, and excel at building client relationships, we’d love to hear from you.",
    },
  ];

  useEffect(() => {
    setCurrentPosition(positions?.find((po) => po.id == id));
  }, [id]);

  return (
    <div>
      <Hero>
        <div className="px-4 sm:px-6 md:px-[40px] pt-6 md:pt-11 text-white">
          <div className="flex flex-col items-center md:items-start max-w-6xl mx-auto">
            <button
              onClick={() => router.back()}
              className="btn_secondary px-4 py-2 md:px-5 md:py-3 rounded-[14px] flex gap-2 md:gap-3 items-center min-w-fit self-start mb-6 md:mb-0"
            >
              <IoIosArrowRoundBack size={18} />
              Go Back
            </button>

            <div className="w-full">
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[80px] xl:text-[120px] font-[700] uppercase leading-tight sm:leading-tight md:leading-tight lg:leading-[140px] text-center">
                {currentPosition?.title}
              </h1>
              <p className="text-center pt-3 md:pt-6 text-base md:text-xl text-white max-w-3xl mx-auto">
                {currentPosition?.description}
              </p>
            </div>
          </div>
        </div>
      </Hero>

      <div className="relative z-10">
        <ApplyPage />
      </div>

      <ContactUs />
    </div>
  );
};

export default Page;
