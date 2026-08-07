// import React from "react";

// const Details = () => {
//   return (
//     <div
//       style={{
//         background:
//           "linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(244, 218, 121, 0.44) 57.83%, rgba(0, 0, 0, 0.8) 100%)",
//       }}
//       className="text-white px-[100px] py-3 mt-11"
//     >
//       {" "}
//       <section className="mb-16 ">
//         <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
//           ALHABTOOR
//         </h1>

//         <p className="text-gray-300 text-lg">
//           The Al Habtoor Group is one of the UAE's most respected and successful
//           businesses. Today it operates in the UAE and international markets.
//         </p>
//       </section>
//       {/* Commitment Section */}
//       <section className="mb-16">
//         <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
//           EVIDENCED BY ITS COMMITMENT TO DEVELOP AND GROW BUSINESSES
//         </h2>

//         <p className="text-gray-300 text-lg leading-relaxed">
//           The Al Habtoor Group has grown with the United Arab Emirates. What
//           started out as a small engineering firm in 1970, is today one of the
//           region's most respected conglomerates with interests in the
//           hospitality, automotive, real estate, education and publishing
//           sectors. The Al Habtoor Group has earned itself a solid reputation
//           both locally and internationally due to the vision of its Chairman,
//           Khalaf Ahmad Al Habtoor. The Al Habtoor Group is one of the UAE's most
//           respected and successful businesses. Today it operates in the UAE and
//           international markets. It employs thousands of highly-qualified,
//           experienced professionals.
//         </p>
//       </section>
//       {/* Listings Section */}
//       <section>
//         <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
//           ALHABTOOR'S LISTINGS
//         </h2>

//         {/* This section would contain property listings */}
//         {/* For now, I'm leaving it empty as per the image */}
//       </section>
//     </div>
//   );
// };

// export default Details;
const Details = ({ developerDetails }) => {
  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(244, 218, 121, 0.44) 57.83%, rgba(0, 0, 0, 0.8) 100%)",
      }}
      className="text-white px-[7%]"
    >
      {/* Header Section */}
      {developerDetails?.description ? (
        <section className="py-12">
          <p className="text-center text-base sm:text-lg md:text-xl text-white mx-auto">
            {developerDetails?.description}
          </p>
        </section>
      ) : null}

      {/* Commitment Section */}
      {developerDetails?.longDescription ? (
        <section className="py-12 flex flex-col gap-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            EVIDENCED BY ITS COMMITMENT TO DEVELOP AND GROW BUSINESSES
          </h2>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            {developerDetails?.longDescription}
          </p>
        </section>
      ) : null}
    </div>
  );
};

export default Details;
