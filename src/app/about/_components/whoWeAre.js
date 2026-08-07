// import Image from "next/image";

// export default function WhoWeAre() {
//   return (
//     <div className="min-h-screen  text-white">
//       <div className="container mx-auto px-4 py-16 md:py-24">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
//           {/* Left Column - Heading */}
//           <div>
//             <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
//               WHO WE ARE
//             </h1>
//           </div>

//           {/* Right Column - Content */}
//           <div className="space-y-8">
//             <p className="text-sm md:text-base leading-relaxed">
//               At AP Properties, we&apos;re not just a real estate agency,
//               we&apos;re your personal advisor, advocate, and partner in one of
//               the world&apos;s most exciting property markets. Based in Dubai
//               and with connections across the UAE, we help clients buy property
//               across Dubai, be it luxury villas or off-plan investment
//               properties.
//             </p>

//             {/* Testimonial/Quote Section */}
//             <div className="bg-black/30 p-6 rounded-lg border border-gray-800">
//               <div className="flex items-start gap-4 mb-4">
//                 <div className="flex-shrink-0">
//                   <Image
//                     src="/images/f_1.jpg"
//                     alt="Founder"
//                     width={80}
//                     height={80}
//                     className="rounded-full"
//                   />
//                 </div>
//                 <div>
//                   <blockquote className="text-sm md:text-base italic mb-4">
//                     &quot;Every property has a story to tell. Our job is to
//                     enable clients to be the next chapter of the story with
//                     confidence, clarity, and care.&quot;
//                   </blockquote>
//                   <p className="text-sm font-medium">Founder Name, CEO</p>
//                 </div>
//               </div>
//             </div>

//             <p className="text-sm md:text-base leading-relaxed">
//               We help homeowners, first-time buyers and experienced investors
//               open doors to opportunity through Dubai homes, villas, and
//               apartments for sale in Dubai Marina. Whether you&apos;re looking
//               at a smart investment or your forever home, we will give you
//               straight-up advice and help tailor solutions that matter.
//             </p>

//             <p className="text-sm md:text-base leading-relaxed">
//               We operate at the intersection of opportunity and elegance.
//               Whether you&apos;re looking for a dream home, a sound investment,
//               or a developer you can trust, APpropz is your dedicated partner.
//               Our curated listings and bespoke services are designed to meet the
//               highest expectations — with quality, precision, and discretion at
//               the core of everything we do.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import Image from "next/image";

export default function WhoWeAre() {
  return (
    <div className="min-h-screen text-white">
      <div className="container mx-auto px-4 py-12 sm:py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-start">
          {/* Left Column - Heading */}
          <div className="mb-6 md:mb-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              WHO WE ARE
            </h1>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            <p className="text-sm md:text-base leading-relaxed">
              At AP Properties, we&apos;re not just a real estate agency,
              we&apos;re your personal advisor, advocate, and partner in one of
              the world&apos;s most exciting property markets. Based in Dubai
              and with connections across the UAE, we help clients buy property
              across Dubai, be it luxury villas or off-plan investment
              properties.
            </p>

            {/* Testimonial/Quote Section */}
            <div className="bg-black/30 p-4 sm:p-6 rounded-lg border border-gray-800">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-4">
                <div className="flex-shrink-0">
                  <Image
                    src="/images/f_1.jpg"
                    alt="Founder"
                    width={60}
                    height={60}
                    className="rounded-full w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[80px] md:h-[80px] object-cover"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <blockquote className="text-sm md:text-base italic mb-2 sm:mb-4">
                    &quot;Every property has a story to tell. Our job is to
                    enable clients to be the next chapter of the story with
                    confidence, clarity, and care.&quot;
                  </blockquote>
                  <p className="text-sm font-medium">Founder Name, CEO</p>
                </div>
              </div>
            </div>

            <p className="text-sm md:text-base leading-relaxed">
              We help homeowners, first-time buyers and experienced investors
              open doors to opportunity through Dubai homes, villas, and
              apartments for sale in Dubai Marina. Whether you&apos;re looking
              at a smart investment or your forever home, we will give you
              straight-up advice and help tailor solutions that matter.
            </p>

            <p className="text-sm md:text-base leading-relaxed">
              We operate at the intersection of opportunity and elegance.
              Whether you&apos;re looking for a dream home, a sound investment,
              or a developer you can trust, APpropz is your dedicated partner.
              Our curated listings and bespoke services are designed to meet the
              highest expectations — with quality, precision, and discretion at
              the core of everything we do.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
