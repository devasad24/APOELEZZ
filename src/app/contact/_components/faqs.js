// "use client";

// import { useState } from "react";
// import { ChevronDown, ChevronUp, MessageSquare } from "lucide-react";

// export default function FAQPage() {
//   const [openIndex, setOpenIndex] = useState(0);

//   const faqs = [
//     {
//       question: "Why should I buy property in Dubai?",
//       answer: (
//         <>
//           <p className="mb-2">
//             Buying property in Dubai offers a tax-free environment, high rental
//             yields, and strong property appreciation.
//           </p>
//           <p className="mb-2">
//             Additionally, the city's strategic location, world-class amenities,
//             and investor-friendly policies make it an ideal destination for real
//             estate investment.
//           </p>
//           <p>
//             With options like off-plan properties and luxury homes, Dubai caters
//             to diverse investment goals.
//           </p>
//         </>
//       ),
//     },
//     {
//       question: "Is it legal for foreigners to buy property in Dubai?",
//       answer: (
//         <p>
//           Yes, foreigners can buy property in Dubai in designated freehold
//           areas. The UAE government has established clear regulations that allow
//           non-residents to purchase, own, and sell property in specific zones.
//           These areas include popular locations like Dubai Marina, Downtown
//           Dubai, Palm Jumeirah, and many others.
//         </p>
//       ),
//     },
//     {
//       question: "How much does a house cost in Dubai?",
//       answer: (
//         <p>
//           Property prices in Dubai vary widely depending on location, size, and
//           amenities. Studio apartments can start from AED 400,000 in emerging
//           areas, while luxury villas in premium locations like Palm Jumeirah can
//           exceed AED 20 million. The average price per square foot ranges from
//           AED 800 to AED 2,500 depending on the neighborhood and property type.
//         </p>
//       ),
//     },
//     {
//       question: "Are there payment plan options for buying property in Dubai?",
//       answer: (
//         <p>
//           Yes, Dubai developers offer various payment plans, especially for
//           off-plan properties. These typically include a down payment of 10-20%,
//           followed by installments during construction, and a final payment upon
//           completion. Some developers also offer post-handover payment plans
//           extending 3-5 years after property delivery, making investment more
//           accessible.
//         </p>
//       ),
//     },
//     {
//       question: "What are the best real estate companies in Dubai?",
//       answer: (
//         <p>
//           Dubai has several reputable real estate companies including Emaar
//           Properties, DAMAC Properties, Nakheel, Dubai Properties, and Meraas.
//           For real estate agencies, established names include Better Homes,
//           Driven Properties, Allsopp & Allsopp, and Betterhomes. The best choice
//           depends on your specific requirements, budget, and the areas you're
//           interested in.
//         </p>
//       ),
//     },
//   ];

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? -1 : index);
//   };

