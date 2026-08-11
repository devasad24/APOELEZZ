import Image from "next/image";
import Link from "next/link";
import { PiCircleFill, PiDiamondDuotone, PiDiamondFill } from "react-icons/pi";

const Why_apoelezz = () => {
  return (
    <section className="relative text-white flex flex-col gap-6">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase">
        Why APOELEZZ
      </h2>
      <div className="flex flex-col gap-6 md:gap-0">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="w-full h-full flex items-center py-5">
            <div className="relative flex items-start text-start text-white/80 text-sm font-extralight sm:text-base">
              <PiDiamondDuotone size={30} className="absolute top-[-15] left-[-15] -z-1 text-[#AE7F2C] shrink-0 opacity-50" />
              <PiDiamondDuotone size={30} className="absolute top-0 left-0 -z-1 text-[#AE7F2C] shrink-0 opacity-50" />
              <PiDiamondDuotone size={30} className="absolute top-[15] left-[-15] -z-1 text-[#AE7F2C] shrink-0 opacity-50" />
              <p>
                <strong>At APOELEZZ</strong>, we believe real estate is not just about
                transactions – it's about building lasting relationships,
                securing strong investments, and making every client feel
                confident in their decisions. That's why we go beyond
                traditional agency roles to act as trusted advisors who
                understand your needs and champion your interests.
              </p>
            </div>
          </div>
          <div className="w-full h-full flex items-center justify-center px-5">
            <Image
              src="/images/about-new.jpeg"
              alt="Icon"
              // fill={true}
              width={579}
              height={415}
              className="w-full h-full object-contain rounded-[16px]"
              loading="lazy"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="w-full h-full flex items-center order-0 md:order-1 py-5">
            <div className="relative flex items-start text-start text-white/80 text-sm font-extralight sm:text-base">
              <PiDiamondDuotone size={30} className="absolute top-[-15] left-[-15] -z-1 text-[#AE7F2C] shrink-0 opacity-50" />
              <PiDiamondDuotone size={30} className="absolute top-0 left-0 -z-1 text-[#AE7F2C] shrink-0 opacity-50" />
              <PiDiamondDuotone size={30} className="absolute top-[15] left-[-15] -z-1 text-[#AE7F2C] shrink-0 opacity-50" />
              <p>
                From exclusive developer partnerships to unmatched after-sale
                support, we combine deep market expertise with a personal
                approach. Every client benefits from tailored solutions,
                transparent processes, and the peace of mind that comes from
                working with a team committed to their long-term success.
              </p>
            </div>
          </div>
          <div className="w-full h-full flex items-center justify-center order-1 md:order-0 px-5">
            <Image
              src="/images/awards.jpeg"
              alt="Icon"
              // fill={true}
              width={579}
              height={415}
              className="w-full h-full object-contain rounded-[16px]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why_apoelezz;
