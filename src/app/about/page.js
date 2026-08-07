"use client";
import Hero from "@/app/_comonents/Hero";
import { IoIosArrowRoundBack } from "react-icons/io";
import ContactUs from "../_comonents/ContactUs";
import WhoWeAre from "./_components/whoWeAre";
import WhyChooseUsPage from "./_components/whyApoelezz";
import TeamPage from "./_components/ourExperiencedTeam";
import { useRouter } from "next/navigation";
import Founder_msg from "../_home_components/Founder_msg";
import Business_sector from "./_components/Business_sector";
import CustomerTrust from "./_components/CustomerTrust";
import { PiDiamondDuotone } from "react-icons/pi";
import OurTeam from "../career/_components/ourTeam";

const core_values = [
  {
    id: 1,
    text: "Integrity",
  },
  {
    id: 2,
    text: "client focus",
  },
  {
    id: 3,
    text: "excellence",
  },
  {
    id: 4,
    text: "innovations",
  },
  {
    id: 5,
    text: "professional",
  },
  {
    id: 6,
    text: "sustainability",
  },
  {
    id: 7,
    text: "collaboration",
  },
  {
    id: 8,
    text: "award-winning service",
  },
];
const Page = () => {
  const router = useRouter();
  return (
    <div>
      <Hero>
        {" "}
        <div className="flex flex-col gap-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl text-center leading-none font-[700] uppercase text-white">
            About Apoelezz
          </h1>
          <p className="text-center text-base sm:text-lg md:text-xl text-white mx-auto">
            Elevating the real estate experience with refined service,
            trusted partnerships, and a vision for excellence.
          </p>
        </div>
      </Hero>

      <div className="relative z-10">
        {/* <WhoWeAre /> */}
        <div className="py-12 px-[7%]">
          <Founder_msg page="about" />
        </div>
        <div
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(244, 218, 121, 0.44) 57.83%, rgba(0, 0, 0, 0.8) 100%)",
          }}
          className="w-full px-[7%]"
        >
          <WhyChooseUsPage />
          <Business_sector />
        </div>

        {/* CORE VALUES */}
        <section className="py-12 px-[7%] text-white flex flex-col gap-10">
          {/* <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 uppercase text-center"> */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase text-center">
            core values
          </h1>
          <div className="flex flex-wrap gap-12 items-center justify-center text-start">
            {core_values?.map((value, i) => (
              <div key={i} className="flex items-start min-w-[160px]">
                <div className="relative flex items-start text-start text-white font-semibold uppercase pl-[30]">
                  <PiDiamondDuotone size={26} className="absolute top-[-13] left-[-13] -z-1 text-[#AE7F2C] shrink-0 opacity-50" />
                  <PiDiamondDuotone size={26} className="absolute top-0 left-0 -z-1 text-[#AE7F2C] shrink-0 opacity-50" />
                  <PiDiamondDuotone size={26} className="absolute top-[13] left-[-13] -z-1 text-[#AE7F2C] shrink-0 opacity-50" />
                  <p>
                    {value?.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-12 px-[7%]">
          <CustomerTrust />
        </section>

        <OurTeam />
      </div>

      <ContactUs />
    </div>
  );
};

export default Page;
