// "use client";

// import React from "react";
// import Image from "next/image";
// import { CiLocationOn } from "react-icons/ci";
// import { FaBed } from "react-icons/fa";
// import { PiBathtub } from "react-icons/pi";
// import { MdCopyAll } from "react-icons/md";
// export default function SimilarProperties() {
//   const [sliderState, setSliderState] = React.useState(0);
//   const sliderRef = React.useRef(null);

//   return (
//     <>
//       {/* featured properties section */}
//       <div className="relative z-[3] flex flex-col items-center gap-[34px] px-14 md:px-5 sm:px-4 text-white border-t py-5">
//         <div className="flex w-[78%] flex-col  gap-[68px] lg:w-full md:w-full sm:gap-[34px]">
//           <div className="flex ">
//             <h1 className="!font-dmsans text-[80px] font-bold uppercase tracking-[-1.60px] lg:text-[48px] md:text-[48px]">
//               YOU ALSO MIGHT LIKE
//             </h1>
//           </div>
//           <div className="container-xs mx-auto flex w-full gap-[30px] overflow-hidden  z-40">
//             {[...Array(3)].map(() => (
//               <React.Fragment key={Math.random()}>
//                 <div className="px-[15px] min-w-[300px] ">
//                   <div
//                     style={{
//                       backdropFilter: "blur(14px)",

//                       boxShadow: "0px 0px 6px 3px #FFFFFF40 inset",
//                     }}
//                     className="flex flex-col gap-[18px] rounded-[16px]  bg-[#3d3d3d66] p-2.5 border-primary text-white"
//                   >
//                     <div className="relative h-[296px] content-center lg:h-auto md:h-auto">
//                       <Image
//                         src="/images/f_1.jpg"
//                         width={424}
//                         height={296}
//                         alt="Linkpthirteen"
//                         className="h-[296px] w-full flex-1 rounded-[16px] object-cover"
//                       />
//                       <button
//                         color="light_green_200_f2"
//                         size="lg"
//                         className="absolute left-5 top-[23.50px] m-auto min-w-[88px] rounded-[16px] px-3.5 font-medium uppercase"
//                       >
//                         For Sale
//                       </button>
//                     </div>
//                     <div className="mb-2.5 ml-5 mr-1.5 md:mx-0">
//                       <div>
//                         <div className="flex flex-wrap items-center justify-between gap-5">
//                           <h1 className="text-[19px] font-medium lg:text-[16px]">
//                             Skyper Pool Apartment
//                           </h1>
//                           <h2 className="text-[21px] font-semibold !text-light_green-400 lg:text-[17px]">
//                             AED 280,000
//                           </h2>
//                         </div>
//                         <div className="mt-1 flex items-center gap-2">
//                           {/* <Image
//                               src="img_icon_white_a700.svg"
//                               width={20}
//                               height={20}
//                               alt="Icon"
//                               className="h-[20px] w-[20px]"
//                             /> */}
//                           <CiLocationOn size={20} />
//                           <p className="text-[16px] font-normal lg:text-[13px]">
//                             Arabian Ranches
//                           </p>
//                         </div>
//                         <div className="mt-[22px] flex">
//                           <div className="flex w-[24%] items-center justify-center gap-[9px] border-r border-solid border-gray-200">
//                             {/* <Image
//                                 src="img_icon_white_a700_20x20.svg"
//                                 width={20}
//                                 height={20}
//                                 alt="Icon"
//                                 className="h-[20px] w-[20px]"
//                               /> */}
//                             <FaBed size={20} />
//                             <p className="text-[16px] font-normal lg:text-[13px]">
//                               4 Beds
//                             </p>
//                           </div>
//                           <div className="ml-3.5 flex w-[26%] items-center justify-center gap-[9px] border-r border-solid border-gray-200">
//                             {/* <Image
//                                 src="img_thumbs_up.png"
//                                 width={20}
//                                 height={20}
//                                 alt="Thumbsup"
//                                 className="h-[20px] w-[20px] object-cover"
//                               /> */}
//                             <PiBathtub size={20} />
//                             <p className="text-[16px] font-normal lg:text-[13px]">
//                               2 Baths
//                             </p>
//                           </div>
//                           <div className="flex flex-1 items-center gap-[9px] px-3.5">
//                             <MdCopyAll size={20} />
//                             <p className="text-[16px] font-normal lg:text-[13px]">
//                               450 sqft
//                             </p>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </React.Fragment>
//             ))}
//           </div>
//         </div>
//         <div className="flex h-[42px] items-center justify-center" />
//       </div>
//       {/* <TestimonialsSection /> */}
//     </>
//   );
// }
"use client";
import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
import { FaBed } from "react-icons/fa";
import { PiBathtub } from "react-icons/pi";
import { MdCopyAll } from "react-icons/md";
import PropertyCard from "@/app/_comonents/PropertyCard";

export default function SimilarProperties({ properties }) {
  return (
    <>
      {/* Similar Properties Section */}
      <div className="relative z-[3] flex flex-col items-center gap-6 text-white">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          YOU ALSO MIGHT LIKE
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.slice(0, 3).map((property, index) => (
            <PropertyCard property={property} key={index} index={index} />
          ))}
        </div>
      </div>
    </>
  );
}
