"use client";
import Filter from "./_home_components/filter";
import About from "./_home_components/About";
import FeaturedPropertiesSection from "./_home_components/FeaturedProperties";
import TestimonialsSection from "./_home_components/Testimonial";
import TrustedDevelopersSection from "./_home_components/developers";
import Insights from "./_home_components/Insights";
import Hero from "./_comonents/Hero";
import CantactUs from "./_comonents/ContactUs";
import { useState, useEffect, useRef } from "react";
import PropertiesList from "./properties/_components/propertiesList";
import useApi from "@/utils/useApi";
import Founder_msg from "./_home_components/Founder_msg";
const heading = "Homes Beyond the Ordinary";
const sub_heading =
  "Your Journey to Finding the Perfect Property in Dubai Starts Here";

export default function Home() {
  const [filters, setFilters] = useState({});
  const [properties, setProperties] = useState([]);
  const { fetchData } = useApi();
  const [isLoading, setIsloading] = useState(false);
  const [featuredListings, setFeaturedListing] = useState([]);
  const [developers, setDevelopers] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  const fetchListings = (page = 1, filters, callBack) => {
    console.log(filters, "filters");

    fetchData(
      `/listings?page=${page}`,
      {
        method: "GET",
        params: filters,
      },
      (res, status) => {
        callBack(res, status);
        setHasSearched(true);
      }
    );
  };
  function getFeaturedListings() {
    fetchData(
      `/listings?page=${1}`,
      {
        method: "GET",
        params: {
          is_featured: 1,
        },
      },
      (res, status) => {
        setFeaturedListing(res?.data?.data?.slice(0, 3));
      }
    );
  }
  function getDevelopers() {
    fetchData(
      // `/developers?page=${1}`,
      `/developers?priority=Emaar,Damac,Sobha,Binghatti,Azizi,Beyond`,
      {
        method: "GET",
      },
      (res, status) => {
        console.log("Developers API response:", res);
        setDevelopers(res?.data?.developers);
      }
    );
  }

  // Fetch first page on component mount
  function onSearch() {
    setIsloading(true);

    fetchListings(
      1,
      {
        listing_type: filters["listing_type"]?.value,
        location: filters["location"]?.label,
        property_type: filters["property_type"]?.label,
        bedrooms: filters["bedrooms"]?.value,
        max_price: filters["max_price"]?.value,
        // listing_title: filtersApplied["listing_title"],
      },
      (res, status) => {
        if (status) {
          setProperties(res?.data?.data);
          setIsloading(false);
        }
      }
    );
  }
  const prevFiltersRef = useRef(filters);

  useEffect(() => {
    const prevFilters = prevFiltersRef.current;
    let shouldCallSearch = false;

    for (const key in filters) {
      const prevVal = prevFilters[key];
      const currVal = filters[key];

      // Detect if it was previously filled but now is empty
      const wasFilled =
        prevVal !== undefined && prevVal !== null && prevVal !== "";
      const isNowEmpty =
        currVal === undefined || currVal === null || currVal === "";

      if (wasFilled && isNowEmpty) {
        shouldCallSearch = true;
        break;
      }
    }

    if (shouldCallSearch) {
      onSearch();
    }

    // Update previous filters for next comparison
    prevFiltersRef.current = filters;
  }, [filters]);

  useEffect(() => {
    getFeaturedListings();
    getDevelopers();
  }, []);

  return (
    <>
      {/* <Hero >
        // <h1 className="text-[30px] sm:text-[60px] md:text-[70px] lg:text-[100px] xl:text-[120px] font-[700] uppercase text-center text-white leading-9 sm:leading-[1.1] md:leading-[1.1] lg:leading-[140px]"> 
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-7xl xl:text-8xl font-[700] uppercase text-center text-white leading-9 sm:leading-[1.1] md:leading-[1.1] lg:leading-[1.1] xl:leading-[140px]">
          {heading}
        </h1>

        <p className="text-center pt-3 sm:pt-4 md:pt-6 text-base sm:text-lg md:text-xl text-white max-w-3xl mx-auto">
          {sub_heading}
        </p>
        <div className="mt-6 md:mt-8 lg:mt-10">
          <Filter
            filters={filters}
            setFilters={setFilters}
            onSearch={onSearch}
          />
        </div>
      </Hero> */}
      {/* <div className="relative w-full md:min-h-[700px] overflow-hidden flex flex-col items-center justify-center min-h-screen"> */}
      <div className="relative w-full md:min-h-[700px] flex flex-col items-center justify-center min-h-screen">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          // poster="/images/video_poster.jpg"
          className="absolute inset-0 w-full h-full object-cover -z-1"
        >
          <source src="bgVideoNew.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/*  Content */}
        <div className="w-full relative px-[7%] mt-28 md:mt-9 z-10 md:text-center pb-10 flex flex-col gap-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl text-center leading-none font-[700] uppercase text-white">
            {heading}
          </h1>
          <p className="text-center text-base sm:text-lg md:text-xl text-white mx-auto">
            {sub_heading}
          </p>
          <div className="">
            <Filter
              filters={filters}
              setFilters={setFilters}
              onSearch={onSearch}
            />
          </div>
        </div>
      </div>

      {properties?.length > 0 ? (
        <div className="px-[7%] py-12">
          <PropertiesList
            properties={properties}
            justList
            isLoading={isLoading}
          />
        </div>
      ) : (
        hasSearched && (
          <h3 className="text-[#D4C695F2] w-full text-center relative px-[7%] py-12">
            No Data Available{" "}
          </h3>
        )
      )}

      <div className="px-[7%]">
        <About />
      </div>

      <div
        className="relative"
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(244, 218, 121, 0.44) 57.83%, rgba(0, 0, 0, 0.8) 100%)",
        }}
      >
        <div className="py-12 px-[7%]">
          <FeaturedPropertiesSection featuredListings={featuredListings} />
        </div>
        <div className="px-[7%] py-12">
          <TestimonialsSection />
        </div>
        <div className="py-12">
          <TrustedDevelopersSection developers={developers} />
        </div>
      </div>

      <div className="py-12 px-[7%]">
        <Founder_msg />
      </div>

      <div className="py-12 px-[7%]">
        <Insights />
      </div>
      <div className="pt-12" id="contact">
        <CantactUs />
      </div>
    </>
  );
}
// background: linear-gradient(180deg, #000000 0%, #AE7F2C 36.21%, #F4DA79 68.68%, #FFEFB1 86.54%);
