import Image from "next/image";
import Link from "next/link";
import Why_apoelezz from "./Why_apoelezz";

const strenghtList = [
  {
    id: 1,
    number: "97%",
    title: "Client Satisfaction",
    text: "Our personalized approach and honest advice have resulted in a near-perfect satisfaction rate.",
  },
  {
    id: 2,
    number: "92%",
    title: "Market Reach",
    text: "Through exclusive developer ties and a strong presence across Dubai's prime locations.",
  },
  {
    id: 3,
    number: "95%",
    title: "Deal Success Rate",
    text: "Thanks to skilled negotiation and deep market knowledge, our deals close efficiently and favorably.",
  },
];

const Strength = () => {
  return (
    <section className="relative text-white flex flex-col gap-6">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 uppercase">
        Our Strength by the Numbers
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {/* Cards */}
        {strenghtList?.map((strength, index) => (
          <div
            className="bg-[#3D3D3D66] border-primary text-white p-6 rounded-[16px] w-full flex flex-col gap-6"
            key={index}
          >
            <h3 className="text-lg md:text-5xl font-bold text-[#B7A772] ">
              {strength?.number}
            </h3>
            <p className="text-base md:text-3xl text-[#ffffff] font-semibold">
              {strength?.title}
            </p>
            <p className="text-sm md:text-base text-[#ffffff] font-light">
              {strength?.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Strength;
