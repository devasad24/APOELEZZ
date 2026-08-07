import React from "react";
import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
import { FaBed } from "react-icons/fa";
import { PiBathtub } from "react-icons/pi";
import { MdCopyAll } from "react-icons/md";
import Link from "next/link";
const PropertyCard = ({ property, index }) => {
  return (
    <div>
      {" "}
      <Link key={index} href={`/properties/${property?.id}`}>
        <div className="w-full h-full">
          <div
            style={{
              backdropFilter: "blur(14px)",
              boxShadow: "0px 0px 6px 3px #FFFFFF40 inset",
            }}
            className="flex flex-col gap-5 rounded-[16px] bg-[#3d3d3d66] p-4 border-primary text-white h-full"
          >
            <div className="relative aspect-16/9 w-full content-center">
              <Image
                // src={property?.banner_img}
                src={`${property?.banner_img?.startsWith("http")
                  ? property.banner_img
                  : `${process.env.NEXT_PUBLIC_BASE_URL?.slice(0, -4)}/${property?.banner_img}`}`}
                onError={(e) => {
                  e.target.src = "/images/placeholder_home.avif";
                }}
                width={424}
                height={296}
                alt="Property Image"
                className="h-full w-full aspect-16/9 flex-1 rounded-[16px] object-cover"
              />
              <div className="absolute left-2 top-2 m-auto min-w-[100px] text-center w-fit rounded-[16px] px-3 py-1 text-xs sm:text-sm font-medium uppercase bg-[#D4C695F2]">
                {property?.listing_type}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h2
                title={property?.listing_title}
                className="text-[16px] sm:text-[17px] md:text-[19px] font-medium whitespace-nowrap overflow-hidden text-ellipsis"
              >
                {property?.listing_title}
              </h2>
              <h3 className="text-[16px] sm:text-[18px] md:text-[21px] font-semibold text-[#D4C695F2]">
                {property?.currency} {property?.price}
              </h3>
              <div className="grid grid-cols-8 gap-2">
                <div className="flex items-center justify-center">
                  <CiLocationOn size={18} />
                </div>
                <p
                  className="col-span-7 text-[13px] sm:text-[14px] md:text-[16px] font-normal truncate"
                  style={{ maxWidth: "100%" }} // adjust width as needed
                  title={property?.area}
                >
                  {property?.area}
                </p>
              </div>
              <div className="grid grid-cols-3 py-2">
                <div className="flex flex-col xl:flex-row justify-center text-center gap-y-1 gap-x-2 border-r border-solid border-gray-200 px-1">
                  <div className="flex items-center justify-center">
                    <FaBed size={16} />
                  </div>
                  <p className="text-[10px] sm:text-[11px] font-light text-gray-300">
                    {property?.bedrooms}
                  </p>
                </div>
                <div className="flex flex-col xl:flex-row justify-center text-center gap-y-1 gap-x-2 border-r border-solid border-gray-200 px-1">
                  <div className="flex items-center justify-center">
                    <PiBathtub size={16} />
                  </div>
                  <p className="text-[10px] sm:text-[11px] font-light text-gray-300">
                    {property?.bathrooms}
                  </p>
                </div>
                <div className="flex flex-col xl:flex-row justify-center text-center gap-y-1 gap-x-2 px-1">
                  <div className="flex items-center justify-center">
                    <MdCopyAll size={16} />
                  </div>
                  <p className="text-[10px] sm:text-[11px] font-light text-gray-300">
                    {property?.size} {property?.size ? property?.size_unit : ''}
                  </p>
                </div>
              </div>

              {/* <div className="mt-3 sm:mt-4 md:mt-[22px] flex">
                  <div className="flex  items-center justify-center gap-1 sm:gap-[9px] border-r pr-2 border-solid border-gray-200">
                    <FaBed size={14} className="sm:text-base md:text-lg" />
                    <p className="text-[12px] sm:text-[13px] md:text-[16px] font-normal">
                      {property?.bedrooms}
                    </p>
                  </div>
                  <div className="ml-2 sm:ml-3.5 pr-2 flex items-center justify-center gap-1 sm:gap-[9px] border-r border-solid border-gray-200">
                    <PiBathtub size={14} className="sm:text-base md:text-lg" />
                    <p className="text-[12px] sm:text-[13px] md:text-[16px] font-normal">
                      {property?.bathrooms}
                    </p>
                  </div>
                  <div className="flex flex-1 items-center gap-1 sm:gap-[9px] px-2 sm:px-3.5">
                    <MdCopyAll size={14} className="sm:text-base md:text-lg" />
                    <p className="text-[12px] sm:text-[13px] md:text-[16px] font-normal">
                      {property?.size} {property?.size_unit}
                    </p>
                  </div>
                </div> */}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PropertyCard;
