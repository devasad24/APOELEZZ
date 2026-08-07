import Image from "next/image";
import Link from "next/link";
import { PiDiamondDuotone } from "react-icons/pi";

const Founder_msg = ({ page }) => {
  let aboutPage = page == "about" ? true : false;
  return (
    <section
      className={`relative flex flex-col gap-6 ${aboutPage ? "" : "w-full"
        } text-white`}
    >
      <h2 className="lg:hidden text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 uppercase text-center lg:text-start">
        {aboutPage ? "chairman" : " Words of the Founder"}
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6">
        <div className="h-full col-span-1 2xl:col-span-2 w-full h-full flex flex-col relative gap-6 text-start items-start order-1 lg:order-0">
          <h2 className="hidden text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 uppercase text-center lg:text-start lg:flex">
            {aboutPage ? "chairman" : " Words of the Founder"}
          </h2>
          {aboutPage ? (
            <>
              <div className="flex flex-col gap-6 font-light text-base">
                <div className="relative flex items-start text-start text-white/80 text-sm font-extralight sm:text-base">
                  <p>
                    At the helm of APOELEZZ stands our visionary Chairman, Mr.
                    Karim Apo ElEzz, adynamic leader whose career is built on
                    integrity, ambition, and an exceptional understanding of the
                    real estate market. With over 15 years of hands-on experience
                    in the UAE real estate sector, Mr. Karim has become a
                    respected figure in the industry, known for his ability to
                    foresee market trends, navigate complex negotiations,and
                    create opportunities that deliver unmatched value to clients.
                  </p>
                </div>
                <div className="relative flex items-start text-start text-white/80 text-sm font-extralight sm:text-base">
                  <p>
                    At the helm of APOELEZZ stands our visionary Chairman, Mr.
                    Karim Apo ElEzz, adynamic leader whose career is built on
                    integrity, ambition, and an exceptional understanding of the
                    real estate market. With over 15 years of hands-on experience
                    in the UAE real estate sector, Mr. Karim has become a
                    respected figure in the industry, known for his ability to
                    foresee market trends, navigate complex negotiations,and
                    create opportunities that deliver unmatched value to clients.
                  </p>
                </div>
                <div className="relative flex items-start text-start text-white/80 text-sm font-extralight sm:text-base">
                  <p>
                    Under his guidance, APOELEZZ has cultivated strong ties with
                    leading developers, gained exclusive access to premium
                    projects, and developed a reputation for crafting innovative
                    investment strategies that drive long-term growth. Whether
                    advising high-net-worth investors or families seeking their
                    dream home, Mr. Karim's dedication to excellence and personal
                    involvement in key transactions guarantee that every client
                    receives the highest level of service and expertise. Mr. Karim
                    Apo ElEzz continues to steer APOELEZZ forward with a clear
                    vision: to transform the real estate landscape by delivering
                    smart, sustainable solutions that shape vibrant communities
                    across Dubai and beyond. His unwavering passion, strategic
                    foresight, and commitment to nurturing enduring client
                    relationships remain at the core of the company's remarkable
                    success story.
                  </p>
                </div>
              </div>
            </>
          ) : (
            <div className="flex flex-col gap-10 font-light text-base">
              <div className="relative flex items-start text-start text-white/80 text-sm font-extralight sm:text-base">
                <PiDiamondDuotone size={30} className="absolute top-[-15] left-[-15] -z-1 text-[#AE7F2C] shrink-0 opacity-50" />
                <PiDiamondDuotone size={30} className="absolute top-0 left-0 -z-1 text-[#AE7F2C] shrink-0 opacity-50" />
                <PiDiamondDuotone size={30} className="absolute top-[15] left-[-15] -z-1 text-[#AE7F2C] shrink-0 opacity-50" />
                <p>
                  From the very beginning, my vision for APOELEZZ was clear: to
                  build a company that stands for trust, excellence, and
                  long-term value. I've always believed that real estate is more
                  than buying and selling properties, it's about building
                  futures, securing investments, and creating communities where
                  people thrive.
                </p>
              </div>
              <div className="relative flex items-start text-start text-white/80 text-sm font-extralight sm:text-base">
                <PiDiamondDuotone size={30} className="absolute top-[-15] left-[-15] -z-1 text-[#AE7F2C] shrink-0 opacity-50" />
                <PiDiamondDuotone size={30} className="absolute top-0 left-0 -z-1 text-[#AE7F2C] shrink-0 opacity-50" />
                <PiDiamondDuotone size={30} className="absolute top-[15] left-[-15] -z-1 text-[#AE7F2C] shrink-0 opacity-50" />
                <p>
                  With over 15 years in the UAE market, I've seen how the right
                  guidance and honest partnership can transform opportunities
                  into lasting success. At APOELEZZ, we're not just here to
                  close deals; we're here to walk every step with our clients,
                  offering expertise, transparency, and solutions tailored to
                  their goals. I am proud of the reputation we've earned and the
                  relationships we've built. As we continue to grow, my
                  commitment remains the same: to lead with integrity, innovate
                  with purpose, and always put our clients' interests first.
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="w-full h-full flex flex-col relative gap-6 text-start items-center justify-center order-0 lg:order-1">
          <Image
            src="/images/Karim-photo.jpeg"
            alt="Icon"
            // fill={true}
            width={455}
            height={632}
            // className=" w-full h-full"
            className="rounded-[16px] max-h-[600px] max-w-[400px] object-contain"
            loading="lazy"
          />
          <div className="flex flex-col gap-2 text-center uppercase">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase text-[#AE7F2C]">
              Karim APOELEZZ
            </h2>
            <p>CEO - Apoelezz Group</p>
          </div>
        </div>
      </div>
      <div className="container w-full mx-auto text-center flex flex-col md:flex-row space-x-6 mt-9">
        <div className="text-center md:text-start">

        </div>

        <div className="mt-4 md:mt-0">

        </div>
      </div>
    </section>
  );
};

export default Founder_msg;
