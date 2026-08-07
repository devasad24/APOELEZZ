import { Diamond, Handshake, Shield } from "lucide-react";
import Image from "next/image";

const missions = [
  {
    id: 1,
    icon: "/images/icons/icon_1.png",
    title: "Property Sales & Leasing",
    text: "Premium residential & commercial properties across Dubai’s prime locations",
  },
  {
    id: 2,
    icon: "/images/icons/icon_2.png",
    title: "Off-Plan Projects",
    text: "Exclusive access to top developers with early launch deals & flexible payment plans.",
  },
  {
    id: 3,
    icon: "/images/icons/icon_3.png",
    title: "Real Estate Investment Advisory",
    text: "Customized strategies for local & international investors seeking high ROI",
  },
  {
    id: 4,
    icon: "/images/icons/icon_4.png",
    title: "Property Management",
    text: "Complete asset care, tenant handling, and income optimization for landlords.",
  },
  {
    id: 5,
    icon: "/images/icons/icon_5.png",
    title: "Mortgage Advisory",
    text: "In-house experts to secure the best financing solutions quickly & easily.",
  },
  {
    id: 6,
    icon: "/images/icons/icon_6.png",
    title: "Holiday Homes & Short-Term Rentals",
    text: "Full setup & management for high returns, with priority services for investors.",
  },
  {
    id: 7,
    icon: "/images/icons/icon_7.png",
    title: " Luxury Car Services",
    text: "Access to exclusive luxury vehicles as part of our premium investor care packages.",
  },
  {
    id: 8,
    icon: "/images/icons/icon_8.png",
    title: "Interior Design & Fit-Out",
    text: "End-to-end furnishing & bespoke interior solutions tailored to each property.",
  },
  {
    id: 9,
    icon: "/images/icons/icon_9.png",
    title: "Real Estate Consultancy",
    text: "Business setup, licensing, and strategic advisory for real estate entrepreneurs & startups.",
  },
];
export default function Business_sector() {
  return (
    <div className="w-full py-12 text-white">
      {/* BUSINESS SECTOR */}
      <section className="flex flex-col gap-10 text-center md:text-start">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase text-center">
          Business sector
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {/* Cards */}
          {missions?.map((mission, index) => (
            <div
              className="bg-[#3D3D3D66] border-primary text-white p-6 rounded-[16px] w-full text-center flex flex-col gap-6 items-center"
              key={index}
            >
              <div className="bg-white rounded-[14px] p-5 text-[#B7A772] ">
                <Image
                  width={100}
                  height={100}
                  src={mission?.icon}
                  alt="icon"
                  className="w-8 h-8 object-contain"
                />
              </div>
              <h3 className="text-lg md:text-lg font-bold text-white uppercase text-center ">
                {mission?.title}
              </h3>

              <p className="text-sm md:text-base text-[#ffffff] font-light text-center">
                {mission?.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
