// import React from "react";
// import Hero from "../_comonents/Hero";
// import ImageCollage from "./_components/ImageGallery";
// import { ArrowUpRight } from "lucide-react";
// import OurTeam from "./_components/ourTeam";
// import ContactUs from "../_comonents/ContactUs";

// const positions = [
//   {
//     title: "Property Consultant",
//     department: "Any team",
//     commitment: "Full time",
//     href: "#",
//   },
//   {
//     title: "Property Agent",
//     department: "Any team",
//     commitment: "Full time",
//     href: "#",
//   },
// ];

// const Page = () => {
//   return (
//     <div className="text-white">
//       <Hero>
//         {" "}
//         <ImageCollage />{" "}
//       </Hero>
//       <div className="relative z-10">
//         <div className="px-[40px] pt-11 text-white flex items-start">
//           <div className="justify-self-center w-full">
//             <h1 className="text-[80px] font-[700] uppercase w-full   leading-[140px] text-center">
//               Join the Apoelezz Team
//             </h1>
//             <p className="text-center pt-6 text-xl text-white">
//               Step into a world of luxury real estate, where your talent drives
//               excellence and client trust.
//             </p>
//           </div>
//         </div>
//         <section className=" text-white py-16 px-4">
//           <div className="max-w-4xl mx-auto">
//             <h2 className="text-[80px] font-bold text-center mb-12">
//               OPEN POSITIONS
//             </h2>

//             <div className="grid grid-cols-3 gap-4 text-sm font-medium  pb-2">
//               <div>POSITION</div>
//               <div>Department</div>
//               <div>Commitment</div>
//             </div>

//             {positions.map((position, index) => (
//               <div
//                 key={index}
//                 className="grid grid-cols-3 items-center gap-4 py-4   transition-colors"
//               >
//                 <a
//                   href={position.href}
//                   className="flex items-center gap-1 text-white hover:underline"
//                 >
//                   {position.title}
//                   <ArrowUpRight size={14} />
//                 </a>
//                 <div className="text-gray-300">{position.department}</div>
//                 <div className="text-gray-300">{position.commitment}</div>
//               </div>
//             ))}
//           </div>
//         </section>

//         <OurTeam />
//         <ContactUs />
//       </div>
//     </div>
//   );
// };

// export default Page;
import Hero from "../_comonents/Hero";
import ImageCollage from "./_components/ImageGallery";
import { ArrowUpRight } from "lucide-react";
import OurTeam from "./_components/ourTeam";
import ContactUs from "../_comonents/ContactUs";
import Link from "next/link";

const positions = [
  {
    title: "Property Consultant",
    department: "Any team",
    commitment: "Full time",
    href: "/job_application/1",
  },
  {
    title: "Property Agent",
    department: "Any team",
    commitment: "Full time",
    href: "/job_application/2",
  },
];

const Page = () => {
  return (
    <div className="text-white">
      <Hero>
        <ImageCollage />
      </Hero>
      <div className="relative z-10">
        <div className="px-4 sm:px-6 md:px-[40px] pt-6 md:pt-11 text-white flex items-start">
          <div className="justify-self-center w-full">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[80px] font-[700] uppercase w-full leading-tight sm:leading-tight md:leading-tight lg:leading-[140px] text-center">
              Join the Apoelezz Team
            </h1>
            <p className="text-center pt-3 md:pt-6 text-base md:text-xl text-white max-w-3xl mx-auto">
              Step into a world of luxury real estate, where your talent drives
              excellence and client trust.
            </p>
          </div>
        </div>

        <section className="text-white py-8 md:py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-[80px] font-bold text-center mb-6 md:mb-12">
              OPEN POSITIONS
            </h2>

            {/* Header row - hidden on mobile */}
            <div className="hidden md:grid md:grid-cols-3 gap-4 text-sm font-medium pb-2">
              <div>POSITION</div>
              <div>Department</div>
              <div>Commitment</div>
            </div>

            {/* Mobile and desktop layout for positions */}
            {positions?.map((position, index) => (
              <div
                key={index}
                className="flex flex-col md:grid md:grid-cols-3 items-start md:items-center gap-2 md:gap-4 py-4 border-b border-gray-800 md:border-none transition-colors"
              >
                <Link
                  href={position.href}
                  className="flex items-center gap-1 text-white hover:underline font-medium"
                >
                  {position.title}
                  <ArrowUpRight size={14} />
                </Link>
                <div className="text-gray-300 text-sm">
                  <span className="md:hidden font-medium mr-2">
                    Department:
                  </span>
                  {position.department}
                </div>
                <div className="text-gray-300 text-sm">
                  <span className="md:hidden font-medium mr-2">
                    Commitment:
                  </span>
                  {position.commitment}
                </div>
              </div>
            ))}
          </div>
        </section>

        <OurTeam />
        <ContactUs />
      </div>
    </div>
  );
};

export default Page;
