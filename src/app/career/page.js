// import React from "react";
// import Hero from "../_comonents/Hero";
// import ImageCollage from "./_components/ImageGallery";
// import { ArrowUpRight } from "lucide-react";
// import OurTeam from "./_components/ourTeam";
// import ContactUs from "../_comonents/ContactUs";

// const positions = [
//   {
//     title: "Property Consultant",
//     department: "Any team",
//     commitment: "Full time",
//     href: "#",
//   },
//   {
//     title: "Property Agent",
//     department: "Any team",
//     commitment: "Full time",
//     href: "#",
//   },
// ];

// const Page = () => {
//   return (
//     <div className="text-white">
//       <Hero>
//         {" "}
//         <ImageCollage />{" "}
//       </Hero>
//       <div className="relative z-10">
//         <div className="px-[40px] pt-11 text-white flex items-start">
//           <div className="justify-self-center w-full">
//             <h1 className="text-[80px] font-[700] uppercase w-full   leading-[140px] text-center">
//               Join the Apoelezz Team
//             </h1>
//             <p className="text-center pt-6 text-xl text-white">
//               Step into a world of luxury real estate, where your talent drives
//               excellence and client trust.
//             </p>
//           </div>
//         </div>
//         <section className=" text-white py-16 px-4">
//           <div className="max-w-4xl mx-auto">
//             <h2 className="text-[80px] font-bold text-center mb-12">
//               OPEN POSITIONS
//             </h2>

//             <div className="grid grid-cols-3 gap-4 text-sm font-medium  pb-2">
//               <div>POSITION</div>
//               <div>Department</div>
//               <div>Commitment</div>
//             </div>

//             {positions.map((position, index) => (
//               <div
//                 key={index}
//                 className="grid grid-cols-3 items-center gap-4 py-4   transition-colors"
//               >
//                 <a
//                   href={position.href}
//                   className="flex items-center gap-1 text-white hover:underline"
//                 >
//                   {position.title}
//                   <ArrowUpRight size={14} />
//                 </a>
//                 <div className="text-gray-300">{position.department}</div>
//                 <div className="text-gray-300">{position.commitment}</div>
//               </div>
//             ))}
//           </div>
//         </section>

//         <OurTeam />
//         <ContactUs />
//       </div>
//     </div>
//   );
// };

// export default Page;
"use client";
import Hero from "../_comonents/Hero";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useRouter } from "next/navigation";
import Image from "next/image";
import JobForm from "./_components/JobForm";
import TeamPage from "../about/_components/ourExperiencedTeam";
import OurTeam from "./_components/ourTeam";

const positions = [
  {
    title: "Property Consultant",
    department: "Any team",
    commitment: "Full time",
    href: "/job_application/1",
  },
  {
    title: "Property Agent",
    department: "Any team",
    commitment: "Full time",
    href: "/job_application/2",
  },
];

const Page = () => {
  const router = useRouter();

  return (
    <div className="text-white">
      <Hero>
        {" "}
        <div className="flex flex-col gap-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl text-center leading-none font-[700] uppercase text-white">
            Career
          </h1>
          <p className="text-center text-base sm:text-lg md:text-xl text-white mx-auto">
            Take the next step in your real estate career. We empower driven professionals with the tools, support, and opportunities needed to succeed in a competitive and dynamic market.
          </p>
        </div>
      </Hero>
      <div className="relative z-10">
        <div className="py-12 px-[7%] flex flex-col gap-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase text-center">
            Build Your Career with AP Properties
          </h2>
          <p className="text-white/80 text-sm sm:text-base leading-relaxed">
            At Apoelezz Properties, we don’t just sell spaces — we shape
            lifestyles. Our mission is to ensure every apartment or villa
            reflects the unique personality and vision of its owner. As part
            of our team, you’ll be working in a collaborative and creative
            environment where your ideas matter and your skills are valued.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-center">
            <div className="col-span-1 lg:col-span-2 w-full h-full">
              <Image
                src="/images/team/team_1.jpg"
                width={700}
                height={764}
                className="w-full h-full object-cover rounded-[16px]"
                alt="team"
              />
            </div>
            <div className="col-span-1 w-full h-full grid grid-cols-1 gap-6">
              <Image
                src="/images/team/team_2.jpg"
                width={647}
                height={378}
                className="h-full w-full object-cover rounded-[16px]"
                alt="team"
              />
              <Image
                src="/images/team/team_3.jpg"
                width={647}
                height={378}
                className="h-full w-full object-cover rounded-[16px]"
                alt="team"
              />
            </div>
          </div>
        </div>
        <div
          className="relative py-12 px-[7%] flex flex-col gap-6"
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(244, 218, 121, 0.44) 57.83%, rgba(0, 0, 0, 0.8) 100%)",
          }}
        >
          <p className="font-semibold text-white text-center text-lg md:text-xl leading-snug">
            Join An Innovative Real Estate <br />
            Agency With A Passion For Growth
          </p>
          <JobForm />
        </div>

        <OurTeam />
      </div>
    </div>
  );
};

export default Page;
