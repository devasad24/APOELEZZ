// "use client";
// import Select from "react-select";
// // import { Button } from "@/components/ui/button";
// import { ChevronDown } from "lucide-react";

// // Custom styles for react-select
// const customStyles = {
//   control: (provided) => ({
//     ...provided,
//     backgroundColor: "transparent",
//     border: "none",
//     boxShadow: "none",
//     minHeight: "40px",
//     cursor: "pointer",
//   }),
//   option: (provided, state) => ({
//     ...provided,
//     backgroundColor: state.isSelected
//       ? "#333"
//       : state.isFocused
//       ? "#222"
//       : "transparent",
//     color: "white",
//     cursor: "pointer",
//   }),
//   menu: (provided) => ({
//     ...provided,
//     backgroundColor: "#111",
//     border: "1px solid #333",
//     borderRadius: "8px",
//     zIndex: 10,
//   }),
//   singleValue: (provided) => ({
//     ...provided,
//     color: "white",
//     fontSize: "18px",
//     fontWeight: "500",
//   }),
//   valueContainer: (provided) => ({
//     ...provided,
//     padding: "0",
//   }),
//   indicatorSeparator: () => ({
//     display: "none",
//   }),
//   dropdownIndicator: (provided) => ({
//     ...provided,
//     color: "white",
//   }),
//   placeholder: (provided) => ({
//     ...provided,
//     color: "white",
//     fontSize: "18px",
//     fontWeight: "500",
//   }),
// };

// export default function Search() {
//   // Options for each dropdown
//   const lookingForOptions = [
//     { value: "buy", label: "Buy" },
//     { value: "rent", label: "Rent" },
//     { value: "commercial", label: "Commercial" },
//   ];

//   const locationOptions = [
//     { value: "dubai", label: "Dubai" },
//     { value: "abu-dhabi", label: "Abu Dhabi" },
//     { value: "sharjah", label: "Sharjah" },
//     { value: "ajman", label: "Ajman" },
//   ];

//   const propertyTypeOptions = [
//     { value: "family-house", label: "Family House" },
//     { value: "apartment", label: "Apartment" },
//     { value: "villa", label: "Villa" },
//     { value: "penthouse", label: "Penthouse" },
//   ];

//   const bedroomsOptions = [
//     { value: "1", label: "1 bedroom" },
//     { value: "2", label: "2 bedrooms" },
//     { value: "3", label: "3 bedrooms" },
//     { value: "4", label: "4 bedrooms" },
//     { value: "5+", label: "5+ bedrooms" },
//   ];

//   const budgetOptions = [
//     { value: "250000", label: "250,000 AED" },
//     { value: "500000", label: "500,000 AED" },
//     { value: "750000", label: "750,000 AED" },
//     { value: "1000000", label: "1,000,000 AED" },
//     { value: "1500000+", label: "1,500,000+ AED" },
//   ];

//   // Default selected values
//   const defaultValues = {
//     lookingFor: lookingForOptions[0],
//     location: locationOptions[0],
//     propertyType: propertyTypeOptions[0],
//     bedrooms: bedroomsOptions[2],
//     budget: budgetOptions[1],
//   };

//   const handleSearch = () => {
//     console.log("Searching with filters:", {
//       lookingFor: defaultValues.lookingFor.value,
//       location: defaultValues.location.value,
//       propertyType: defaultValues.propertyType.value,
//       bedrooms: defaultValues.bedrooms.value,
//       budget: defaultValues.budget.value,
//     });
//   };

//   return (
//     <div
//       style={{
//         boxShadow: " 0px 0px 6px 3px #FFFFFF40 inset",
//         backdropFilter: "blur(14px)",
//       }}
//       className="mt-9 w-full max-w-6xl  p-4   border-primary rounded-[14px] mx-auto  "
//     >
//       <div className="grid grid-cols-1 md:grid-cols-6 gap-2 items-center">
//         <div className="flex flex-col">
//           <label className="text-gray-300 text-sm mb-1">Looking for</label>
//           <Select
//             defaultValue={defaultValues.lookingFor}
//             options={lookingForOptions}
//             styles={customStyles}
//             components={{
//               DropdownIndicator: () => (
//                 <ChevronDown className="text-white h-4 w-4" />
//               ),
//             }}
//             isSearchable={false}
//           />
//         </div>

//         <div className="flex flex-col">
//           <label className="text-gray-300 text-sm mb-1">Location</label>
//           <Select
//             defaultValue={defaultValues.location}
//             options={locationOptions}
//             styles={customStyles}
//             components={{
//               DropdownIndicator: () => (
//                 <ChevronDown className="text-white h-4 w-4" />
//               ),
//             }}
//             isSearchable={false}
//           />
//         </div>

