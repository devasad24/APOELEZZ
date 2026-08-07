// "use client";

// import React from "react";
// import Image from "next/image";
// import { CiLocationOn } from "react-icons/ci";
// import { FaBed } from "react-icons/fa";
// import { PiBathtub } from "react-icons/pi";
// import { MdCopyAll } from "react-icons/md";
// import Search from "@/app/_home_components/filter";
// export default function DeveloperPropertyList() {
//   return (
//     <>
//       {/* featured properties section */}
//       <div className="relative z-[3] flex flex-col items-center gap-[34px] px-14 md:px-5 sm:px-4 text-white py-11">
//         <Search />
//         <div className="container-xs mx-auto w-full gap-[30px] px-[200px] overflow-hidden  z-40 grid grid-cols-3">
//           {[...Array(12)].map(() => (
//             <React.Fragment key={Math.random()}>
//               <div className="px-[15px] min-w-[300px] ">
//                 <div
//                   style={{
//                     backdropFilter: "blur(14px)",

//                     boxShadow: "0px 0px 6px 3px #FFFFFF40 inset",
//                   }}
//                   className="flex flex-col gap-[18px] rounded-[16px]  bg-[#3d3d3d66] p-2.5 border-primary text-white"
//                 >
//                   <div className="relative h-[296px] content-center lg:h-auto md:h-auto">
//                     <Image
//                       src="/images/f_1.jpg"
//                       width={424}
//                       height={296}
//                       alt="Linkpthirteen"
//                       className="h-[296px] w-full flex-1 rounded-[16px] object-cover"
//                     />
//                     <button
//                       color="light_green_200_f2"
//                       size="lg"
//                       className="absolute left-5 top-[23.50px] m-auto min-w-[88px] rounded-[16px] px-3.5 font-medium uppercase"
//                     >
//                       For Sale
//                     </button>
//                   </div>
//                   <div className="mb-2.5 ml-5 mr-1.5 md:mx-0">
//                     <div>
//                       <div className="flex flex-wrap items-center justify-between gap-5">
//                         <h1 className="text-[19px] font-medium lg:text-[16px]">
//                           Skyper Pool Apartment
//                         </h1>
//                         <h2 className="text-[21px] font-semibold !text-light_green-400 lg:text-[17px]">
//                           AED 280,000
//                         </h2>
//                       </div>
//                       <div className="mt-1 flex items-center gap-2">
//                         {/* <Image
//                               src="img_icon_white_a700.svg"
//                               width={20}
//                               height={20}
//                               alt="Icon"
//                               className="h-[20px] w-[20px]"
//                             /> */}
//                         <CiLocationOn size={20} />
//                         <p className="text-[16px] font-normal lg:text-[13px]">
//                           Arabian Ranches
//                         </p>
//                       </div>
//                       <div className="mt-[22px] flex">
//                         <div className="flex w-[24%] items-center justify-center gap-[9px] border-r border-solid border-gray-200">
//                           {/* <Image
//                                 src="img_icon_white_a700_20x20.svg"
//                                 width={20}
//                                 height={20}
//                                 alt="Icon"
//                                 className="h-[20px] w-[20px]"
//                               /> */}
//                           <FaBed size={20} />
//                           <p className="text-[16px] font-normal lg:text-[13px]">
//                             4 Beds
//                           </p>
//                         </div>
//                         <div className="ml-3.5 flex w-[26%] items-center justify-center gap-[9px] border-r border-solid border-gray-200">
//                           {/* <Image
//                                 src="img_thumbs_up.png"
//                                 width={20}
//                                 height={20}
//                                 alt="Thumbsup"
//                                 className="h-[20px] w-[20px] object-cover"
//                               /> */}
//                           <PiBathtub size={20} />
//                           <p className="text-[16px] font-normal lg:text-[13px]">
//                             2 Baths
//                           </p>
//                         </div>
//                         <div className="flex flex-1 items-center gap-[9px] px-3.5">
//                           <MdCopyAll size={20} />
//                           <p className="text-[16px] font-normal lg:text-[13px]">
//                             450 sqft
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </React.Fragment>
//           ))}
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
import Search from "@/app/_home_components/filter";
import { useState, useEffect } from "react";
import PropertyCard from "@/app/_comonents/PropertyCard";
import PropertyCardSkeleton from "@/app/_comonents/propertyCardSkeleton";
import useApi from "@/utils/useApi";
import {
  IoArrowBackCircleOutline,
  IoArrowForwardCircleOutline,
} from "react-icons/io5";
export default function DeveloperPropertyList({ developerDetails }) {
  const [filters, setFilters] = useState({});
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { fetchData } = useApi();
  const [pagination, setPagination] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const params = {
    location: filters["location"]?.label,
    listing_type: filters["lookingFor"]?.value,
    property_type: filters["propertyType"]?.label,
    bedrooms: filters["bedrooms"]?.value,
    max_price: filters["budget"]?.value,
    developer: developerDetails?.developerName,
    // listing_title: filtersApplied["listing_title"],
  };

  const fetchListings = (page = 1, filters, callBack) => {
    console.log(filters, "filters");
    fetchData(
      `/listings?page=${page}`,
      {
        method: "GET",
        params: filters,
      },
      (res, status) => {
        callBack(res, status);
      }
    );
  };
  function onSearch() {
    setIsLoading(true);

    fetchListings(1, params, (res, status) => {
      if (status) {
        setProperties(res?.data?.data);
        setIsLoading(false);
        setPagination({ ...res?.data, data: {} || {} }); // Store pagination info
        setCurrentPage(res?.data?.current_page);
      }
    });
  }
  useEffect(() => {
    if (developerDetails?.developerName) {
      fetchListings(
        1,
        { developer: developerDetails?.developerName },
        (res, status) => {
          setIsLoading(false);
          setProperties(res?.data?.data);
          setPagination({ ...res?.data, data: {} || {} }); // Store pagination info
          setCurrentPage(res?.data?.current_page);
        }
      );
    }
  }, [developerDetails]);

  return (
    <>
      {/* Listings Section */}
      <section className="py-12 flex flex-col gap-10 px-[7%]">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase">
          {developerDetails?.developerName}'S LISTINGS
        </h2>
        {/* Developer Properties Section */}
        {properties?.length == 0 ? (
          <h3 className="text-xl primary-color text-center">
            No Listings Available for developer {developerDetails?.developerName}
          </h3>
        ) : (
          <div className="relative z-[3] flex flex-col items-center gap-10 text-white">
            {/* Search Filter */}
            {/* <div className="w-full">
              <Search filters={filters} setFilters={setFilters} />
            </div> */}

            {/* Properties Grid */}
            <div className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {isLoading ? (
                  // Show skeletons while loading
                  Array.from({ length: 6 }).map((_, index) => (
                    <PropertyCardSkeleton key={index} />
                  ))
                ) : properties?.length > 0 ? (
                  properties.map((property, index) => (
                    <PropertyCard property={property} key={index} index={index} />
                  ))
                ) : (
                  <h3 className="">
                    No Listings Available for developer{" "}
                    {developerDetails?.developerName}
                  </h3>
                )}
              </div>
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
                    fetchListings(currentPage - 1, params, (res) => {
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
                <div className="gap-3 grid grid-cols-5 items-center">
                  {Array.from({ length: pagination?.last_page || 1 }).map(
                    (_, index) => (
                      <div
                        key={index}
                        className={`h-[10px] w-[10px] rounded-full ${currentPage === index + 1
                          ? "box_primary"
                          : "bg-gray-300"
                          }`}
                        onClick={() =>
                          fetchListings(index + 1, params, (res) => {
                            setProperties(res?.data?.data);
                            setPagination(res?.data);
                            setCurrentPage(res?.data?.current_page);
                          })
                        }
                      />
                    )
                  )}
                </div>
                {/* Next Button */}
                <button
                  className={`text-gray-600 ${!pagination?.next_page_url
                    ? "opacity-50 cursor-not-allowed"
                    : "cursor-pointer"
                    }`}
                  disabled={!pagination?.next_page_url}
                  onClick={() => {
                    setIsLoading(true);
                    fetchListings(currentPage + 1, params, (res) => {
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
            </div>
          </div>
        )}

      </section>
    </>
  );
}
