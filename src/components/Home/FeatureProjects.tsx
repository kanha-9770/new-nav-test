"use client";
import React, { useEffect, useRef, useState, useMemo, useCallback } from "react";
import Image from "next/image";

import data from "../Constants/hero.json"; // Assuming this holds the 'homefeaturedata'
import { HomeData } from "./types/constant";

interface FeatureProjectLayoutProps{
  heroData:HomeData;
}
const FeatureProjects: React.FC<FeatureProjectLayoutProps> = ({heroData}) => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const borderRef = useRef<HTMLDivElement | null>(null);
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);

  // Memoize relatedProduct to prevent recalculation on every render
  const relatedProduct =heroData?.home[4]?.data;

  // Memoized scroll functions to avoid re-creation on every render
  const scrollLeft = useCallback(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -carouselRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  }, []);

  const scrollRight = useCallback(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: carouselRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  }, []);

 
  return (
    <div className="w-full h-[35vh] px-10 font-poppins max-w-screen-2xl mx-auto">
      <div
        ref={borderRef}
        className="border-t-[0.1rem] border-solid border-[#f2f2f2] w-[10%] lg:mx-[2rem] mx-[1rem]"
      />

      <div className="flex flex-row rounded-2xl lg:my-[1vh] bg-white p-2">
        {/* Left Section with Title and Buttons */}
        <div className="flex w-[20%] pt-2 flex-col relative items-center">
          <div className="lg:text-2xl text-center text-[1.8rem]">
            <h2 className="lg:text-2xl text-center  text-[1.8rem] bg-gradient-to-r from-[#483d73] to-red-700 bg-clip-text text-transparent font-medium">
              {relatedProduct?.title?.trim().replace(/\s+\S+$/, "") ||
                "Default Title"}
            </h2>
            <h2 className="lg:text-2xl text-center  text-[1.8rem] bg-gradient-to-r from-[#483d73] to-red-700 bg-clip-text text-transparent font-semibold">
              {relatedProduct?.title?.trim().match(/\S+$/) ||
                "Default Subtitle"}
            </h2>
          </div>
          <p className="text-center text-[0.7rem] font-medium pt-2 w-[60%]">
            {relatedProduct?.description || "No description available."}
          </p>
          <div className="flex flex-row justify-between">
            <button
              className="text-[#cccaca] absolute left-16 bottom-2 lg:text-[1.5rem] text-[1.8rem] hover:text-black"
              onClick={scrollLeft}
              aria-label="Scroll Left"
            >
            </button>
            <button
              className="text-[#cccaca] absolute right-16 bottom-2 lg:text-[1.5rem] text-[1.8rem] hover:text-black"
              onClick={scrollRight}
              aria-label="Scroll Right"
            >
            </button>
          </div>
        </div>

        {/* Carousel Section */}
        <div className="w-full h-[28vh] flex items-center overflow-hidden">
          <div className="overflow-auto scrollbar-hide px-1" ref={carouselRef}>
            <div className="w-max flex items-center justify-center space-x-2">
              {relatedProduct?.imageWithDescription?.map((item, idx) => (
                <div
                  key={idx}
                  className={`relative h-[28vh] lg:w-[13vw] w-[70vw] bg-gradient-to-b from-[#f5f5f5] to-[#f2f2f2] rounded-lg transition-all duration-300 ${
                    hoveredCardIndex === idx ? "bg-[#f0f0f0]" : ""
                  }`}
                  onMouseEnter={() => setHoveredCardIndex(idx)}
                  onMouseLeave={() => setHoveredCardIndex(null)}
                >
                  {/* Image with Tooltip */}
                  <div className="absolute top-0 right-2 flex space-x-2">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center relative group">
                      <Image
                        src={item.image}
                        alt={item.h1}
                        width={400}
                        height={400}
                        className="hover:scale-90 transition-all duration-300"
                      />
                      <div className="hidden group-hover:flex absolute top-10 left-5 bg-white border border-gray-300 rounded-md shadow-md px-2 py-1 z-20">
                        <p className="lg:text-[0.7rem] text-[0.7rem] text-black">
                          {item.information}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <div className="p-2 font-poppins">
                    <h3 className="lg:text-xs font-semibold w-[65%]">
                      {item.h1}
                    </h3>
                  </div>

                  {/* Product Image */}
                  <div className="flex justify-center items-center">
                    <div className="w-full px-2 hover:px-0 transition-all duration-300 lg:h-[14vh] mt-1 flex justify-center items-center">
                      <Image
                        className="object-cover"
                        src={item.img}
                        alt={item.h1}
                        width={400}
                        height={400}
                      />
                    </div>
                  </div>

                  {/* View Machine Button */}
                  {hoveredCardIndex === idx && (
                    <div className="flex w-full items-center justify-center absolute bottom-[5%]">
                      <button className="text-[0.6rem] font-medium mr-1">
                        View Machine
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(FeatureProjects);