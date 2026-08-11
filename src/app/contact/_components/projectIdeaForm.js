// "use client";

// import React from "react";

// import { useState } from "react";
// import Link from "next/link";
// import {
//   Send,
//   Facebook,
//   Twitter,
//   Linkedin,
//   MapPin,
//   Phone,
//   Mail,
//   ChevronDown,
// } from "lucide-react";

// export default function ProjectIdeaForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     category: "",
//     service: "",
//     message: "",
//     agreeToTerms: false,
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleCheckboxChange = (e) => {
//     const { name, checked } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: checked }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log("Form submitted:", formData);
//   };

//   return (
//     <div className="min-h-screen bg-black text-white px-[100px]">
//       <div className="container mx-auto px-4 py-16">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* Left Column - Contact Info */}
//           <div className="space-y-12">
//             <div className="space-y-4">
//               <h2 className="text-2xl font-bold">Get in Touch</h2>
//               <div className="flex flex-col space-y-3">
//                 <div className="bg-gray-900 rounded px-4 py-3 inline-flex items-center w-fit">
//                   <Mail className="w-4 h-4 mr-2 text-gray-400" />
//                   <span>info@apoelezz.com</span>
//                 </div>
//                 <div className="bg-gray-900 rounded px-4 py-3 inline-flex items-center w-fit">
//                   <Phone className="w-4 h-4 mr-2 text-gray-400" />
//                   <span>+1 (123) 456-7890</span>
//                 </div>
//               </div>
//             </div>

//             <div className="space-y-4">
//               <h2 className="text-2xl font-bold">Our Office</h2>
//               <div className="flex items-start">
//                 <MapPin className="w-5 h-5 mr-2 text-gray-400 mt-0.5" />
//                 <span>Address: 123 Main St, Anytown, UAE 12345</span>
//               </div>
//               <button className="bg-gray-900 hover:bg-gray-800 transition-colors rounded px-4 py-2 text-sm">
//                 Get Directions
//               </button>
//             </div>

//             <div className="space-y-4">
//               <h2 className="text-2xl font-bold">Connect with us</h2>
//               <div className="flex space-x-3">
//                 <Link
//                   href="#"
//                   className="bg-gray-900 hover:bg-gray-800 transition-colors p-3 rounded-full"
//                   aria-label="Facebook"
//                 >
//                   <Facebook className="w-5 h-5" />
//                 </Link>
//                 <Link
//                   href="#"
//                   className="bg-gray-900 hover:bg-gray-800 transition-colors p-3 rounded-full"
//                   aria-label="Twitter"
//                 >
//                   <Twitter className="w-5 h-5" />
//                 </Link>
//                 <Link
//                   href="#"
//                   className="bg-gray-900 hover:bg-gray-800 transition-colors p-3 rounded-full"
//                   aria-label="LinkedIn"
//                 >
//                   <Linkedin className="w-5 h-5" />
//                 </Link>
//               </div>
//             </div>
//           </div>

//           {/* Right Column - Contact Form */}
//           <div className="bg-black border border-gray-800 rounded-lg p-6">
//             <h2 className="text-2xl font-bold mb-6">
//               Have a project in your mind?
//             </h2>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div className="space-y-1">
//                   <div className="relative">
//                     <input
//                       type="text"
//                       id="name"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleInputChange}
//                       placeholder="Name"
//                       className="w-full bg-black border border-gray-800 rounded px-10 py-2 focus:outline-none focus:border-gray-600"
//                       required
//                     />
//                     <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="16"
//                         height="16"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       >
//                         <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
//                         <circle cx="12" cy="7" r="4" />
//                       </svg>
//                     </span>
//                   </div>
//                 </div>

//                 <div className="space-y-1">
//                   <div className="relative">
//                     <input
//                       type="tel"
//                       id="phone"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleInputChange}
//                       placeholder="Phone Number"
//                       className="w-full bg-black border border-gray-800 rounded px-10 py-2 focus:outline-none focus:border-gray-600"
//                     />
//                     <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
//                       <Phone className="w-4 h-4" />
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               <div className="space-y-1">
//                 <div className="relative">
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     placeholder="Business Email"
//                     className="w-full bg-black border border-gray-800 rounded px-10 py-2 focus:outline-none focus:border-gray-600"
//                     required
//                   />
//                   <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
//                     <Mail className="w-4 h-4" />
//                   </span>
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div className="space-y-1">
//                   <div className="relative">
//                     <select
//                       id="category"
//                       name="category"
//                       value={formData.category}
//                       onChange={handleInputChange}
//                       className="w-full bg-black border border-gray-800 rounded px-10 py-2 focus:outline-none focus:border-gray-600 appearance-none"
//                     >
//                       <option value="" disabled selected>
//                         Category
//                       </option>
//                       <option value="residential">Residential</option>
//                       <option value="commercial">Commercial</option>
//                       <option value="investment">Investment</option>
//                       <option value="off-plan">Off-Plan</option>
//                     </select>
//                     <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="16"
//                         height="16"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       >
//                         <path d="M2 17V5c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z" />
//                         <path d="M2 8h20" />
//                       </svg>
//                     </span>
//                     <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
//                       <ChevronDown className="w-4 h-4" />
//                     </span>
//                   </div>
//                 </div>

//                 <div className="space-y-1">
//                   <div className="relative">
//                     <select
//                       id="service"
//                       name="service"
//                       value={formData.service}
//                       onChange={handleInputChange}
//                       className="w-full bg-black border border-gray-800 rounded px-10 py-2 focus:outline-none focus:border-gray-600 appearance-none"
//                     >
//                       <option value="" disabled selected>
//                         Service you are interested in
//                       </option>
//                       <option value="buying">Buying Property</option>
//                       <option value="selling">Selling Property</option>
//                       <option value="renting">Renting</option>
//                       <option value="investment">Investment Advisory</option>
//                     </select>
//                     <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="16"
//                         height="16"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       >
//                         <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
//                       </svg>
//                     </span>
//                     <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
//                       <ChevronDown className="w-4 h-4" />
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               <div className="space-y-1">
//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleInputChange}
//                   placeholder="Message"
//                   rows={5}
//                   className="w-full bg-black border border-gray-800 rounded px-4 py-2 focus:outline-none focus:border-gray-600"
//                   required
//                 ></textarea>
//               </div>

//               <div className="flex items-center">
//                 <input
//                   type="checkbox"
//                   id="agreeToTerms"
//                   name="agreeToTerms"
//                   checked={formData.agreeToTerms}
//                   onChange={handleCheckboxChange}
//                   className="mr-2"
//                   required
//                 />
//                 <label htmlFor="agreeToTerms" className="text-sm text-gray-400">
//                   I agree with{" "}
//                   <Link href="#" className="underline hover:text-white">
//                     Terms of Use
//                   </Link>{" "}
//                   and{" "}
//                   <Link href="#" className="underline hover:text-white">
//                     Privacy Policy
//                   </Link>
//                 </label>
//               </div>

//               <div className="text-right">
//                 <button
//                   type="submit"
//                   className="bg-stone-500 hover:bg-stone-600 transition-colors rounded px-6 py-2 flex items-center justify-center gap-2 ml-auto"
//                 >
//                   Send <Send className="w-4 h-4" />
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  Send,
  Facebook,
  Twitter,
  Linkedin,
  MapPin,
  Phone,
  Mail,
  ChevronDown,
} from "lucide-react";
import useApi from "@/utils/useApi";

