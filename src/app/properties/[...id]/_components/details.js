"use client";
import { useState } from "react";
import {
  MapPin,
  Share2,
  Download,
  Printer,
  Camera,
  Linkedin,
} from "lucide-react";
import Image from "next/image";
import useApi from "@/utils/useApi";
import GoogleMaps from "@/app/_comonents/map";
import { PiBedFill, PiBuildingFill, PiBuildingsFill, PiCopyFill, PiHandCoinsFill, PiScalesFill, PiToiletFill, PiVectorThreeFill, PiVectorTwoFill } from "react-icons/pi";

export default function Details({ propertyDetails }) {
  const [formData, setFormData] = useState({
    leadName: "",
    leadEmail: "",
    leadContact: "",
    notes: "",
    developer: propertyDetails?.developer || "",
    project: propertyDetails?.project || "",
    enquiryType: propertyDetails?.bedrooms || "",
    leadSource: "Website Inquiry"
  });
  const { fetchData } = useApi();

  function handleSubmit(e) {
    fetchData(
      `/create-lead`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: formData,
      },
      (res, status) => {
        if (status) {
          alert("Form is successfully submitteds!");
        } else {
          alert("Form cannot be submitted");
        }
      }
    );
  }
  return (
    <div
      className="min-h-screen px-[7%] py-12 text-white flex flex-col gap-10"
      style={{
        background:
          "linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(244, 218, 121, 0.44) 57.83%, rgba(0, 0, 0, 0.8) 100%)",
      }}
    >
      {/* OVERVIEW */}
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl lg:text-3xl font-bold text-[#AE7F2C]">Overview</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {propertyDetails?.project ? (
            <div className="p-5 rounded-[14px] flex flex-col items-center justify-center gap-2 w-full text-white text-center border border-white">
              <PiBuildingFill size={22} />
              <p className="capitalize">
                {propertyDetails?.developer ? `${propertyDetails?.developer} | ` : ""}
                {propertyDetails?.project}
              </p>
            </div>
          ) : null}
          {propertyDetails?.bedrooms ? (
            <div className="p-5 rounded-[14px] flex flex-col items-center justify-center gap-2 w-full text-white text-center border border-white">
              <PiBedFill size={22} />
              <p className="capitalize">
                {propertyDetails?.bedrooms}
              </p>
            </div>
          ) : null}
          {propertyDetails?.bathrooms ? (
            <div className="p-5 rounded-[14px] flex flex-col items-center justify-center gap-2 w-full text-white text-center border border-white">
              <PiToiletFill size={22} />
              <p className="capitalize">
                {propertyDetails?.bathrooms}
              </p>
            </div>
          ) : null}
          {propertyDetails?.size ? (
            <div className="p-5 rounded-[14px] flex flex-col items-center justify-center gap-2 w-full text-white text-center border border-white">
              <PiVectorTwoFill size={22} />
              <p className="flex flex-wrap gap-1">
                {propertyDetails?.size} {propertyDetails?.size_unit}
              </p>
            </div>
          ) : null}
          {propertyDetails?.handover ? (
            <div className="p-5 rounded-[14px] flex flex-col items-center justify-center gap-2 w-full text-white text-center border border-white">
              <PiHandCoinsFill size={22} />
              <p className="flex flex-wrap gap-1">
                {propertyDetails?.handover}
              </p>
            </div>
          ) : null}
        </div>
      </div>
      {/* DETAILS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Main Content - 2/3 width on large screens */}
        <div className="lg:col-span-2 flex flex-col gap-10">
          {/* DESCRIPTION  */}
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl lg:text-3xl font-bold text-[#AE7F2C]">Description</h1>
            <div className="flex flex-col gap-2">
              <div
                dangerouslySetInnerHTML={{
                  __html: propertyDetails?.description || "",
                }}
              />
            </div>
          </div>
          {/* MAP */}
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl lg:text-3xl font-bold text-[#AE7F2C]">
              Map
            </h1>
            <div className="w-full h-[400px] relative rounded-[16px]">
              <GoogleMaps
                lat={propertyDetails?.latlong?.split(",")[0]}
                lon={propertyDetails?.latlong?.split(",")[1]}
              />
            </div>
          </div>
        </div>

        {/* Sidebar - 1/3 width on large screens */}
        <div className="lg:col-span-1 flex flex-col gap-10">
          {/* Share Section */}
          {/* <div className=" flex justify-between items-center rounded-lg px-6 py-3 mb-6 border bg-[#3D3D3D66]">
            <div className="flex items-center gap-2 ">
              <Share2 className="w-5 h-5" />
              <span className="font-medium">Share</span>
            </div>
            <div className="flex gap-3">
              <button className="p-2  rounded-md hover:bg-zinc-700 transition">
                <Download className="w-5 h-5" />
              </button>
              <button className="p-2  rounded-md hover:bg-zinc-700 transition">
                <Printer className="w-5 h-5" />
              </button>
              <button className="p-2  rounded-md hover:bg-zinc-700 transition">
                <Camera className="w-5 h-5" />
              </button>
              <button className="p-2  rounded-md hover:bg-zinc-700 transition">
                <Linkedin className="w-5 h-5" />
              </button>
            </div>
          </div> */}
          {/* NEARBY */}
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl lg:text-3xl font-bold text-[#AE7F2C]">
              Nearby Locations
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
              {propertyDetails?.nearby?.map((near, ind) => {
                return (
                  <div
                    key={ind}
                    className="btn_secondary px-6 py-3 rounded-[14px] flex items-center justify-center gap-1 w-full text-white text-center"
                  >
                    {near?.name}
                  </div>
                );
              })}
            </div>
          </div>
          {/* FORM */}
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl lg:text-3xl font-bold text-[#AE7F2C]">
              Contact us
            </h1>
            <div className="rounded-[16px] p-5 border flex flex-col gap-4">
              {/* <h1 className="text-2xl lg:text-3xl font-bold text-[#AE7F2C] text-center">
                Contact us
              </h1> */}
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  value={formData?.leadName}
                  onChange={(e) =>
                    setFormData((pre) => ({
                      ...pre,
                      leadName: e?.target?.value,
                    }))
                  }
                  className="w-full px-3 py-2  border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-600"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="+1 (XXX) XXX-XXXX"
                  value={formData?.leadContact}
                  onChange={(e) =>
                    setFormData((pre) => ({
                      ...pre,
                      leadContact: e?.target?.value,
                    }))
                  }
                  className="w-full px-3 py-2  border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-600"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="your@email.com"
                  value={formData?.leadEmail}
                  onChange={(e) =>
                    setFormData((pre) => ({
                      ...pre,
                      leadEmail: e?.target?.value,
                    }))
                  }
                  className="w-full px-3 py-2  border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-600"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Inquiry for
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="your@email.com"
                  value={formData?.enquiryType}
                  className="w-full px-3 py-2  border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-600"
                  readOnly={true}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="note"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Note
                </label>
                <textarea
                  id="note"
                  rows={3}
                  placeholder="Type your Message..."
                  value={formData?.notes}
                  onChange={(e) =>
                    setFormData((pre) => ({
                      ...pre,
                      notes: e?.target?.value,
                    }))
                  }
                  className="w-full px-3 py-2  border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-600"
                ></textarea>
              </div>
              <button
                type="submit"
                onClick={() => handleSubmit()}
                className="w-full btn_primary cursor-pointer  hover:bg-zinc-700 text-white font-medium py-2 px-4 rounded-md transition duration-200"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// <section>
//             <h1 className="text-3xl md:text-4xl font-bold mb-4">
//               Planning and Development
//             </h1>
//             <p className="text-gray-300 mb-6">
//               The planning and development of this Estate began several years
//               ago, with a team of experts working tirelessly to bring this
//               vision to life. From the initial concept to the final
//               construction, every detail was carefully considered to ensure
//               that the Grand Estate would be a truly exceptional community.
//             </p>

//             {/* Map Section */}
//             <div className="relative h-64 md:h-80 w-full rounded-lg overflow-hidden mb-8">
//               <Image
//                 src="/images/map.png"
//                 alt="Property location map"
//                 fill
//                 className="object-cover"
//               />
//               <button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-black/90 transition">
//                 <MapPin size={18} />
//                 <span>See on map</span>
//               </button>
//             </div>
//           </section>

//           <section>
//             <h2 className="text-2xl md:text-3xl font-bold mb-4">
//               Design and Architecture
//             </h2>
//             <p className="text-gray-300 mb-6">
//               The Grand Estate's design and architecture were inspired by the
//               finest luxury estates around the world. Each home was designed
//               to be a masterpiece of modern design, with clean lines, sleek
//               surfaces, and an emphasis on natural light and ventilation.
//             </p>

//             {/* Interior Images */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-2 h-48 md:h-64">
//               {propertyDetails?.images?.map((image, ind) => {
//                 return (
//                   <div
//                     key={ind}
//                     className="relative overflow-hidden rounded-l-lg"
//                   >
//                     <Image
//                       src={image?.img_url}
//                       alt={image?.img_alt}
//                       fill
//                       className="object-cover"
//                     />
//                   </div>
//                 );
//               })}
//             </div>
//           </section>
//           <section className="mb-10">
//             <h1 className="text-3xl md:text-4xl font-bold mb-6">
//               EMAAR Properties
//             </h1>

//             <p className="text-gray-300 mb-4">
//               EMAAR Properties is one of the UAE's most prominent real estate
//               developers, renowned for shaping iconic skylines and creating
//               master-planned communities. With decades of experience, EMAAR
//               delivers luxury, innovation, and long-term value in every
//               project.
//             </p>

//             <p className="text-gray-300 mb-4">
//               The company specializes in master-planned residential
//               communities, high-rise luxury towers, commercial developments,
//               and mixed-use projects that combine comfort with functionality.
//               EMAAR is celebrated for creating some of Dubai's most
//               prestigious landmarks, including Downtown Dubai, the Dubai
//               Marina Towers, and the serene villa enclave of Arabian Ranches.
//             </p>

//             <p className="text-gray-300">
//               Renowned for delivering projects on time with enduring value,
//               EMAAR has earned the trust of homeowners and global investors
//               alike. Each project is designed with lifestyle in mind, offering
//               premium amenities, strategic locations, and an uncompromising
//               standard of quality. Choosing EMAAR means investing in
//               excellence, innovation, and a future-ready community.
//             </p>
//           </section>

//           <section className="mb-10">
//             <h2 className="text-2xl md:text-3xl font-bold mb-6">Community</h2>

//             <p className="text-gray-300 mb-6">
//               The Grand Estate is more than just a collection of homes - it's
//               a community. Residents can enjoy a range of community amenities,
//               including:
//             </p>

//             <ul className="space-y-4 mb-8">
//               <li className="flex items-start">
//                 <span className="text-white mr-2">•</span>
//                 <p className="text-gray-300">
//                   <span className="font-semibold">Community center:</span> A
//                   state-of-the-art community center with a fully equipped
//                   kitchen, perfect for hosting events and gatherings.
//                 </p>
//               </li>

//               <li className="flex items-start">
//                 <span className="text-white mr-2">•</span>
//                 <p className="text-gray-300">
//                   <span className="font-semibold">
//                     Parks and green spaces:
//                   </span>{" "}
//                   Lush parks and green spaces throughout the community,
//                   providing a peaceful retreat from the hustle and bustle of
//                   city life.
//                 </p>
//               </li>

//               <li className="flex items-start">
//                 <span className="text-white mr-2">•</span>
//                 <p className="text-gray-300">
//                   <span className="font-semibold">Walking trails:</span>{" "}
//                   Walking trails that wind through the community, providing a
//                   scenic and peaceful way to enjoy the outdoors.
//                 </p>
//               </li>
//             </ul>

//             {/* Community Center Image */}
//             <div className="relative h-64 md:h-80 lg:h-96 w-full rounded-lg overflow-hidden">
//               <Image
//                 src="/images/community.png"
//                 alt="Luxury community center with green furniture and large windows"
//                 fill
//                 className="object-cover"
//               />
//             </div>
//           </section>

//           <section className="mb-10">
//             <h2 className="text-2xl md:text-3xl font-bold mb-6">
//               Conclusion
//             </h2>

//             <p className="text-gray-300">
//               The Grand Estate is a truly exceptional community, offering
//               residents a luxurious living experience like no other. With its
//               stunning design, luxurious amenities, and private outdoor
//               spaces, this master-planned community by EMAAR is designed to
//               deliver the very best.
//             </p>
//           </section>
