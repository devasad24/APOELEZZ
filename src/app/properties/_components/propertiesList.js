// "use client";

// import React from "react";
// import Image from "next/image";
// import { CiLocationOn } from "react-icons/ci";
// import { FaBed } from "react-icons/fa";
// import { PiBathtub } from "react-icons/pi";
// import { MdCopyAll } from "react-icons/md";
// export default function PropertiesList() {
//   const [sliderState, setSliderState] = React.useState(0);
//   const sliderRef = React.useRef(null);

//   return (
//     <>
//       {/* featured properties section */}
//       <div className="relative z-[3] flex flex-col items-center gap-[34px] px-14 md:px-5 sm:px-4 text-white py-11">
//         <div className="flex w-[78%] flex-col items-center gap-[68px] lg:w-full md:w-full sm:gap-[34px]">
//           <div className="flex flex-col items-center self-stretch">
//             <h1 className="!font-dmsans text-[80px] font-bold uppercase tracking-[-1.60px] lg:text-[48px] md:text-[48px]">
//               dISCOVER A WORLD OF POSIBILITIES
//             </h1>
//             <p className="!font-inter text-[22px] font-thin tracking-[-0.79px] lg:text-[18px]">
//               Our portfolio of properties is as diverse as your dreams. Explore
//               the following categories to find the perfect property that
//               resonates with your vision of home
//             </p>
//           </div>
//           <div className="container-xs mx-auto w-full gap-[30px] px-[200px] overflow-hidden  z-40 grid grid-cols-3">
//             {[...Array(12)].map(() => (
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

import PropertyCard from "@/app/_comonents/PropertyCard";
import PropertyCardSkeleton from "@/app/_comonents/propertyCardSkeleton";
import {
  IoArrowBackCircleOutline,
  IoArrowForwardCircleOutline,
} from "react-icons/io5";

export default function PropertiesList({
  properties = [],
  justList,
  setProperties,
  setIsLoading,
  isLoading,
  setPagination,
  setCurrentPage,
  currentPage,
  fetchListings,
  pagination,
}) {
  return (
    <>
      {/* Properties section */}
      <div className="relative z-[3] flex flex-col items-center gap-6 text-white">
        <div className="flex w-full flex-col items-center gap-12">
          {/* Heading Section */}
          {!justList && (
            <div className="flex flex-col gap-6 items-center text-center">
              {/* <h1 className="!font-dmsans text-[32px] sm:text-[40px] md:text-[48px] lg:text-[60px] xl:text-[80px] font-bold uppercase tracking-[-1.60px] leading-tight"> */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                DISCOVER A WORLD OF POSSIBILITIES
              </h2>
              <p className="text-center text-base sm:text-lg md:text-xl text-white mx-auto">
                Our portfolio of properties is as diverse as your dreams.
                Explore the following categories to find the perfect property
                that resonates with your vision of home
              </p>
            </div>
          )}

          {/* Properties Grid */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {isLoading
              ? // Show skeletons while loading
              Array.from({ length: 6 }).map((_, index) => (
                <PropertyCardSkeleton key={index} />
              ))
              : properties.map((property, index) => (
                <PropertyCard
                  property={property}
                  key={index}
                  index={index}
                />
              ))}
          </div>
          {!justList && properties?.length > 0 && (
            <div className="flex gap-3 justify-center py-4 pb-8">
              {/* Previous Button */}
              <button
                className={`text-gray-600  ${!pagination?.prev_page_url
                  ? "opacity-50 cursor-not-allowed"
                  : "cursor-pointer"
                  }`}
                disabled={!pagination?.prev_page_url}
                onClick={() => {
                  setIsLoading(true);
                  fetchListings(currentPage - 1, {}, (res) => {
                    setProperties(res?.data?.data);
                    setPagination(res?.data);
                    setCurrentPage(res?.data?.current_page);
                    setIsLoading(false);
                  });
                }}
              >
                <IoArrowBackCircleOutline size={44} />
              </button>
              {/* Page Dots */}
              {/* <div className="gap-3 grid grid-cols-5 items-center">
                {Array.from({ length: pagination?.last_page || 1 }).map(
                  (_, index) => (
                    <div
                      key={index}
                      className={`h-[10px] w-[10px] rounded-full ${currentPage === index + 1
                        ? "box_primary"
                        : "bg-gray-300"
                        }`}
                      onClick={() =>
                        fetchListings(index + 1, {}, (res) => {
                          setProperties(res?.data?.data);
                          setPagination(res?.data);
                          setCurrentPage(res?.data?.current_page);
                        })
                      }
                    />
                  )
                )}
              </div> */}
              {/* Next Button */}
              <button
                className={`text-gray-600 ${!pagination?.next_page_url
                  ? "opacity-50 cursor-not-allowed"
                  : "cursor-pointer"
                  }`}
                disabled={!pagination?.next_page_url}
                onClick={() => {
                  setIsLoading(true);
                  fetchListings(currentPage + 1, {}, (res) => {
                    setProperties(res?.data?.data);
                    setPagination(res?.data);
                    setCurrentPage(res?.data?.current_page);
                    setIsLoading(false);
                  });
                }}
              >
                <IoArrowForwardCircleOutline size={44} />
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
