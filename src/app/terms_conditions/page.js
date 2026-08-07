"use client";
import React from "react";
import Hero from "@/app/_comonents/Hero";
import { IoIosArrowRoundBack } from "react-icons/io";
import PrivacyPolicyPage from "./_components/policies";
import { useRouter } from "next/navigation";
const Page = () => {
  const router = useRouter();
  return (
    <div>
      <Hero>
        <div className="px-[40px] pt-11 text-white flex items-start">
          <button
            onClick={() => router.back()}
            className="btn_secondary px-5 py-3 rounded-[14px]  flex gap-3 items-center min-w-fit"
          >
            <IoIosArrowRoundBack size={18} />
            Go Back
          </button>
          <div className="justify-self-center w-full">
            <h1 className="text-[120px] font-[700] uppercase   leading-[140px] text-center">
              Terms And Conditions
            </h1>
            <p className="text-center pt-6 text-xl text-white">
              Last updated: May 05, 2025
            </p>
          </div>
        </div>
      </Hero>
      <div className="relative z-10">
        <PrivacyPolicyPage />
      </div>
    </div>
  );
};

export default Page;
