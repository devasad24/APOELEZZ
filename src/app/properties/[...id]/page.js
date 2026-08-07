// import React from "react";
// import Hero from "../../_comonents/Hero";
// import Image from "next/image";
// import { IoIosArrowRoundBack } from "react-icons/io";
// import { PiFlagPennantFill } from "react-icons/pi";
// import Details from "./_components/details";
// import SimilarProperties from "./_components/similarProperties";
// const Page = () => {
//   return (
//     <div>
//       <Hero>
//         <div className="px-[40px] pt-11 text-white">
//           <button className="btn_secondary px-5 py-3 rounded-[14px]  flex gap-3 items-center">
//             <IoIosArrowRoundBack size={18} />
//             Go Back
//           </button>
//           <h1 className="text-[120px] font-[700] uppercase   leading-[140px]">
//             The grand estate
//           </h1>
//           <div className="flex flex-col gap-3 items-end">
//             <div className="flex gap-4 items-center">
//               <button className="btn_secondary px-5 py-3 rounded-[14px]  flex gap-3 items-center">
//                 EMAAR Properties
//               </button>
//               <span className="flex gap-3 items-center">
//                 <PiFlagPennantFill size={18} />
//                 123 Luxury Lane
//               </span>
//             </div>
//             <div>
//               <h3 className="text-[60px]">AED 280,000</h3>
//             </div>
//           </div>
//         </div>
//       </Hero>
//       <div className="relative z-10">
//         {/* <Image
//           src={"/images/singleProperty.png"}
//           width={"100vw"}
//           height={"100vh"}
//         /> */}
//         <div
//           style={{
//             width: "100%",
//             backgroundColor: "red",
//           }}
//         >
//           <img
//             src="/images/singleProperty.png"
//             alt="home"
//             layout="fill"
//             objectFit="cover"
//           />
//           {/* the point is */}
//         </div>
//         <Details />
//         <SimilarProperties />
//       </div>
//     </div>
//   );
// };

// export default Page;
"use client";
import Hero from "../../_comonents/Hero";
import Image from "next/image";
import { IoIosArrowRoundBack } from "react-icons/io";
import { PiBookmarkFill, PiBuilding, PiBuildingFill, PiFlagPennantFill, PiMapPinFill, PiToolbox } from "react-icons/pi";
import Details from "./_components/details";
import SimilarProperties from "./_components/similarProperties";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import useApi from "@/utils/useApi";
import { LoadScript } from "@react-google-maps/api";
import { Pi } from "lucide-react";
import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from "react-icons/io5";

