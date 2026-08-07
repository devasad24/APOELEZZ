// // "use client";

// // import React from "react";
// // import Image from "next/image";

// // export default function TestimonialsSection() {
// //   const [sliderState, setSliderState] = React.useState(0);
// //   const sliderRef = React.useRef(null);

// //   return (
// //     <>
// //       {/* testimonials section */}
// //       <div className="w-full z-30 relative text-white">
// //         <div className=" container-xs mx-auto flex w-full gap-[30px] lg:px-5 md:flex-col md:px-5 z-40">
// //           <h1 className=" !font-dmsans text-[80px] font-bold uppercase leading-[90px] tracking-[-1.60px] lg:w-full lg:text-[48px] md:w-full md:text-[48px] px-[200px]">
// //             What our customers are saying us?
// //           </h1>
// //           {[...Array(1)].map(() => (
// //             <React.Fragment key={Math.random()}>
// //               <div className="flex flex-col items-center gap-20 lg:gap-20 md:gap-[60px] sm:gap-10 self-end w-[400px]">
// //                 <div className="container-xs flex flex-col items-start gap-[22px] lg:px-5 md:px-5">
// //                   <div className="mb-[76px] flex  flex-col items-center gap-7 self-end px-1 py-2.5 lg:w-full md:w-full">
// //                     <div className="ml-2.5 self-stretch md:ml-0">
// //                       <div className="flex items-start sm:flex-col">
// //                         <div className="flex flex-1 items-center justify-center gap-5 sm:self-stretch">
// //                           <div className="flex flex-col rounded-[44px] bg-white-a700">
// //                             <Image
// //                               src="/images/review.png"
// //                               width={90}
// //                               height={90}
// //                               alt="Test1png"
// //                               className="h-[90px] rounded-[44px] object-cover"
// //                             />
// //                           </div>
// //                           <div className="flex flex-1 flex-col items-start gap-1">
// //                             <p className="w-[64%] !font-inter text-[19px] font-medium leading-[22px] lg:w-full lg:text-[16px] md:w-full">
// //                               Cameron Williamson
// //                             </p>
// //                             <p className="!font-inter text-[15px] font-normal">
// //                               Real estate owner
// //                             </p>
// //                           </div>
// //                         </div>
// //                       </div>
// //                     </div>
// //                     <div className="w-[96%] text-justify !font-inter text-[19px] font-medium leading-[23px] lg:w-full lg:text-[16px] md:w-full">
// //                       <p>
// //                         Searches for multiplexes, property comparisons,and the
// //                         loanestimator. Works great. Lorem ipsum dolor sit amet,
// //                         consectetur
// //                         <br />
// //                         adipiscing elit, sed do eiusmod tempor incididunt ut
// //                         labore etdores.
// //                       </p>
// //                     </div>
// //                   </div>
// //                 </div>
// //                 <div className="h-[0.75px] w-full self-stretch bg-white-a700" />
// //               </div>
// //             </React.Fragment>
// //           ))}
// //         </div>
// //       </div>
// //     </>
// //   );
// // }
// "use client";
// import Image from "next/image";

// export default function TestimonialsSection() {
//   return (
//     <>
//       {/* testimonials section */}
//       <div className="w-full z-30 relative text-white py-8 md:py-12 lg:py-16">
//         <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
//           <div className="flex flex-col lg:flex-row gap-8 md:gap-10 lg:gap-[30px]">
//             {/* Heading */}
//             <div className="w-full lg:w-1/2">
//               <h1 className="!font-dmsans text-[32px] sm:text-[40px] md:text-[48px] lg:text-[60px] xl:text-[80px] font-bold uppercase leading-tight tracking-[-1.60px]">
//                 What our customers are saying us?
//               </h1>
//             </div>

//             {/* Testimonial */}
//             <div className="w-full lg:w-1/2 flex flex-col">
//               <div className="flex flex-col gap-6 md:gap-8 lg:gap-10">
//                 <div className="flex flex-col gap-6">
//                   {/* Reviewer Info */}
//                   <div className="flex items-center gap-4">
//                     <div className="flex-shrink-0">
//                       <Image
//                         src="/images/review.png"
//                         width={70}
//                         height={70}
//                         alt="Reviewer"
//                         className="h-[60px] w-[60px] sm:h-[70px] sm:w-[70px] md:h-[80px] md:w-[80px] lg:h-[90px] lg:w-[90px] rounded-full object-cover"
//                       />
//                     </div>
//                     <div className="flex flex-col">
//                       <p className="!font-inter text-[16px] sm:text-[17px] md:text-[19px] font-medium leading-tight">
//                         Cameron Williamson
//                       </p>
//                       <p className="!font-inter text-[13px] sm:text-[14px] md:text-[15px] font-normal text-gray-300">
//                         Real estate owner
//                       </p>
//                     </div>
//                   </div>

