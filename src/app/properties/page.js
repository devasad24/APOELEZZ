"use client";
import React, { useEffect, useState } from "react";
import Hero from "../_comonents/Hero";
import PropertiesList from "./_components/propertiesList";
import useApi from "@/utils/useApi";
import Filter from "../_home_components/filter";
const heading = "Explore properties";
const sub_heading =
  "Explore curated real estate offerings that reflect your taste, ambition, and lifestyle";

const Page = () => {
  const [filters, setFilters] = useState({});
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const { fetchData } = useApi();
  const [pagination, setPagination] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

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
      }
    );
  };
  function onSearch() {
    setIsloading(true);

    fetchListings(
      1,
      {
        location: filters["location"]?.label,
        listing_type: filters["lookingFor"]?.value,
        property_type: filters["propertyType"]?.label,
        bedrooms: filters["bedrooms"]?.value,
        max_price: filters["budget"]?.value,
        // listing_title: filtersApplied["listing_title"],
      },
      (res, status) => {
        if (status) {
          setProperties(res?.data?.data);
          setIsloading(false);
          setPagination({ ...res?.data, data: {} || {} }); // Store pagination info
          setCurrentPage(res?.data?.current_page);
        }
      }
    );
  }
  useEffect(() => {
    fetchListings(1, {}, (res, status) => {
      setIsloading(false);
      setProperties(res?.data?.data);
      setPagination({ ...res?.data, data: {} || {} }); // Store pagination info
      setCurrentPage(res?.data?.current_page);
    });
  }, []);

  return (
    <div>
      <Hero>
        {" "}
        <div className="flex flex-col gap-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl text-center leading-none font-[700] uppercase text-white">
            {heading}
          </h1>
          <p className="text-center text-base sm:text-lg md:text-xl text-white mx-auto">
            {sub_heading}
          </p>
          <Filter
            filters={filters}
            setFilters={setFilters}
            onSearch={onSearch}
          />
        </div>
      </Hero>
      <div className="px-[7%] py-12">
        <PropertiesList
          properties={properties}
          setProperties={setProperties}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          fetchListings={fetchListings}
          pagination={pagination}
          setPagination={setPagination}
          setIsLoading={setIsloading}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

export default Page;
