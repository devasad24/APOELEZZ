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
//   {
//     userName: "Aqua Properties",
//     viewPropertiesButton: "View Properties",
//     image: "/images/developers/aqua.png",
//   },
//   {
//     userName: "Aqua Properties",
//     viewPropertiesButton: "View Properties",
//     image: "/images/developers/aqua.png",
//   },
//   {
//     userName: "Aqua Properties",
//     viewPropertiesButton: "View Properties",
//     image: "/images/developers/aqua.png",
//   },
//   {
//     userName: "Aqua Properties",
//     viewPropertiesButton: "View Properties",
//     image: "/images/developers/aqua.png",
//   },
//   {
//     userName: "Aqua Properties",
//     viewPropertiesButton: "View Properties",
//     image: "/images/developers/aqua.png",
//   },
// ];

// export default function DevelopersGrid() {
//   return (
//     <>
//       {/* trusted developers section */}
//       <div className=" flex flex-1 flex-col items-center text-white  z-30 relative">
//         <div className="mt-9 grid grid-cols-4 w-full gap-[100px] self-start overflow-x-auto px-[100px] py-11">
//           <Suspense fallback={<div>Loading feed...</div>}>
//             {agentProfilesList.map((d, index) => (
//               <UserProfile {...d} key={"listname" + index} />
//             ))}
//           </Suspense>
//         </div>
//         <div
//           className="absolute bottom-0 left-0 right-0 z-40"
//           style={{
//             background:
//               "linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(244, 218, 121, 0.44) 57.83%, rgba(0, 0, 0, 0.8) 100%)",
//           }}
//         ></div>
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
//           className="self-stretch btn_secondary py-2 rounded-[10px] border border-solid border-white-a700_26 px-[33px] font-plusjakartasans font-semibold tracking-[-0.14px] sm:px-5"
//         >
//           {viewPropertiesButton}
//         </button>
//       </div>
//     </div>
//   );
// }
import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";

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
//   {
//     userName: "Aqua Properties",
//     viewPropertiesButton: "View Properties",
//     image: "/images/developers/aqua.png",
//   },
//   {
//     userName: "Aqua Properties",
//     viewPropertiesButton: "View Properties",
//     image: "/images/developers/aqua.png",
//   },
//   {
//     userName: "Aqua Properties",
//     viewPropertiesButton: "View Properties",
//     image: "/images/developers/aqua.png",
//   },
//   {
//     userName: "Aqua Properties",
//     viewPropertiesButton: "View Properties",
//     image: "/images/developers/aqua.png",
//   },
//   {
//     userName: "Aqua Properties",
//     viewPropertiesButton: "View Properties",
//     image: "/images/developers/aqua.png",
//   },
// ];

export default function DevelopersGrid({ developers }) {
  return (
    <>
      {/* Developers Grid Section */}
      <div className="flex flex-1 flex-col items-center text-white z-30 relative">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          <Suspense
            fallback={
              <div className="col-span-full text-center py-10">
                Loading developers...
              </div>
            }
          >
            {developers?.map((developer, index) => (
              <UserProfile developer={developer} key={`developer-${index}`} />
            ))}
          </Suspense>
        </div>
      </div>
    </>
  );
}

// function UserProfile({
//   userName = "Al Habtoor",
//   viewPropertiesButton = "View Properties",
//   ...props
// }) {
//   return (
//     <div
//       {...props}
//       className={`${
//         props.className || ""
//       } flex flex-col items-center justify-center gap-3 sm:gap-4 primary-color p-4`}
//     >
//       <div className="w-full aspect-[1.4/1] relative h-[100px] sm:h-[120px] md:h-[130px]">
//         <Image
//           src={props.image || "/placeholder.svg"}
//           fill
//           alt={`${userName} logo`}
//           className="rounded-[8px] sm:rounded-[12px] object-contain"
//         />
//       </div>
//       <div className="flex flex-col items-center gap-3 sm:gap-4 md:gap-6 self-stretch">
//         <p className="!font-plusjakartasans text-[16px] sm:text-[18px] md:text-[20px] tracking-[-0.56px] !text-light_green-400 text-center">
//           {userName}
//         </p>
//         <button className="self-stretch py-2 sm:py-2.5 rounded-[8px] sm:rounded-[10px] border border-solid border-white-a700_26 px-2 sm:px-4 font-plusjakartasans text-sm sm:text-base font-semibold tracking-[-0.14px] btn_secondary hover:bg-white/10 transition-colors">
//           {viewPropertiesButton}
//         </button>
//       </div>
//     </div>
//   );
// }

function UserProfile({
  developer: {
    userName = "Al Habtoor",
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
          {/* <div className="w-full h-[400px] relative "> */}
          <div className="w-[200px] h-[200px] flex flex-col items-center justify-center">
            <img
              src={`${developerLogo?.startsWith("http")
                ? developerLogo
                : `${process.env.NEXT_PUBLIC_BASE_URL?.slice(0, -4)}/${developerLogo}`}`}
              alt={`${developerName} logo`}
              className="rounded-[8px] sm:rounded-[12px] object-contain w-full h-full transition-all duration-300 ease-in-out"
            // filter grayscale hover:grayscale-0 mix-blend-multiply brightness-[0.9] hover:brightness-100
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
