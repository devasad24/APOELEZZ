// import React from "react";
// import Filter from "../_home_components/filter";
// const Hero = ({ heading, sub_heading, children }) => {
//   return (
//     <div className="relative min-h-[100vh] pt-[150px]">
//       <div className="relative z-10">
//         {heading ? (
//           <>
//             <h1 className="text-[160px] font-[700] uppercase text-center text-white leading-[140px]">
//               {/* Homes Beyond the Ordinary */}
//               {heading}
//             </h1>
//             <p className="text-center pt-6 text-xl text-white">
//               {/* Your Journey to Finding the Perfect Property in Dubai Starts Here */}
//               {sub_heading}
//             </p>
//             <Filter />
//           </>
//         ) : (
//           children
//         )}
//       </div>

//       <div
//         className=" absolute top-0 h-full w-full z-0"
//         style={{
//           background:
//             "linear-gradient(180deg, #000000 0%, #AE7F2C 36.21%, #F4DA79 68.68%, #FFEFB1 86.54%)",
//         }}
//       ></div>
//       <div
//         className=" absolute -bottom-1/2 h-full w-full z-0"
//         style={{
//           background:
//             "radial-gradient(51.38% 51.38% at 50% 50%, #000000 76%, rgba(255, 237, 157, 0) 100%)",
//         }}
//       ></div>
//     </div>
//   );
// };

// export default Hero;
import React from "react";
import Filter from "../_home_components/filter";

const Hero = ({ heading, sub_heading, children }) => {
  return (
    // <div className="relative min-h-[100vh] pt-[80px] sm:pt-[100px] md:pt-[120px] lg:pt-[150px]">
    <div className="relative min-h-[50vh] pt-[80px] sm:pt-[100px] md:pt-[120px] lg:pt-[150px] mt-9">
      <div className="relative z-10 px-[7%] py-12 flex flex-col gap-6">
        {heading ? (
          <>
            <h1 className="text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl text-center leading-none font-[700] uppercase text-white">
              {heading}
            </h1>
            <p className="text-center text-base sm:text-lg md:text-xl text-white mx-auto">
              {sub_heading}
            </p>
            <div className="mt-6 md:mt-8 lg:mt-10">
              <Filter />
            </div>
          </>
        ) : (
          <div className="container mx-auto">{children}</div>
        )}
      </div>

      {/* Background gradients */}
      <div
        className="absolute top-0 h-full w-full z-0"
        style={{
          background:
            "linear-gradient(180deg, #000000 0%, #AE7F2C 36.21%, #F4DA79 68.68%, #FFEFB1 86.54%)",
        }}
      ></div>
      <div
        className="absolute -bottom-1/2 h-full w-full z-0"
        style={{
          background:
            "radial-gradient(51.38% 51.38% at 50% 50%, #000000 76%, rgba(255, 237, 157, 0) 100%)",
        }}
      ></div>
    </div>
  );
};

export default Hero;