const PropertyDetailPage = () => {
  const { id } = useParams();
  const { fetchData } = useApi();
  const router = useRouter();

  const [formData, setFormData] = useState({
    leadName: "",
    leadEmail: "",
    leadContact: "",
    note: "",
  });

  const [propertyDetails, setPropertyDetails] = useState({});
  const [similarProperties, setSimilarProperties] = useState([]);
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

  function getSimilarProperties() {
    fetchListings(
      1,
      {
        location: propertyDetails["area"],
      },
      (res, status) => {
        if (status) {
          setSimilarProperties(
            res?.data?.data?.filter((i) => i.id != propertyDetails["id"])
          );
          setIsloading(false);
        }
      }
    );
  }
  useEffect(() => {
    fetchData(
      `/listings/${id}`,
      {
        method: "GET",
      },
      (res, status) => {
        if (status) {
          setPropertyDetails(res?.data || {});
        }
      }
    );
  }, [id]);

  useEffect(() => {
    if (Object.values(propertyDetails)?.length > 0) getSimilarProperties();
  }, [propertyDetails]);

  // CAROUSEL 
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % allImages.length);
  };
  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? allImages.length - 1 : prev - 1
    );
  };
  // MERGE IMAGE
  const baseUrlImage = process.env.NEXT_PUBLIC_BASE_URL?.slice(0, -4);
  const allImages = [
    ...(propertyDetails?.banner_img
      ? [
        propertyDetails.banner_img.startsWith("http")
          ? propertyDetails.banner_img
          : `${baseUrlImage}/${propertyDetails.banner_img}`,
      ]
      : []),
    ...(propertyDetails?.images?.map((img) =>
      img?.img_url?.startsWith("http")
        ? img.img_url
        : `${baseUrlImage}/${img.img_url}`
    ) || []),
  ];


  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}>
      <div>
        <Hero>
          <div className="flex flex-col gap-6 text-white">
            {/* Back Button */}
            <button
              onClick={() => router.back()}
              className="btn_secondary w-fit px-3 py-2 rounded-[14px] flex gap-3 items-center text-sm sm:text-base"
            >
              <IoIosArrowRoundBack
                size={16}
                className="sm:text-lg md:text-xl"
              />
              Go Back
            </button>

            {/* Property Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center">
              {propertyDetails?.listing_title}
            </h2>

            {/* Property Details */}
            <div className="flex flex-col flex-wrap gap-3 justify-start items-start">
              {propertyDetails?.developer ? (
                <div className="flex gap-2 items-center">
                  <PiBuildingFill
                    size={20}
                    className="sm:text-lg md:text-xl"
                  />
                  <p>{propertyDetails?.developer}</p>
                </div>
              ) : null}
              {propertyDetails?.listing_type ? (
                <div className="flex gap-2 items-center">
                  <PiBookmarkFill
                    size={20}
                    className="sm:text-lg md:text-xl"
                  />
                  <p>{propertyDetails?.listing_type}</p>
                </div>
              ) : null}
              {propertyDetails?.area || propertyDetails?.city || propertyDetails?.country ? (
                <div className="flex gap-2 items-center">
                  <PiMapPinFill
                    size={20}
                    className="sm:text-lg md:text-xl"
                  />
                  <div className="flex flex-wrap gap-1">
                    {propertyDetails?.area ? (
                      <p>{propertyDetails?.area} | </p>
                    ) : null}
                    {propertyDetails?.city ? (
                      <p>{propertyDetails?.city} | </p>
                    ) : null}
                    {propertyDetails?.country ? (
                      <p>{propertyDetails?.country}</p>
                    ) : null}
                  </div>
                </div>
              ) : null}
            </div>
            {propertyDetails?.price ? (
              <div className="flex justify-end">
                <div className="flex flex-col gap-1 justify-center text-center">
                  {propertyDetails?.is_start_price == 1 ? (
                    <span>Starting from</span>
                  ) : null}
                  <div className="btn_secondary px-6 py-2 rounded-[14px] flex items-center gap-1 font-semibold text-white text-center">
                    <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
                      {propertyDetails?.currency} {propertyDetails?.price}
                    </span>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </Hero>

        <div className="relative z-10 -mt-5">
          {/* IMAGES */}
          <div className="w-full flex flex-col items-center justify-center lg:px-[7%] relative">
            {allImages.length > 0 && (
              <div className="relative w-full overflow-hidden rounded-[16px] max-h-[600px] aspect-16/9">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {allImages.map((src, index) => (
                    <div key={index} className="min-w-full max-h-[600px] h-full aspect-16/9">
                      <img
                        src={src}
                        alt={`Property image ${index + 1}`}
                        className="w-full h-full object-cover w-full overflow-hidden rounded-[16px] max-h-[600px] aspect-16/9"
                        onError={(e) => {
                          e.target.src = "/images/placeholder_home.avif";
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
            {allImages.length > 0 && (
              <div className="flex items-center justify-center gap-6 pt-6">
                {/* Prev */}
                <button
                  onClick={prevSlide}
                  className="text-gray-600"
                >
                  <IoArrowBackCircleOutline size={40} />
                </button>
                <div className="flex justify-center gap-2">
                  {allImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-2 w-2 rounded-full ${currentIndex === idx ? "bg-gray-600" : "bg-gray-600/50"
                        }`}
                    />
                  ))}
                </div>
                {/* Next */}
                <button
                  onClick={nextSlide}
                  className="text-gray-600"
                >
                  <IoArrowForwardCircleOutline size={40} />
                </button>
              </div>
            )}
          </div>

          {/* Property Details Sections */}
          <Details propertyDetails={propertyDetails} />

          {similarProperties?.length > 0 && (
            <div className="py-12 px-[7%] border-t border-white">
              <SimilarProperties properties={similarProperties} />
            </div>
          )}
        </div>
      </div>
    </LoadScript>
  );
};

export default PropertyDetailPage;
