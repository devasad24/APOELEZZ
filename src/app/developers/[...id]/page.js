// import React from "react";
// import Hero from "@/app/_comonents/Hero";
// import { IoIosArrowRoundBack } from "react-icons/io";
// import ContactUs from "../../_comonents/ContactUs";
// import Details from "./_components/details";
// import DeveloperPropertyList from "./_components/developerPropertyList";
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
//               ALHABTOOR
//             </h1>
//             <p className="text-center pt-6 text-xl text-white">
//               Discover meticulously crafted homes and properties, blending
//               contemporary aesthetics with sustainable living.
//             </p>
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
//             src="/images/singleDeveloper.png"
//             alt="home"
//             layout="fill"
//             objectFit="cover"
//           />
//           {/* the point is */}
//         </div>
//         <Details />
//         <DeveloperPropertyList />
//       </div>
//       <ContactUs />
//     </div>
//   );
// };

// export default Page;
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Hero from "@/app/_comonents/Hero";
import { IoIosArrowRoundBack } from "react-icons/io";
import ContactUs from "../../_comonents/ContactUs";
import Details from "./_components/details";
import DeveloperPropertyList from "./_components/developerPropertyList";
import { useParams, useRouter } from "next/navigation";
import useApi from "@/utils/useApi";

const DeveloperDetailPage = () => {
  const [developerDetails, setDeveloperDetails] = useState({});
  const { fetchData } = useApi();
  const router = useRouter();
  const { id } = useParams();

  useEffect(() => {
    fetchData(
      `/developers/${id}`,
      {
        method: "GET",
      },
      (res, status) => {
        if (status) {
          setDeveloperDetails(res?.data || {});
        }
      }
    );
  }, [id]);
  return (
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
          {developerDetails?.developerLogo ? (
            <div className="flex items-center justify-center">
              <Image
                src={`${developerDetails?.developerLogo?.startsWith("http")
                  ? developerDetails?.developerLogo
                  : `${process.env.NEXT_PUBLIC_BASE_URL?.slice(0, -4)}/${developerDetails?.developerLogo}`}`}
                // src={developerDetails?.developerLogo}
                alt="Developer Showcase"
                width={200}
                height={200}
                className="h-[200px] max-w-[200px] w-full object-contain"
                priority
              />
            </div>
          ) : null}
          <h1 className="text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl text-center leading-none font-[700] uppercase text-white">
            {developerDetails?.developerName}
          </h1>
        </div>
      </Hero>

      <div className="relative z-10">
        <Details developerDetails={developerDetails} />
        <DeveloperPropertyList developerDetails={developerDetails} />
      </div>

      <ContactUs />
    </div>
  );
};

export default DeveloperDetailPage;
