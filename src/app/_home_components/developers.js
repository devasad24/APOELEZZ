// // import UserProfile from "../../components/UserProfile";
// import React, { Suspense } from "react";
// import Image from "next/image";
// const agentProfilesList = [
//   {
//     userName: "Al Habtoor",
//     viewPropertiesButton: "View Properties",
//     image: "/images/developers/alhabtoor.png",
//   },
//   {
//     userName: "Al Dar",
//     viewPropertiesButton: "View Properties",
//     image: "/images/developers/aldar.png",
//   },
//   {
//     userName: "ARADA",
//     viewPropertiesButton: "View Properties",
//     image: "/images/developers/arada.png",
//   },
//   {
//     userName: "Aqua Properties",
//     viewPropertiesButton: "View Properties",
//     image: "/images/developers/aqua.png",
//   },
// ];

// export default function TrustedDevelopersSection() {
//   return (
//     <>
//       {/* trusted developers section */}
//       <div className=" flex flex-1 flex-col items-center text-white relative z-30">
//         <h1 className="!font-dmsans text-[80px] font-bold uppercase tracking-[-1.60px] lg:text-[48px] md:text-[48px]">
//           Trusted Developers
//         </h1>
//         <p className="mt-2 w-[36%] text-center !font-inter text-[22px] font-thin leading-[31px] tracking-[-0.79px] lg:w-full lg:px-5 lg:text-[18px] md:w-full md:px-5">
//           We collaborate with the region’s most reputable developers to ensure
//           you invest in quality, innovation, and reliability
//         </p>
//         <div className="mt-9 flex w-full gap-[100px] self-start overflow-x-auto ">
//           <Suspense fallback={<div>Loading feed...</div>}>
//             {agentProfilesList.map((d, index) => (
//               <UserProfile {...d} key={"listname" + index} />
//             ))}
//           </Suspense>
//         </div>
//       </div>
//     </>
//   );
// }

// function UserProfile({
//   userName = "Al Habtoor",
//   viewPropertiesButton = "View Properties",
//   ...props
// }) {
//   return (
//     <div
//       {...props}
//       className={`${props.className} flex flex-col items-center justify-center  gap-4 md:px-5 primary-color `}
//     >
//       <Image
//         src={props.image}
//         width={180}
//         height={130}
//         alt="Image"
//         className=" rounded-[12px] object-cover"
//       />
//       <div className="flex flex-col items-center gap-6 self-stretch">
//         <p className=" !font-plusjakartasans text-[20px]  tracking-[-0.56px] !text-light_green-400">
//           {userName}
//         </p>
//         <button
//           color="gray_800_66"
//           shape="round"
//           className="self-stretch btn-primaryszffda\c xxxxxxxxxbgvo9hkyyyyyyyyyyyhhhhhb ;

//           a3z2wdc,prounded-[10px] border border-solid border-white-a700_26 px-[33px] font-plusjakartasans font-semibold tracking-[-0.14px] sm:px-5"
//         >
//           {viewPropertiesButton}
//         </button>
//       </div>
//     </div>
//   );
// }
import { Suspense, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function TrustedDevelopersSection({ developers }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  // const goToPrevious = () => {
  //   if (isAnimating) return;
  //   setIsAnimating(true);
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === 0 ? developers.length - 1 : prevIndex - 1
  //   );
  //   setTimeout(() => setIsAnimating(false), 500);
  // };

  // const goToNext = () => {
  //   if (isAnimating) return;
  //   setIsAnimating(true);
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === developers.length - 1 ? 0 : prevIndex + 1
  //   );
  //   setTimeout(() => setIsAnimating(false), 500);
  // };

  useEffect(() => {
    console.log("DEV: ", developers);
  }, []);

  const scrollRef = useRef(null);

  const goToPrevious = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const goToNext = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <>
      {/* trusted developers section */}
      <div className="flex flex-1 flex-col gap-6 items-center text-white relative z-30">
        <div className="px-[7%] flex flex-col gap-6 items-center justify-center text-center">
          <h1 className="!font-dmsans text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-[-1.60px] text-center leading-tight">
            Trusted Developers
          </h1>
          <p className="text-center text-base sm:text-lg md:text-xl text-white mx-auto">
            We collaborate with the region's most reputable developers to ensure
            you invest in quality, innovation, and reliability
          </p>
        </div>
        {/* Developer Profiles */}
        <div className="relative w-full overflow-auto no-scrollbar">
          <div
            ref={scrollRef}
            className="flex relative no-scrollbar overflow-x-auto gap-12 px-[7%] transition-transform duration-500 ease-in-out "
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            <Suspense
              fallback={
                <div className="text-center py-8">Loading developers...</div>
              }
            >
              {developers?.map((developer, index) => (
                <>
                  <UserProfile developer={developer} key={`developer-${index}`} />
                </>
              ))}
            </Suspense>
          </div>
          {/* Arrow Controls */}
          <div className="flex justify-end gap-2 px-[7%]">
            <button
              onClick={goToPrevious}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={goToNext}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
//for testing

function UserProfile({
  developer: {
    userName = "",
    viewPropertiesButton = "View Properties",
    developerLogo,
    developerName,
    id,
  },
}) {
  return (
    <>
      {developerLogo && (
        <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 primary-color ">
          <div className="w-[200px] h-[200px] relative flex items-center justify-center">
            <img
              src={`${developerLogo?.startsWith("http")
                ? developerLogo
                : `${process.env.NEXT_PUBLIC_BASE_URL?.slice(0, -4)}/${developerLogo}`}`}
              alt={`${developerName} logo`}
              className="object-contain w-full h-full"
            />
          </div>
          <div className="flex flex-col items-center gap-3 sm:gap-4 md:gap-6 self-stretch">
            <p className="!font-plusjakartasans text-[16px] sm:text-[18px] md:text-[20px] tracking-[-0.56px] !text-light_green-400 text-center">
              {developerName}
            </p>
            <Link href={`/developers/${id}`}>
              {" "}
              <button className="self-stretch cursor-pointer py-2 sm:py-2.5 md:py-3 rounded-[8px] sm:rounded-[10px] border border-solid border-white-a700_26 px-2 sm:px-4 md:px-[33px] font-plusjakartasans text-sm sm:text-base font-semibold tracking-[-0.14px] hover:bg-white/10 transition-colors">
                {viewPropertiesButton}
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
