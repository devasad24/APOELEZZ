"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function TeamPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const teamMembers = [
    {
      id: 1,
      name: "John Doe",
      title: "Founder and CEO",
      image: "/images/f_2.jpg",
      bio: "With over 20 years of experience in the construction and real estate industry, he has built a reputation for his unwavering commitment to quality and innovation.",
    },
    {
      id: 2,
      name: "Jane Smith",
      title: "VP of Operations",
      image: "/images/f_3.jpg",
      bio: "Jane Smith is the driving force behind Propelez's day-to-day operations.Her ability to navigate complex challenges and find creative solutions has been instrumental in our growth.",
    },
    {
      id: 3,
      name: "Michael Johnson",
      title: "Director of Design",
      image: "/images/f_1.jpg",
      bio: "He has a unique ability to transform even the most ambitious visions into reality. His innovative approach and attention to detail have earned him the respect of our clients.",
    },
    {
      id: 4,
      name: "Sarah Williams",
      title: "Head of Sales",
      image: "/images/f_1.jpg",
      bio: "With her deep understanding of the Dubai property market and exceptional negotiation skills, Sarah consistently delivers outstanding results for both buyers and sellers.",
    },
    {
      id: 5,
      name: "Ahmed Al Mansouri",
      title: "Market Specialist",
      image: "/images/f_1.jpg",
      bio: "Born and raised in Dubai, Ahmed brings invaluable local insights and connections to our team, helping international clients navigate the nuances of the UAE real estate market.",
    },
  ];

  const totalSlides = Math.ceil(teamMembers.length / 3);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  // Get current visible team members (3 per slide)
  const visibleTeamMembers = teamMembers.slice(
    currentSlide * 3,
    currentSlide * 3 + 3
  );

  // Format the current slide number with leading zero
  const formattedSlideNumber = String(currentSlide + 1).padStart(2, "0");

  return (
    <div className="w-full py-16 px-4 md:px-8 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            OUR EXPERIENCED TEAM
          </h1>
          <p className="text-lg max-w-3xl mx-auto">
            We believe great service starts with great people. Our expert team
            combines local market knowledge with international standards helping
            clients buy homes in Dubai with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {visibleTeamMembers.map((member) => (
            <div key={member.id} className="flex flex-col h-full">
              <div className="rounded-lg overflow-hidden mb-4 aspect-square">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-gray-900/10 p-6 rounded-lg flex-grow">
                <h3 className="text-xl font-semibold mb-1 flex items-center">
                  {member.name} <span className="mx-2 text-gray-400">/</span>{" "}
                  <span className="text-sm font-normal">{member.title}</span>
                </h3>
                <p className="text-sm mt-3">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div className="text-sm font-medium">
            {formattedSlideNumber}/{String(totalSlides).padStart(2, "0")}
          </div>
          <div className="flex space-x-2">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
