"use client";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const PropertyCardSkeleton = () => {
  return (
    <div>
      <div className="w-full max-w-[400px] min-w-[320px]">
        <div
          style={{
            backdropFilter: "blur(14px)",
            boxShadow: "0px 0px 6px 3px #FFFFFF40 inset",
          }}
          className="flex flex-col gap-3 sm:gap-4 md:gap-[18px] rounded-[16px] bg-[#3d3d3d66] p-2 sm:p-2.5 border-primary text-white h-full"
        >
          {/* Image skeleton */}
          <div className="relative h-[200px] sm:h-[240px] md:h-[296px] content-center">
            <Skeleton
              height="100%"
              width="100%"
              borderRadius={16}
              baseColor="#2a2a2a"
              highlightColor="#3d3d3d"
            />
            {/* Listing type button skeleton */}
            <div className="absolute left-3 sm:left-5 top-3 sm:top-[23.50px]">
              <Skeleton
                height={28}
                width={88}
                borderRadius={16}
                baseColor="#a99b76"
                highlightColor="#d4c695"
              />
            </div>
          </div>

          <div className="mb-2 mx-2 sm:ml-5 sm:mr-1.5">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-5">
                {/* Title skeleton */}
                <div className="w-[60%]">
                  <Skeleton
                    height={24}
                    width="100%"
                    baseColor="#2a2a2a"
                    highlightColor="#3d3d3d"
                  />
                </div>
                {/* Price skeleton */}
                <div className="w-[30%]">
                  <Skeleton
                    height={24}
                    width="100%"
                    baseColor="#a99b76"
                    highlightColor="#d4c695"
                  />
                </div>
              </div>

              {/* Location skeleton */}
              <div className="mt-1 flex items-center gap-2">
                <Skeleton
                  circle
                  height={16}
                  width={16}
                  baseColor="#2a2a2a"
                  highlightColor="#3d3d3d"
                />
                <Skeleton
                  height={16}
                  width={120}
                  baseColor="#2a2a2a"
                  highlightColor="#3d3d3d"
                />
              </div>

              {/* Property details skeleton */}
              <div className="mt-3 sm:mt-4 md:mt-[22px] flex">
                <div className="flex items-center justify-center gap-1 sm:gap-[9px] border-r border-solid border-gray-200 pr-2">
                  <Skeleton
                    circle
                    height={14}
                    width={14}
                    baseColor="#2a2a2a"
                    highlightColor="#3d3d3d"
                  />
                  <Skeleton
                    height={16}
                    width={20}
                    baseColor="#2a2a2a"
                    highlightColor="#3d3d3d"
                  />
                </div>
                <div className="ml-2 sm:ml-3.5 flex items-center justify-center gap-1 sm:gap-[9px] border-r border-solid border-gray-200 pr-2">
                  <Skeleton
                    circle
                    height={14}
                    width={14}
                    baseColor="#2a2a2a"
                    highlightColor="#3d3d3d"
                  />
                  <Skeleton
                    height={16}
                    width={20}
                    baseColor="#2a2a2a"
                    highlightColor="#3d3d3d"
                  />
                </div>
                <div className="flex flex-1 items-center gap-1 sm:gap-[9px] px-2 sm:px-3.5">
                  <Skeleton
                    circle
                    height={14}
                    width={14}
                    baseColor="#2a2a2a"
                    highlightColor="#3d3d3d"
                  />
                  <Skeleton
                    height={16}
                    width={80}
                    baseColor="#2a2a2a"
                    highlightColor="#3d3d3d"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCardSkeleton;
