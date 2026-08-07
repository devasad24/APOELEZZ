"use client";
import { useState } from "react";
import {
  MapPin,
  Share2,
  Download,
  Printer,
  Camera,
  Linkedin,
} from "lucide-react";
import Image from "next/image";
import useApi from "@/utils/useApi";

export default function Details({ blogDetails }) {
  console.log("blog details: ", blogDetails);
  const [formData, setFormData] = useState({
    leadName: "",
    leadEmail: "",
    leadContact: "",
    notes: "",
  });
  const { fetchData } = useApi();

  function handleSubmit(e) {
    fetchData(
      `/create-lead`,

      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: formData,
      },
      (res, status) => {
        if (status) {
          alert("Form is successfully submitteds!");
        } else {
          alert("Form cannot be submitted");
        }
      }
    );
  }
  return (
    <div
      className="min-h-screen  text-white"
      style={{
        background:
          "linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(244, 218, 121, 0.44) 57.83%, rgba(0, 0, 0, 0.8) 100%)",
      }}
    >
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - 2/3 width on large screens */}
          <div className="lg:col-span-2 space-y-10">{blogDetails?.content}</div>

          {/* Sidebar - 1/3 width on large screens */}
          <div className="lg:col-span-1">
            {/* Overview Card */}
            {/* <div className=" rounded-lg p-6 mb-6 border">
              <h3 className="text-xl font-semibold mb-4 border-b border-zinc-700 pb-2">
                Overview
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                    >
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                  </div>
                  <span>{blogDetails?.bedrooms}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                    >
                      <path d="M8 2v2m8-2v2M2 7h20M5 7v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7"></path>
                      <circle cx="7" cy="15" r="1"></circle>
                      <circle cx="12" cy="15" r="1"></circle>
                      <circle cx="17" cy="15" r="1"></circle>
                    </svg>
                  </div>
                  <span>{blogDetails?.bathrooms}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                    >
                      <rect
                        x="3"
                        y="3"
                        width="18"
                        height="18"
                        rx="2"
                        ry="2"
                      ></rect>
                      <line x1="3" y1="9" x2="21" y2="9"></line>
                      <line x1="9" y1="21" x2="9" y2="9"></line>
                    </svg>
                  </div>
                  <span>
                    {blogDetails?.size} {blogDetails?.size_unit}
                  </span>
                </div>
              </div>
            </div> */}

            {/* TABLE OF CONTENT CARD */}
            <div className=" rounded-lg p-6 mb-6 border">
              <h3 className="text-xl font-semibold mb-4 border-b border-zinc-700 pb-2">
                Table of Content
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 pl-6">
                  <ol className="list-disc">
                    {blogDetails?.tableOfContents?.map((toc, index) => (
                      <li key={index}>{toc}</li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>

            {/* Share Section */}
            <div className=" flex justify-between items-center rounded-lg px-6 py-3 mb-6 border bg-[#3D3D3D66]">
              <div className="flex items-center gap-2 ">
                <Share2 className="w-5 h-5" />
                <span className="font-medium">Share</span>
              </div>
              <div className="flex gap-3">
                <button className="p-2  rounded-md hover:bg-zinc-700 transition">
                  <Download className="w-5 h-5" />
                </button>
                <button className="p-2  rounded-md hover:bg-zinc-700 transition">
                  <Printer className="w-5 h-5" />
                </button>
                <button className="p-2  rounded-md hover:bg-zinc-700 transition">
                  <Camera className="w-5 h-5" />
                </button>
                <button className="p-2  rounded-md hover:bg-zinc-700 transition">
                  <Linkedin className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Contact Form */}
            <div className=" rounded-lg p-6 border">
              <h3 className="text-xl font-semibold mb-4 border-b border-zinc-700 pb-2">
                Contact Us
              </h3>
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your Name"
                    value={formData?.leadName}
                    onChange={(e) =>
                      setFormData((pre) => ({
                        ...pre,
                        leadName: e?.target?.value,
                      }))
                    }
                    className="w-full px-3 py-2  border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-600"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="your@email.com"
                    value={formData?.leadEmail}
                    onChange={(e) =>
                      setFormData((pre) => ({
                        ...pre,
                        leadEmail: e?.target?.value,
                      }))
                    }
                    className="w-full px-3 py-2  border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-600"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="+1 (XXX) XXX-XXXX"
                    value={formData?.leadContact}
                    onChange={(e) =>
                      setFormData((pre) => ({
                        ...pre,
                        leadContact: e?.target?.value,
                      }))
                    }
                    className="w-full px-3 py-2  border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-600"
                  />
                </div>
                <div>
                  <label
                    htmlFor="note"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Note
                  </label>
                  <textarea
                    id="note"
                    rows={3}
                    placeholder="Type your Message..."
                    value={formData?.notes}
                    onChange={(e) =>
                      setFormData((pre) => ({
                        ...pre,
                        notes: e?.target?.value,
                      }))
                    }
                    className="w-full px-3 py-2  border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-600"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  onClick={() => handleSubmit()}
                  className="w-full btn_primary cursor-pointer  hover:bg-zinc-700 text-white font-medium py-2 px-4 rounded-md transition duration-200"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