//         <div className="flex flex-col">
//           <label className="text-gray-300 text-sm mb-1">Property Type</label>
//           <Select
//             defaultValue={defaultValues.propertyType}
//             options={propertyTypeOptions}
//             styles={customStyles}
//             components={{
//               DropdownIndicator: () => (
//                 <ChevronDown className="text-white h-4 w-4" />
//               ),
//             }}
//             isSearchable={false}
//           />
//         </div>

//         <div className="flex flex-col">
//           <label className="text-gray-300 text-sm mb-1">Bedrooms</label>
//           <Select
//             defaultValue={defaultValues.bedrooms}
//             options={bedroomsOptions}
//             styles={customStyles}
//             components={{
//               DropdownIndicator: () => (
//                 <ChevronDown className="text-white h-4 w-4" />
//               ),
//             }}
//             isSearchable={false}
//           />
//         </div>

//         <div className="flex flex-col">
//           <label className="text-gray-300 text-sm mb-1">Budget</label>
//           <Select
//             defaultValue={defaultValues.budget}
//             options={budgetOptions}
//             styles={customStyles}
//             components={{
//               DropdownIndicator: () => (
//                 <ChevronDown className="text-white h-4 w-4" />
//               ),
//             }}
//             isSearchable={false}
//           />
//         </div>
//         <div className="flex justify-end mt-4">
//           <button
//             onClick={handleSearch}
//             className="bg-white hover:bg-gray-100 text-black font-medium py-2 px-8 rounded-lg"
//           >
//             Search
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";

import { useState, useEffect } from "react";
import Select from "react-select";
import { ChevronDown } from "lucide-react";

// Custom styles for react-select
const customStyles = {
  control: (provided) => ({
    ...provided,
    // backgroundColor: "transparent",
    // backgroundColor: "#A1A1A166",
    backgroundColor: "#AE7F2C66",
    border: "none",
    borderRadius: "18px",
    boxShadow: "none",
    // minHeight: "40px",
    height: "40px",
    cursor: "pointer",
    // padding: "10px 16px",
    padding: "0 16px",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? "#333"
      : state.isFocused
        ? "#222"
        : "transparent",
    color: "white",
    cursor: "pointer",
    "&:active": {
      backgroundColor: "#333 !important",
    },
    "&:focus": {
      backgroundColor: "#333 !important",
      outline: "none",
    },
  }),

  menu: (provided) => ({
    ...provided,
    backgroundColor: "#111",
    border: "1px solid #333",
    borderRadius: "8px",
    zIndex: 10,
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "white",
    fontSize: "16px",
    fontWeight: "500",
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: "0",

    // display: "flex",
    // alignItems: "center",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  clearIndicator: (provided, state) => ({
    ...provided,
    color: "white",
    cursor: "pointer",
    padding: 0,
    "&:hover": {
      color: "#A1A1A1",
    },
  }),

  dropdownIndicator: (provided) => ({
    ...provided,
    color: "white",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "white",
    fontSize: "16px",
    fontWeight: "500",
  }),
};

// Options for each dropdown
const lookingForOptions = [
  { label: "Off-plan", value: "Off-plan" },
  { label: "Secondary", value: "Secondary" },
  { label: "Rent", value: "Rent" },
  { label: "Sell", value: "Sell" },
  { label: "Ready-To-Move", value: "Ready-to-move" },
];

const locationOptions = [
  { label: "Abu Dhabi", value: "Abu Dhabi" },
  { label: "Dubai", value: "Dubai" },
  { label: "Sharjah", value: "Sharjah" },
  { label: "Ajman", value: "Ajman" },
  { label: "Umm Al Quwain", value: "Umm Al Quwain" },
  { label: "Ras Al Khaimah", value: "Ras Al Khaimah" },
  { label: "Fujairah", value: "Fujairah" },
];
//for testing
const propertyTypeOptions = [
  {
    label: "Apartment",
    value: "Apartment",
  },
  {
    label: "Villa",
    value: "Villa",
  },
  {
    label: "Townhouse",
    value: "Townhouse",
  },
  {
    label: "Penthouse",
    value: "Penthouse",
  },
  {
    label: "Mansion",
    value: "Mansion",
  },
  {
    label: "Commercial",
    value: "Commercial",
  },
];

