// // import UserProfile from "../../components/UserProfile";
// import React, { Suspense } from "react";
// import Image from "next/image";
// import { CiLocationOn } from "react-icons/ci";
// import { FaBed } from "react-icons/fa";
// import { PiBathtub } from "react-icons/pi";
// import { MdCopyAll } from "react-icons/md";
// import { MdOutlineArrowRightAlt } from "react-icons/md";
// import { LuDot } from "react-icons/lu";
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

// export default function Insights() {
//   return (
//     <>
//       {/* trusted developers section */}
//       <div className=" flex flex-1 flex-col items-center text-white relative z-30 bg-black">
//         <h1 className="!font-dmsans text-[80px] font-bold uppercase tracking-[-1.60px] lg:text-[48px] md:text-[48px]">
//           Stay Informed with Expert Insights
//         </h1>
//         <p className="mt-2 w-[36%] text-center !font-inter text-[22px] font-thin leading-[31px] tracking-[-0.79px] lg:w-full lg:px-5 lg:text-[18px] md:w-full md:px-5">
//           Knowledge is power, especially in the world of real estate. Check out
//           our latest articles and tips
//         </p>
//         <div className="mt-9 container-xs mx-auto flex w-full gap-[30px] px-[200px] overflow-hidden  z-40 ">
//           {[...Array(3)].map(() => (
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
//                   </div>
//                   <div className="mb-2.5 ml-5 mr-1.5 md:mx-0">
//                     <div className="flex flex-col items-center">
//                       <div className="flex flex-wrap items-center justify-between gap-5 text-[12px] text-[#A5A5A5]">
//                         <span className="flex  items-center">
//                           Apartment <LuDot size={25} />
//                         </span>
//                         <span>April 19, 2025</span>
//                       </div>
//                       <div className="mt-1">
//                         <p className="text-[18px] text-center">
//                           Top 5 Benefits of Investing in Off-Plan Properties in
//                           Dubai
//                         </p>
//                       </div>
//                       <div className="mt-[22px] flex primary-color">
//                         <span className="flex  items-center gap-3.5 cursor-pointer">
//                           Read More <MdOutlineArrowRightAlt size={25} />
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </React.Fragment>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }
import Image from "next/image";
import { LuDot } from "react-icons/lu";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import Founder_msg from "./Founder_msg";

const insights = [
  {
    id: 1,
    image: "/images/blog-1.webp",
    title: "Why You Should Invest in Dubai Real Estate in 2025  ",
    description:
      "Discover why 2025 is the ideal year to invest in Dubai real estate. From tax-free benefits to high rental yields, explore the top reasons investors are choosing Dubai.",
  },
  {
    id: 2,
    image: "/images/blog-2.webp",
    title: "Dubai Real Estate Guide: 10 Things to Know Before Buying a Home",
    description:
      "Planning to buy a home in Dubai? Read this essential guide covering 10 key things every buyer must know about Dubai’s property market in 2025.",
  },
  {
    id: 3,
    image: "/images/blog-3.png",
    title: "Buy Property in Dubai: Top 5 Off-Plan Projects for 2025",
    description:
      "Looking to buy property in Dubai? Explore the top 5 off-plan projects for 2025 in high-growth areas with strong ROI potential and flexible payment plans.",
  },
];

export default function Insights() {
  return (
    <>
      {/* Expert Insights section */}
      <div className="flex flex-1 flex-col gap-6 items-center text-white relative z-30 bg-black">
        <h1 className="!font-dmsans text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase text-center leading-none">
          Stay Informed with Expert Insights
        </h1>
        <p className="text-center text-base sm:text-lg md:text-xl text-white mx-auto">
          Knowledge is power, especially in the world of real estate. Check out
          our latest articles and tips
        </p>
        {/* Articles Container */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {insights.map((item, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0"
            >
              <div
                style={{
                  backdropFilter: "blur(14px)",
                  boxShadow: "0px 0px 6px 3px #FFFFFF40 inset",
                }}
                className="flex flex-col gap-6 rounded-[16px] bg-[#3d3d3d66] p-4 border-primary text-white h-full"
              >
                <div className="relative w-full h-[200px] flex justify-center">
                  <Image
                    src={item.image}
                    width={424}
                    height={296}
                    alt="Article Image"
                    className="h-full w-full flex-1 rounded-[16px] object-cover"
                  />
                </div>
                <div className="flex flex-col gap-2 items-center justify-center text-center">
                  <p className="text-[14px] sm:text-[16px] md:text-[18px] text-center">
                    {item?.title}
                  </p>
                  <div className="flex primary-color">
                    <span className="flex items-center gap-2 cursor-pointer text-[14px] sm:text-base">
                      Read More
                      <MdOutlineArrowRightAlt
                        size={20}
                        className="sm:text-2xl"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
