"use client";
import { useState, useEffect } from "react";
import useApi from "@/utils/useApi";
import Image from "next/image";

export default function OurTeam() {
  const { fetchData } = useApi();
  const [teamMembers, setTeamMembers] = useState([]);

  const fetchTeamMembers = (page = 1, filters, callBack) => {
    console.log(filters, "filters");
    fetchData(
      `/allUsers?status=1&is_displayed=1&order=role`,
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + process.env.NEXT_PUBLIC_CRM_API_TOKEN,
        },
      },
      (res, status) => {
        callBack(res, status);
      }
    );
  };

  useEffect(() => {
    fetchTeamMembers(1, {}, (res, status) => {
      setTeamMembers(res?.users);
    });
  }, []);
  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(244, 218, 121, 0.44) 57.83%, rgba(0, 0, 0, 0.8) 100%)",
      }}
      className="w-full min-h-screen px-[7%] py-12"
    >
      <div className="flex flex-col gap-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase text-center">
          Our Team
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {teamMembers?.map((member) => (
            <div
              key={member.id}
              className="relative rounded-xl overflow-hidden"
            >
              <img
                src={
                  member.profile_picture || "/images/placeholder_profile.webp"
                }
                alt={`${member.userName}'s photo`}
                width={400}
                height={400}
                className="w-full aspect-square object-cover"
              />
              <div className="absolute bottom-0 left-0 bg-black/70 w-full text-white px-3 py-2 backdrop-blur-sm text-center flex flex-col gap-1">
                <p className="font-semibold text-base capitalize">
                  {member?.userName?.split(" ").slice(0, 3).join(" ")}
                </p>
                <p className="uppercase font-light text-sm">
                  {member.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
