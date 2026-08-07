import { Diamond, Handshake, Shield } from "lucide-react";
import Image from "next/image";

const trust_factors = [
  {
    id: 1,
    title: "innovation & growth",
    text: "We embrace technology and forward-thinking strategies to keep your investments ahead of market trends.",
  },
  {
    id: 2,
    title: "communication",
    text: " Clear, honest communication is at the core of how we work, keeping you informed and empowered every step of the way.",
  },
  {
    id: 3,
    title: "tailored guidance",
    text: "We don't offer one-size-fits-all solutions. We listen to your goals and craft a roadmap designed just for you.",
  },
  {
    id: 4,
    title: "complete confidence",
    text: " From selection to signing to after-sales, we make sure you feel secure, supported, and completely confident in your decisions.",
  },
];
export default function CustomerTrust() {
  return (
    <div className="w-full text-white">
      {/* BUSINESS SECTOR */}
      <section className="flex flex-col gap-10 text-start">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase text-center">
          Why customer trust us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {/* Cards */}
          {trust_factors?.map((mission, index) => (
            <div
              className="bg-[#3D3D3D66] border-primary text-white p-5 rounded-[16px] w-full text-center flex flex-col gap-5 items-center"
              key={index}
            >
              <h3 className="text-lg md:text-lg font-bold text-white uppercase text-center">
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
