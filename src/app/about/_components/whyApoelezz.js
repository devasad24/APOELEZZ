import { Diamond, Handshake, Shield } from "lucide-react";
import Image from "next/image";
import { PiDiamondDuotone } from "react-icons/pi";

const missions = [
  {
    id: 1,
    title: "client first",
    text: "Your goals lead the way. From first meeting to beyond handover, we deliver honest advice and tailored property solutions in Dubai",
  },
  {
    id: 2,
    title: "smart investment",
    text: "Through in-depth market analysis and partnerships with Dubai’s leading developers, we secure properties that deliver strong returns today and long-term value for the future",
  },
  {
    id: 3,
    title: "professional excellence",
    text: "Our team combines deep market expertise with meticulous attention to detail, ensuring smooth transactions, transparent processes, and flawless execution that consistently go beyond expectations",
  },
  {
    id: 4,
    title: "innovative solutions & growth",
    text: "In a fast-moving market like Dubai, we embrace innovation leveraging technology, introducing new services, and creating customized investment plans to drive growth and unlock new opportunities",
  },
];
export default function WhyChooseUsPage() {
  return (
    // <div className="w-full py-16 px-4 md:px-8 text-white">
    //   {/* Why APOELEZZ Section */}
    //   <section className="max-w-6xl mx-auto mb-24 text-center">
    //     <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
    //       WHY APOELEZZ?
    //     </h1>
    //     <p className="text-lg mb-16 max-w-2xl mx-auto">
    //       Elevating the real estate experience with refined service, trusted
    //       partnerships, and a vision for excellence.
    //     </p>

    //     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    //       {/* Trust & Transparency */}
    //       <div className="flex flex-col items-center">
    //         <div className="mb-6 p-4 rounded-full bg-amber-100 text-amber-800">
    //           <Shield size={32} />
    //         </div>
    //         <h3 className="text-xl font-semibold mb-3">Trust & Transparency</h3>
    //         <p className="text-sm">
    //           We believe in honest advice, clear processes, and long-term
    //           relationships.
    //         </p>
    //       </div>

    //       {/* Luxury-Focused Approach */}
    //       <div className="flex flex-col items-center">
    //         <div className="mb-6 p-4 rounded-full bg-amber-100 text-amber-800">
    //           <Diamond size={32} />
    //         </div>
    //         <h3 className="text-xl font-semibold mb-3">
    //           Luxury-Focused Approach
    //         </h3>
    //         <p className="text-sm">
    //           Every detail is designed to meet the highest standards of taste
    //           and comfort.
    //         </p>
    //       </div>

    //       {/* Strategic Partnerships */}
    //       <div className="flex flex-col items-center">
    //         <div className="mb-6 p-4 rounded-full bg-amber-100 text-amber-800">
    //           <Handshake size={32} />
    //         </div>
    //         <h3 className="text-xl font-semibold mb-3">
    //           Strategic Partnerships
    //         </h3>
    //         <p className="text-sm">
    //           We collaborate with top-tier developers to offer premium
    //           opportunities.
    //         </p>
    //       </div>
    //     </div>
    //   </section>

    //   {/* Who We Are Section */}
    //   <section className="max-w-6xl mx-auto">
    //     <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
    //       <div className="space-y-6">
    //         <p className="text-base leading-relaxed">
    //           At AP Properties, we are your trusted partner in navigating the
    //           dynamic world of real estate in Dubai.
    //         </p>
    //         <p className="text-base leading-relaxed">
    //           With a passion for excellence and a commitment to delivering
    //           tailored solutions, we help you find the perfect property that
    //           matches your lifestyle and goals.
    //         </p>
    //         <p className="text-base leading-relaxed">
    //           Whether you&apos;re looking to buy property in Dubai, sell your
    //           home, or explore off-plan projects in Dubai, we&apos;ve got you
    //           covered.
    //         </p>

    //         <div className="space-y-6 mt-8">
    //           <div className="space-y-2">
    //             <h3 className="text-xl font-semibold flex items-center">
    //               <span className="mr-2 text-amber-500">•</span> OUR MISSION
    //             </h3>
    //             <p className="text-sm leading-relaxed pl-6">
    //               At Apoelzz, our mission is to empower individuals and
    //               businesses by providing innovative, transparent, and tailored
    //               real estate solutions.
    //             </p>
    //             <p className="text-sm leading-relaxed pl-6">
    //               We strive to deliver unmatched expertise, foster trust, and
    //               build lasting relationships in the dynamic world of Dubai
    //               property investment.
    //             </p>
    //           </div>

    //           <div className="space-y-2">
    //             <h3 className="text-xl font-semibold flex items-center">
    //               <span className="mr-2 text-amber-500">•</span> OUR VISION
    //             </h3>
    //             <p className="text-sm leading-relaxed pl-6">
    //               To be the leading force in reshaping the Dubai real estate
    //               market, creating sustainable value and exceptional living
    //               experiences for every client we serve.
    //             </p>
    //           </div>
    //         </div>
    //       </div>

    //       <div>
    //         <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
    //           WHO WE ARE
    //         </h2>
    //       </div>
    //     </div>
    //   </section>
    // </div>

    <div className="w-full text-white">
      {/* MISSION */}
      <section className="py-12 md:text-start text-center flex flex-col gap-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase text-center">
          Our mission
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 w-full">
          {/* Cards */}
          {missions?.map((mission, index) => (
            <div
              className="bg-[#3D3D3D66] border-primary text-white p-5 rounded-[14px] flex flex-col gap-6 w-full"
              key={index}
            >
              <h3 className="text-lg md:text-lg font-bold text-[#B7A772] uppercase text-center leading-relaxed">
                {mission?.title}
              </h3>
              <p className="text-sm md:text-base text-[#ffffff] font-light text-center">
                {mission?.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* VISION */}
      <section className="py-12 text-center md:text-start flex flex-col gap-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase text-center">
          Our vision
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="flex flex-col gap-10 order-1 lg:order-0">
            <div className="relative flex items-start text-start text-white/80 text-sm font-extralight sm:text-base">
              <PiDiamondDuotone size={30} className="absolute top-[-15] left-[-15] -z-1 text-[#AE7F2C] shrink-0 opacity-50" />
              <PiDiamondDuotone size={30} className="absolute top-0 left-0 -z-1 text-[#AE7F2C] shrink-0 opacity-50" />
              <PiDiamondDuotone size={30} className="absolute top-[15] left-[-15] -z-1 text-[#AE7F2C] shrink-0 opacity-50" />
              <p>
                We aim to be a leading firm in the region, recognized not only for the
                properties we sell, but for the vibrant and sustainable communities we help
                build. We aspire to redefine how people experience real estate by combining
                deep market expertise with innovation, trust, and an unwavering commitment to
                excellence.
              </p>
            </div>
            <div className="relative flex items-start text-start text-white/80 text-sm font-extralight sm:text-base">
              <PiDiamondDuotone size={30} className="absolute top-[-15] left-[-15] -z-1 text-[#AE7F2C] shrink-0 opacity-50" />
              <PiDiamondDuotone size={30} className="absolute top-0 left-0 -z-1 text-[#AE7F2C] shrink-0 opacity-50" />
              <PiDiamondDuotone size={30} className="absolute top-[15] left-[-15] -z-1 text-[#AE7F2C] shrink-0 opacity-50" />
              <p>
                We see beyond transactions — we envision thriving neighborhoods, secure
                investments, and futures filled with opportunity for our clients. By forging
                strong partnerships, embracing cutting-edge solutions, and upholding the
                highest standards of integrity and professionalism, we aim to set new
                benchmarks in the industry.
              </p>
            </div>
            <div className="relative flex items-start text-start text-white/80 text-sm font-extralight sm:text-base">
              <PiDiamondDuotone size={30} className="absolute top-[-15] left-[-15] -z-1 text-[#AE7F2C] shrink-0 opacity-50" />
              <PiDiamondDuotone size={30} className="absolute top-0 left-0 -z-1 text-[#AE7F2C] shrink-0 opacity-50" />
              <PiDiamondDuotone size={30} className="absolute top-[15] left-[-15] -z-1 text-[#AE7F2C] shrink-0 opacity-50" />
              <p>
                Ultimately, our vision is to be the trusted partner of choice for investors,
                homeowners, and businesses alike, delivering smart property solutions that
                enrich lives and create lasting value for generations to come.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center order-0 lg:order-1">
            <Image
              src={"/images/vision.jpg"}
              width={664}
              height={522}
              alt="vision image"
              className="rounded-[16px] max-h-[600px] object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