const bedroomsOptions = [
  { label: "Studio", value: "Studio" },
  { label: "1 Bedroom", value: "1 Bedrooms" },
  { label: "2 Bedroom", value: "2 Bedrooms" },
  { label: "3 Bedroom", value: "3 Bedrooms" },
  { label: "4 Bedroom", value: "4 Bedrooms" },
  { label: "5 Bedroom", value: "5 Bedrooms" },
  { label: "6 Bedroom", value: "6 Bedrooms" },
  { label: "7 Bedroom", value: "7 Bedrooms" },
  { label: "8 Bedroom", value: "8 Bedrooms" },
  { label: "9 Bedroom", value: "9 Bedrooms" },
  { label: "10 Bedroom", value: "10 Bedrooms" },
  { label: "Retail", value: "Retail" },
  { label: "Others", value: "Others" },
];

const budgetOptions = [
  { label: "AED 450,000", value: "450000" },
  { label: "AED 600,000", value: "600000" },
  { label: "AED 750,000", value: "750000" },
  { label: "AED 800,000", value: "800000" },
  { label: "AED 900,000", value: "900000" },
  { label: "AED 1,000,000", value: "1000000" },
];

export default function Search({
  filters = {},
  setFilters = () => { },
  onSearch = () => { },
  className = "",
}) {
  // Default values if no filters are provided
  const defaultFilters = {
    lookingFor: lookingForOptions[0],
    location: locationOptions[0],
    propertyType: propertyTypeOptions[0],
    bedrooms: bedroomsOptions[2],
    budget: budgetOptions[1],
  };

  // Merge provided filters with defaults
  // const [filters, setFilters] = useState({
  //   ...defaultFilters,
  //   ...filters,
  // });

  // Update internal state when props change
  // useEffect(() => {
  //   if (filters) {
  //     setFilters((prev) => ({
  //       ...prev,
  //       ...filters,
  //     }));
  //   }
  // }, [filters]);

  // Handle filter changes
  const handleFilterChange = (name, value) => {
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle search button click
  const handleSearch = () => {
    if (onSearch) {
      onSearch(filters);
    } else {
      console.log("Searching with filters:", filters);
    }
  };

  return (
    <div
      style={{
        boxShadow: " 0px 0px 6px 3px #FFFFFF40 inset",
        backdropFilter: "blur(39px)",
      }}
      className={`w-full p-5 border-primary rounded-[14px] ${className} z-100 relative`}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 items-center">
        <div className="flex flex-col gap-1">
          <label className="text-gray-300 text-xs sm:text-sm mb-1">
            Looking for
          </label>
          <Select
            value={filters.lookingFor}
            options={lookingForOptions}
            styles={customStyles}
            components={{
              DropdownIndicator: () => (
                <ChevronDown className="text-white h-4 w-4" />
              ),
            }}
            isSearchable={false}
            onChange={(option) => handleFilterChange("listing_type", option)}
            isClearable
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-gray-300 text-xs sm:text-sm mb-1">
            Location
          </label>
          <Select
            value={filters.location}
            options={locationOptions}
            styles={customStyles}
            components={{
              DropdownIndicator: () => (
                <ChevronDown className="text-white h-4 w-4" />
              ),
            }}
            isSearchable={false}
            onChange={(option) => handleFilterChange("location", option)}
            isClearable
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-gray-300 text-xs sm:text-sm mb-1">
            Property Type
          </label>
          <Select
            value={filters.propertyType}
            options={propertyTypeOptions}
            styles={customStyles}
            components={{
              DropdownIndicator: () => (
                <ChevronDown className="text-white h-4 w-4" />
              ),
            }}
            isSearchable={false}
            onChange={(option) => handleFilterChange("property_type", option)}
            isClearable
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-gray-300 text-xs sm:text-sm mb-1">
            Bedrooms
          </label>
          <Select
            value={filters.bedrooms}
            options={bedroomsOptions}
            styles={customStyles}
            components={{
              DropdownIndicator: () => (
                <ChevronDown className="text-white h-4 w-4" />
              ),
            }}
            isSearchable={false}
            onChange={(option) => handleFilterChange("bedrooms", option)}
            isClearable
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-gray-300 text-xs sm:text-sm mb-1">
            Budget
          </label>
          <Select
            value={filters.budget}
            options={budgetOptions}
            styles={customStyles}
            components={{
              DropdownIndicator: () => (
                <ChevronDown className="text-white h-4 w-4" />
              ),
            }}
            isSearchable={false}
            onChange={(option) => handleFilterChange("max_price", option)}
            isClearable
          />
        </div>

        <div className="flex justify-end items-end h-full">
          {/* <button
            onClick={handleSearch}
            className="bg-white cursor-pointer hover:bg-gray-100 text-black font-medium py-2 px-6 sm:px-8 rounded-lg text-sm sm:text-base w-full sm:w-auto"
          >
            Search
          </button> */}
          <button
            onClick={handleSearch}
            className="bg-[#e79911] cursor-pointer text-white font-medium py-2 px-6 sm:px-8 rounded-lg text-sm sm:text-base w-full sm:w-auto"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
