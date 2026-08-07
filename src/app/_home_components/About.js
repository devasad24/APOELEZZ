// import React from "react";
// import Image from "next/image";
// const About = () => {
//   return (
//     <section className="relative z-10 py-12 md:py-16 px-4 ">
//       <div className="container mx-auto text-center">
//         <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
//           ABOUT APOELEZZ
//         </h2>
//         <p className="text-white/80 max-w-3xl mx-auto mb-8 md:mb-12">
//           We understand that every client has different preferences, which is
//           why we offer a wide range of options.
//         </p>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-[200px]">
//           {/* Card 1 */}
//           <div className="bg-[#3D3D3D66] border-primary text-white p-6">
//             <div className="w-fit bg-[#FFFFFF] p-6 rounded-md flex items-center justify-center mx-auto mb-4">
//               <Image
//                 src="/images/icons/home.svg"
//                 alt="Icon"
//                 width={34}
//                 height={34}
//               />
//             </div>
//             <h3 className="text-lg font-semibold mb-2">Luxury Homes</h3>
//             <p className="text-sm text-gray-400 mb-4">
//               Discover a refined selection of properties that redefine luxury
//               living, from waterfront condos to stunning villas, all offering
//               exceptional value.
//             </p>
//             <button className="btn px-2">Explore Properties</button>
//           </div>

//           {/* Card 2 */}
//           <div className="bg-[#3D3D3D66] border-primary text-white p-6">
//             <div className="w-fit bg-[#FFFFFF] p-6  rounded-md flex items-center justify-center mx-auto mb-4">
//               <Image
//                 src="/images/icons/collaborators.svg"
//                 alt="Icon"
//                 width={34}
//                 height={34}
//               />
//             </div>
//             <h3 className="text-lg font-semibold mb-2">
//               Elite Developer Collaborations
//             </h3>
//             <p className="text-sm text-gray-400 mb-4">
//               We partner with the region's most prestigious developers to bring
//               you exclusive projects featuring the finest amenities and
//               locations.
//             </p>
//             <button className="btn px-2">Meet Our Developers</button>
//           </div>

//           {/* Card 3 */}
//           <div className="bg-[#3D3D3D66] border-primary p-6 sm:col-span-2 lg:col-span-1">
//             <div className="w-fit bg-[#FFFFFF] p-6 rounded-md flex items-center justify-center mx-auto mb-4">
//               <Image
//                 src="/images/icons/investmentHome.svg"
//                 alt="Icon"
//                 width={34}
//                 height={34}
//               />
//             </div>
//             <h3 className="text-lg font-semibold mb-2">
//               Tailored Investment Guidance
//             </h3>
//             <p className="text-sm text-gray-400 mb-4">
//               Whether you're a first-time buyer or seasoned investor, our
//               experts are committed to guide you through every step of the
//               process.
//             </p>
//             <button className="btn px-2">Talk To An Advisor</button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
import Image from "next/image";
import Link from "next/link";
import Why_apoelezz from "./Why_apoelezz";
import Strength from "./Strength";

const About = () => {
  return (
    <section className="relative text-white flex flex-col">
      {/* ABOUT */}
      <div className="flex flex-col gap-6 py-12 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          ABOUT APOELEZZ
        </h2>
        <p className="text-white/80 max-w-3xl mx-auto text-sm sm:text-base">
          We understand that every client has different preferences, which is
          why we offer a wide range of options.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-fit">
          {/* Card 1 */}
          <div className="bg-[#3D3D3D66] border-primary text-white p-4 sm:p-6 rounded-[16px]">
            <div className="w-fit bg-[#FFFFFF] p-4 sm:p-6 rounded-md flex items-center justify-center mx-auto mb-4">
              <Image
                src="/images/icons/home.svg"
                alt="Icon"
                width={28}
                height={28}
                className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
              />
            </div>
            <h3 className="text-base sm:text-lg font-semibold mb-2">
              Luxury Homes
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 mb-4">
              Discover a refined selection of properties that redefine luxury
              living, from waterfront condos to stunning villas, all offering
              exceptional value.
            </p>
            <button className="btn px-2 py-1 sm:py-2 text-xs sm:text-sm btn_primary rounded-[14px]">
              <Link href="/properties">Explore Properties</Link>
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-[#3D3D3D66] border-primary text-white p-4 sm:p-6 rounded-[16px]">
            <div className="w-fit bg-[#FFFFFF] p-4 sm:p-6 rounded-md flex items-center justify-center mx-auto mb-4">
              <Image
                src="/images/icons/collaborators.svg"
                alt="Icon"
                width={28}
                height={28}
                className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
              />
            </div>
            <h3 className="text-base sm:text-lg font-semibold mb-2">
              Elite Developer Collaborations
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 mb-4">
              We partner with the region's most prestigious developers to bring
              you exclusive projects featuring the finest amenities and
              locations.
            </p>
            <button className="btn px-2 py-1 sm:py-2 text-xs sm:text-sm btn_primary rounded-[14px]">
              <Link href={"/developers"}>Meet Our Developers</Link>
            </button>
          </div>

          {/* Card 3 */}
          <div className="bg-[#3D3D3D66] border-primary text-white p-4 sm:p-6 rounded-[16px]">
            <div className="w-fit bg-[#FFFFFF] p-4 sm:p-6 rounded-md flex items-center justify-center mx-auto mb-4">
              <Image
                src="/images/icons/investmentHome.svg"
                alt="Icon"
                width={28}
                height={28}
                className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
              />
            </div>
            <h3 className="text-base sm:text-lg font-semibold mb-2">
              Tailored Investment Guidance
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 mb-4">
              Whether you're a first-time buyer or seasoned investor, our
              experts are committed to guide you through every step of the
              process.
            </p>
            <button className="btn px-2 py-1 sm:py-2 text-xs sm:text-sm btn_primary rounded-[14px] ">
              <Link href="#contact">Talk To An Advisor</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 py-12 text-center">
        <Why_apoelezz />
      </div>
      <div className="flex flex-col gap-6 py-12 text-center">
        <Strength />
      </div>
    </section>
  );
};

export default About;