//                   {/* Testimonial Text */}
//                   <div className="text-[15px] sm:text-[16px] md:text-[17px] lg:text-[19px] !font-inter font-medium leading-relaxed">
//                     <p>
//                       Searches for multiplexes, property comparisons, and the
//                       loan estimator. Works great. Lorem ipsum dolor sit amet,
//                       consectetur adipiscing elit, sed do eiusmod tempor
//                       incididunt ut labore et dores.
//                     </p>
//                   </div>
//                 </div>

//                 {/* Divider */}
//                 <div className="h-[0.75px] w-full bg-white-a700/30 mt-4" />

//                 {/* Navigation Dots (Optional) */}
//                 <div className="flex justify-center gap-2 mt-4">
//                   {[0, 1, 2].map((index) => (
//                     <button
//                       key={index}
//                       className={`h-2 w-2 rounded-full ${
//                         index === 0 ? "bg-white" : "bg-white/30"
//                       }`}
//                       aria-label={`Go to testimonial ${index + 1}`}
//                     />
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Ahmed Al Mansoori",
    role: "Property Owner – Dubai",
    image: "/images/review.png",
    content:
      "The team was extremely professional and transparent throughout the entire process. They understood my requirements clearly and helped me secure the right property at the right value. I highly appreciate their commitment and follow-up.",
  },
  {
    id: 2,
    name: "Fatima Al Zaabi",
    role: "Real Estate Investor",
    image: "/images/review.png",
    content:
      "From the first consultation to final handover, everything was handled smoothly. Their market knowledge and honest advice made me confident in my investment decision. I would definitely work with them again.",
  },
  {
    id: 3,
    name: "James Thornton",
    role: "Expat Home Buyer",
    image: "/images/review.png",
    content:
      "As a first-time buyer in Dubai, I had many questions. The team guided me step by step and made the process simple and stress-free. Their responsiveness and attention to detail truly set them apart.",
  },
  {
    id: 4,
    name: "Rahul Mehta",
    role: "NRI Property Investor",
    image: "/images/review.png",
    content:
      "Excellent service and clear communication throughout. They provided detailed insights into rental yields and future appreciation, which helped me make a confident investment from abroad. Very reliable and professional.",
  },
];


export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToPrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <>
      {/* testimonials section */}
      <div className="w-full z-30 relative text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <h1 className="!font-dmsans text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-[-1.60px] leading-tight">
            What our customers <br className="block sm:hidden" />
            <span className="sm:inline"> are saying about us?</span>
          </h1>

          {/* Testimonial Carousel */}
          <div className="w-full flex flex-col gap-6 p-6">
            {/* Testimonials */}
            <div className="overflow-hidden relative">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="w-full flex-shrink-0 flex flex-col gap-6"
                  >
                    {/* Reviewer Info */}
                    <div className="flex items-center gap-4">
                      {/* <div className="flex-shrink-0">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          width={70}
                          height={70}
                          alt={`${testimonial.name} profile`}
                          className="h-[60px] w-[60px] sm:h-[70px] sm:w-[70px] md:h-[80px] md:w-[80px] lg:h-[90px] lg:w-[90px] rounded-full object-cover"
                        />
                      </div> */}
                      <div className="flex flex-col">
                        <p className="!font-inter text-[16px] sm:text-[17px] md:text-[19px] font-medium leading-tight">
                          {testimonial.name}
                        </p>
                        <p className="!font-inter text-[13px] sm:text-[14px] md:text-[15px] font-normal text-gray-300">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>

                    {/* Testimonial Text */}
                    <div className="text-[15px] sm:text-[16px] md:text-[17px] lg:text-[19px] !font-inter font-medium leading-relaxed">
                      <p>"{testimonial.content}"</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="h-[0.75px] w-full bg-white-a700/30 mt-4" />

            {/* Navigation Controls */}
            <div className="flex justify-between items-center mt-4">
              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${index === currentIndex
                      ? "bg-white w-5"
                      : "bg-white/30"
                      }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                    aria-current={index === currentIndex ? "true" : "false"}
                  />
                ))}
              </div>

              {/* Arrow Controls */}
              <div className="flex gap-2">
                <button
                  onClick={goToPrevious}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={goToNext}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