export default function ProjectIdeaForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    category: "",
    service: "",
    message: "",
    agreeToTerms: false,
  });
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', 'error'
  const [message, setMessage] = useState("");
  const messageRef = useRef(null);
  const { fetchData } = useApi();

  useEffect(() => {
    if (submitStatus && messageRef.current) {
      messageRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [submitStatus]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitStatus(null);
    setMessage("");

    // Get device, filename (URL), and IP (if available)
    const device = typeof window !== "undefined" ? navigator.userAgent : "";
    const filename = typeof window !== "undefined" ? window.location.href : "";
    let ip = "";
    try {
      const ipRes = await fetch("https://api.ipify.org?format=json");
      if (ipRes.ok) {
        const ipData = await ipRes.json();
        ip = ipData.ip || "";
      }
    } catch {
      ip = "";
    }

    // Map fields as requested
    const payload = {
      leadName: formData.name,
      leadContact: formData.phone,
      leadEmail: formData.email,
      leadFor: formData.category,
      enquiryType: formData.service,
      notes: formData.message,
      leadSource: "Website Form",
      ip,
      filename,
      device,
    };

    // Check for required fields
    if (
      !payload.leadName ||
      !payload.leadContact ||
      !payload.leadEmail ||
      !payload.leadFor ||
      !payload.enquiryType ||
      !payload.notes ||
      !formData.agreeToTerms
    ) {
      setSubmitStatus("error");
      setMessage("All fields are required and terms must be accepted.");
      setLoading(false);
      return;
    }

    fetchData(
      `/create-lead`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: payload,
      },
      (res, status) => {
        setLoading(false);
        if (status) {
          setSubmitStatus("success");
          setMessage("Thank you! Your message has been sent successfully.");
          setFormData({
            name: "",
            phone: "",
            email: "",
            category: "",
            service: "",
            message: "",
            agreeToTerms: false,
          });
        } else {
          setSubmitStatus("error");
          setMessage("Something went wrong. Please try again later.");
        }
      }
    );
  };

  return (
    <div className="bg-black text-white">
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Column - Contact Info */}
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-6">
              <h2 className="text-xl sm:text-2xl font-bold">Get in Touch</h2>
              <div className="bg-gray-900 rounded px-3 sm:px-4 py-2 sm:py-3 inline-flex items-center w-fit">
                <Mail className="w-5 h-5 mr-2 text-gray-400" />
                <span className="text-sm sm:text-base">
                  info@apoelezz.com
                </span>
              </div>
              <div className="bg-gray-900 rounded px-3 sm:px-4 py-2 sm:py-3 inline-flex items-center w-fit">
                <Phone className="w-5 h-5 mr-2 text-gray-400" />
                <span className="text-sm sm:text-base">
                  +971 52 809 7303
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <h2 className="text-xl sm:text-2xl font-bold">Our Office</h2>
              <div className="bg-gray-900 rounded px-3 sm:px-4 py-2 sm:py-3 inline-flex items-center w-fit">
                <MapPin className="w-5 h-5 mr-2 text-gray-400" />
                <span className="text-sm sm:text-base">
                  Indigo Central 8 - Office 6R, Sheikh Zayed Rd - Al Manara - Dubai
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <h2 className="text-xl sm:text-2xl font-bold">Connect with us</h2>
              <div className="flex flex-wrap gap-3 items-center">
                <Link
                  href="#"
                  className="bg-gray-900 hover:bg-gray-800 transition-colors p-2 sm:p-3 rounded-full"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
                <Link
                  href="#"
                  className="bg-gray-900 hover:bg-gray-800 transition-colors p-2 sm:p-3 rounded-full"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
                <Link
                  href="#"
                  className="bg-gray-900 hover:bg-gray-800 transition-colors p-2 sm:p-3 rounded-full"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-black border border-gray-800 rounded-[16px] p-6">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
              Have any inquiry?
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Name"
                      className="w-full bg-black border border-gray-800 rounded px-10 py-2 focus:outline-none focus:border-gray-600 text-sm sm:text-base"
                      required
                    />
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="relative">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Phone Number"
                      className="w-full bg-black border border-gray-800 rounded px-10 py-2 focus:outline-none focus:border-gray-600 text-sm sm:text-base"
                    />
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                      <Phone className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Business Email"
                    className="w-full bg-black border border-gray-800 rounded px-10 py-2 focus:outline-none focus:border-gray-600 text-sm sm:text-base"
                    required
                  />
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                    <Mail className="w-4 h-4" />
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <div className="relative">
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full bg-black border border-gray-800 rounded px-10 py-2 focus:outline-none focus:border-gray-600 appearance-none text-sm sm:text-base"
                    >
                      <option value="" disabled selected>
                        Category
                      </option>
                      <option value="residential">Residential</option>
                      <option value="commercial">Commercial</option>
                      <option value="investment">Investment</option>
                      <option value="off-plan">Off-Plan</option>
                    </select>
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M2 17V5c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z" />
                        <path d="M2 8h20" />
                      </svg>
                    </span>
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="relative">
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full bg-black border border-gray-800 rounded px-10 py-2 focus:outline-none focus:border-gray-600 appearance-none text-sm sm:text-base"
                    >
                      <option value="" disabled selected>
                        Service you are interested in
                      </option>
                      <option value="buying">Buying Property</option>
                      <option value="selling">Selling Property</option>
                      <option value="renting">Renting</option>
                      <option value="investment">Investment Advisory</option>
                    </select>
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                      </svg>
                    </span>
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Message"
                  rows={4}
                  className="w-full bg-black border border-gray-800 rounded px-4 py-2 focus:outline-none focus:border-gray-600 text-sm sm:text-base"
                  required
                ></textarea>
              </div>

              <div className="flex items-start sm:items-center">
                <input
                  type="checkbox"
                  id="agreeToTerms"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleCheckboxChange}
                  className="mr-2 mt-1 sm:mt-0"
                  required
                />
                <label
                  htmlFor="agreeToTerms"
                  className="text-xs sm:text-sm text-gray-400"
                >
                  I agree with{" "}
                  <Link href="#" className="underline hover:text-white">
                    Terms of Use
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy_policies" className="underline hover:text-white">
                    Privacy Policy
                  </Link>
                </label>
              </div>

              <div className="text-right">
                <button
                  type="submit"
                  className={`bg-stone-500 hover:bg-stone-600 transition-colors rounded px-4 sm:px-6 py-2 flex items-center justify-center gap-2 ml-auto text-sm sm:text-base ${loading ? "opacity-60 cursor-not-allowed" : ""
                    }`}
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 mr-2 inline-block text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
              {submitStatus && (
                <div
                  ref={messageRef}
                  className={`rounded-lg text-center text-base font-medium transition-all duration-300
              ${submitStatus === "success" ? " text-white" : "text-red-600/90  "
                    }
            `}
                  role="alert"
                  tabIndex={-1}
                >
                  {message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