//   return (
//     <div className="min-h-screen text-white py-16 px-4">
//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-5xl md:text-6xl font-bold text-center mb-16">
//           FAQ&apos;S
//         </h1>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {/* FAQs Column - Takes up 2/3 on desktop */}
//           <div className="md:col-span-2 space-y-4">
//             {faqs.map((faq, index) => (
//               <div
//                 key={index}
//                 className="box_primary rounded-lg overflow-hidden transition-all duration-200"
//               >
//                 <button
//                   onClick={() => toggleFAQ(index)}
//                   className="w-full flex justify-between items-center p-4 text-left focus:outline-none"
//                 >
//                   <span className="font-medium">{faq.question}</span>
//                   {openIndex === index ? (
//                     <ChevronUp className="flex-shrink-0 w-5 h-5" />
//                   ) : (
//                     <ChevronDown className="flex-shrink-0 w-5 h-5" />
//                   )}
//                 </button>
//                 {openIndex === index && (
//                   <div className="p-4 pt-0 text-gray-300">{faq.answer}</div>
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* Assistance Column - Takes up 1/3 on desktop */}
//           <div className="box_primary rounded-lg p-6 flex flex-col items-center text-center h-fit">
//             <MessageSquare className="w-12 h-12 mb-4" />
//             <h2 className="text-xl font-semibold mb-2">
//               Need direct assistance?
//             </h2>
//             <p className="text-sm text-gray-300 mb-6">
//               We aim to respond within 24 hours
//             </p>
//             <button className="bg-stone-500 hover:bg-stone-600 transition-colors px-6 py-2 rounded">
//               Direct Mail
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, MessageSquare } from "lucide-react";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Why should I buy property in Dubai?",
      answer: (
        <>
          <p className="mb-2">
            Buying property in Dubai offers a tax-free environment, high rental
            yields, and strong property appreciation.
          </p>
          <p className="mb-2">
            Additionally, the city's strategic location, world-class amenities,
            and investor-friendly policies make it an ideal destination for real
            estate investment.
          </p>
          <p>
            With options like off-plan properties and luxury homes, Dubai caters
            to diverse investment goals.
          </p>
        </>
      ),
    },
    {
      question: "Is it legal for foreigners to buy property in Dubai?",
      answer: (
        <p>
          Yes, it is legal for foreigners to buy property in Dubai. Foreign
          nationals can own property on a freehold basis in designated areas, as
          specified by the Dubai government A valid passport is sufficient, and
          residency or a visa is not required .
        </p>
      ),
    },
    {
      question: "How much does a house cost in Dubai?",
      answer: (
        <p>
          The average cost of a house in Dubai is around AED 1.35 million for
          apartments and AED 6.92 million for villas Prices vary depending on
          the location and property type, with options like cheap houses for
          sale in Dubai or luxury homes in Dubai available to suit different
          budgets. For the most accurate dubai property prices , it’s best to
          check current listings on dubai real estate websites .
        </p>
      ),
    },
    {
      question: "Are there payment plan options for buying property in Dubai?",
      answer: (
        <p>
          Yes, Dubai offers flexible payment plans for buying property,
          including post-handover plans, 50/50, 60/40, and even 1% monthly
          installments . These options make it easier to purchase off-plan or
          ready properties with manageable down payments .
        </p>
      ),
    },
    {
      question: "What are the best real estate companies in Dubai?",
      answer: (
        <p>
          The best real estate companies in Dubai include Emaar Properties ,
          DAMAC Properties , and Better Homes . These top real estate companies
          in Dubai offer a wide range of dubai properties for sale and
          exceptional services for buying, selling, and investing in luxury
          homes in dubai . Whether you're looking for off-plan projects in dubai
          or ready villas, these firms provide trusted expertise and premium
          options.
        </p>
      ),
    },
    {
      question: "Is off-plan property in Dubai a good investment?",
      answer: (
        <p>
          Yes, off-plan property in Dubai is a great investment due to lower
          initial prices, flexible payment plans, and high potential for capital
          appreciation. However, investors should be aware of possible
          construction delays . It’s ideal for long-term gains and early-bird
          advantages .
        </p>
      ),
    },
    {
      question: "Can I get residency by buying property in Dubai?",
      answer: (
        <p>
          Yes, you can get residency in Dubai by buying property. If you
          purchase a property worth at least AED 750,000, you may qualify for a
          3-year renewable residency visa. This makes buying property in Dubai
          an attractive option for investors.
        </p>
      ),
    },
    {
      question: "What are the most affordable areas to buy property in Dubai?",
      answer: (
        <p>
          The most affordable areas to buy property in Dubai include Jumeirah
          Village Circle (JVC) , Dubai South , and International City These
          locations offer budget-friendly options for cheap houses for sale in
          Dubai while still providing great amenities and accessibility. Whether
          you're looking for villas in Dubai or apartments for sale in Dubai
          Marina , these areas are perfect for smart investments .
        </p>
      ),
    },
    {
      question: "What is the process to buy a house in Dubai?",
      answer: (
        <p>
          To buy a house in Dubai, start by defining your budget and exploring
          dubai homes for sale with the help of trusted real estate brokers in
          dubai Next, sign a Memorandum of Understanding (MoU) with the seller
          and apply for a No Objection Certificate (NOC) to finalize the
          property transfer. Finally, complete the payment and register the
          property through the Dubai Land Department .
        </p>
      ),
    },
    {
      question: "What are the benefits of buying a villa in Dubai?",
      answer: (
        <p>
          Buying a villa in Dubai offers luxury homes with exclusive amenities
          like private pools and gardens . Villas provide spacious living areas
          and customization options, making them ideal for families.
          Additionally, investing in Dubai real estate ensures high returns due
          to strategic locations and tax-free benefits .
        </p>
      ),
    },
    {
      question: "Can I sell my property in Dubai easily?",
      answer: (
        <p>
          Yes, you can sell your property in Dubai easily by following the
          proper steps, such as obtaining a No Objection Certificate (NOC) and
          ensuring your title deed is ready. Working with trusted real estate
          agents in Dubai can also simplify the process and help you find buyers
          quickly.
        </p>
      ),
    },
    {
      question: "What are service charges for Dubai properties?",
      answer: (
        <p>
          Service charges for Dubai properties are recurring fees paid by
          property owners or tenants to cover the maintenance of communal areas
          and shared facilities. These charges, calculated per square foot,
          ensure the upkeep of amenities like cleaning, repairs, and security in
          your home in Dubai . They vary based on property type, such as
          apartments in Dubai Marina or villas in Dubai .
        </p>
      ),
    },
    {
      question: "What are service charges for Dubai properties?",
      answer: (
        <p>
          Service charges for Dubai properties are recurring fees paid by
          property owners or tenants to cover the maintenance of communal areas
          and shared facilities. These charges, calculated per square foot,
          ensure the upkeep of amenities like cleaning, repairs, and security in
          your home in Dubai . They vary based on property type, such as
          apartments in Dubai Marina or villas in Dubai .
        </p>
      ),
    },
    {
      question:
        "What’s the difference between freehold and leasehold in Dubai?",
      answer: (
        <p>
          In Dubai, freehold means you fully own the property and the land it’s
          built on, with no time limit . On the other hand, leasehold allows you
          to use the property for a set period, usually up to 99 years, without
          owning the land . Freehold properties are more common in areas like
          Dubai Marina and Palm Jumeirah .
        </p>
      ),
    },
    {
      question: "Which is better: ready or off-plan property in Dubai?",
      answer: (
        <p>
          Choosing between ready properties in Dubai and off-plan properties in
          Dubai depends on your goals. Ready properties are ideal for those
          seeking immediate use or rental income, while off-plan options offer
          lower prices and flexible payment plans. Consider your budget and
          timeline before deciding .
        </p>
      ),
    },
    {
      question: "Are there luxury mansions and apartments for sale in Dubai?",
      answer: (
        <p>
          Yes, there are many luxury mansions in Dubai and luxury apartments for
          sale in Dubai available across prime locations like Palm Jumeirah and
          Downtown Dubai . You can explore a wide range of dubai luxury homes
          for sale to find your perfect property .
        </p>
      ),
    },
    {
      question: "How do I find a reliable real estate broker in Dubai?",
      answer: (
        <p>
          To find a reliable real estate broker in Dubai, start by checking
          their experience and track record in the Dubai real estate market .
          Verify their credentials and licensing, and read online reviews from
          past clients . For trusted options, explore top-rated brokers on
          platforms like Bayut or consult best real estate companies in Dubai
          for recommendations .
        </p>
      ),
    },
    {
      question: "Is real estate in Abu Dhabi different from Dubai?",
      answer: (
        <p>
          Yes, real estate in Abu Dhabi is generally more regulated and offers
          more affordable options compared to Dubai . While Dubai homes attract
          international buyers with extensive freehold areas, Abu Dhabi property
          for sale focuses on stability and long-term growth. Both cities
          provide unique opportunities for real estate investment .
        </p>
      ),
    },
    {
      question: "What are the best off-plan projects in Dubai right now?",
      answer: (
        <p>
          The best off-plan projects in Dubai right now include Elo at Dubai
          Marina , The Oasis by Emaar , and SKAI at Mina Al Arab. These projects
          offer flexible payment plans and high returns, making them ideal for
          Dubai real estate investment . Explore these options to find your
          perfect home in Dubai or luxury villas in Dubai .
        </p>
      ),
    },
    {
      question: "Can I rent to own a home in Dubai?",
      answer: (
        <p>
          Yes, you can rent to own a home in Dubai through special schemes where
          part of your rent contributes to the purchase price. This option is
          ideal for those looking to buy property in Dubai with flexible payment
          plans .
        </p>
      ),
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="text-white">
      <div className="w-full flex flex-col gap-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center">
          FAQ&apos;S
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* FAQs Column - Takes up 2/3 on desktop */}
          <div className="lg:col-span-2 space-y-3 sm:space-y-4 order-2 lg:order-1">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="box_primary rounded-lg overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-3 sm:p-4 text-left focus:outline-none"
                >
                  <span className="font-medium text-sm sm:text-base pr-2">
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <ChevronUp className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5" />
                  ) : (
                    <ChevronDown className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="p-3 sm:p-4 pt-0 text-gray-300 text-sm sm:text-base">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Assistance Column - Takes up 1/3 on desktop, appears first on mobile */}
          <div className="box_primary rounded-lg p-4 sm:p-6 flex flex-col items-center text-center h-fit order-1 lg:order-2 mb-6 lg:mb-0">
            <MessageSquare className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-3 sm:mb-4" />
            <h2 className="text-lg sm:text-xl font-semibold mb-2">
              Need direct assistance?
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 mb-4 sm:mb-6">
              We aim to respond within 24 hours
            </p>
            <button className="bg-stone-500 hover:bg-stone-600 transition-colors px-4 sm:px-6 py-2 rounded text-sm sm:text-base">
              Direct Mail
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
