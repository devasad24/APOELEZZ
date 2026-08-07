// import React from "react";
// import Hero from "@/app/_comonents/Hero";
// import { IoIosArrowRoundBack } from "react-icons/io";
// import ProjectIdeaForm from "./_components/projectIdeaForm";
// import FAQPage from "./_components/faqs";
// const Page = () => {
//   return (
//     <div>
//       <Hero>
//         <div className="px-[40px] pt-[160px] text-white flex items-start">
//           <button className="btn_secondary px-5 py-3 rounded-[14px]  flex gap-3 items-center min-w-fit">
//             <IoIosArrowRoundBack size={18} />
//             Go Back
//           </button>
//           <div className="justify-self-center">
//             <h1 className="text-[80px] font-[700] uppercase   leading-[140px] text-center">
//               Let’s Start the Conversation
//             </h1>
//             <p className="text-center pt-6 text-xl text-white">
//               Whether you're buying, selling, or simply exploring — our team is
//               here to assist you with expert guidance and prompt support.
//             </p>
//           </div>
//         </div>
//       </Hero>
//       <div className="relative z-10 overflow-y-hidden">
//         <ProjectIdeaForm />
//         <div className="relative">
//           <div className="z-30 relative">
//             <FAQPage />
//           </div>
//           <div
//             style={{
//               background:
//                 "linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(244, 218, 121, 0.44) 57.83%, rgba(0, 0, 0, 0.8) 100%)",
//             }}
//             className="absolute top-1/3 w-full h-full"
//           ></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Page;
"use client";
import Hero from "@/app/_comonents/Hero";
import { IoIosArrowRoundBack } from "react-icons/io";
import ProjectIdeaForm from "./_components/projectIdeaForm";
import FAQPage from "./_components/faqs";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  return (
    <div>
      <Hero>
        {" "}
        <div className="flex flex-col gap-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl text-center leading-none font-[700] uppercase text-white">
            Let's Start the Conversation
          </h1>
          <p className="text-center text-base sm:text-lg md:text-xl text-white mx-auto">
            Whether you're buying, selling, or simply exploring — our team
            is here to assist you with expert guidance and prompt support.
          </p>
        </div>
      </Hero>

      <div className="relative z-10 overflow-y-hidden">
        <div className="px-[7%] py-12">
          <ProjectIdeaForm />
        </div>
        <div className="relative w-full">
          <div
            style={{
              background:
                "linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(244, 218, 121, 0.44) 57.83%, rgba(0, 0, 0, 0.8) 100%)",
            }}
            className="absolute top-1/4 sm:top-1/3 w-full h-full"
          ></div>
          <div className="px-[7%] py-12 z-30 relative border-b">
            <FAQPage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
