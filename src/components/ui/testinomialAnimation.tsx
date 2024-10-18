import React from "react";
import { cn } from "../../lib/utils";
import Image from "next/image";

export const TestiNomialAnimation = ({
  items,
  speed = "normal",
  pauseOnHover = true,
  className,
}: {
  items: {
    src: string;
    username: string;
    profile: string;
    country: string;
    quote: string;
    flag: string;
  }[];
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const getAnimationDuration = (index: number) => {
    if (speed === "fast") {
      return index === 1 ? "25s" : "20s";
    } else if (speed === "normal") {
      return index === 1 ? "35s" : "30s";
    } else {
      return index === 1 ? "45s" : "40s";
    }
  };

  return (
    <div
      className={cn(
        "relative max-w-5xl mask-gradient overflow-hidden grid grid-cols-3 gap-2 lg:gap-4",
        className
      )}
    >
      {[0, 1, 2].map((index) => (
        <div
          key={index}
          className={cn(
            "relative z-20 h-full overflow-hidden",
            className
          )}
        >
          <ul
            className={cn(
              "flex flex-col min-h-full shrink-0 py-4 flex-nowrap",
              "animate-scroll-testimonial",
              pauseOnHover && "hover:[animation-play-state:paused]"
            )}
            style={{
              '--animation-duration': getAnimationDuration(index),
            } as React.CSSProperties}
          >
            {items.map((el, idx) => (
              <li
                key={el.username + idx}
                className="p-[0.2rem] rounded-3xl bg-gradient-to-t from-purple-500 to-transparent border-[1px] mt-2 w-full lg:w-[15.5rem] md:w-[12rem] sm:w-[10rem] sm:p-[0.1rem] mx-auto"
              >
                <div className="p-1 lg:p-2 bg-white rounded-[1.2rem] flex flex-col justify-between h-[10rem] lg:h-[14.8rem] w-full lg:w-[15rem] md:h-[9rem] md:w-[11rem] sm:h-[8rem] sm:w-[10rem] mx-auto">
                  <div>
                    <div className="flex flex-row justify-between items-center">
                      <Image
                        src={el.src}
                        className="rounded-full h-6 w-6 lg:h-8 lg:w-8 object-cover"
                        height="8"
                        width="8"
                        alt={el.username}
                      />
                      <div className="flex justify-end">
                        <Image
                          height={100}
                          width={100}
                          src={el.flag}
                          alt={`${el.country} flag`}
                          className="w-6 h-6 md:w-6 md:h-6 lg:h-8 lg:w-8 sm:w-5 sm:h-5"
                        />
                      </div>
                    </div>
                    <p className="text-center text-2xl lg:text-4xl">❝</p>
                    <p className="text-gray-700 text-center text-xs lg:text-base mb-2">{el.quote}</p>
                  </div>
                  <div className="hidden lg:flex text-base pb-1 flex-row justify-start items-center">
                    <div className="h-10 w-1 bg-[#483d78]"></div>
                    <div className="flex ml-2 flex-col">
                      <h3 className="text-xs lg:text-sm">{el.username}</h3>
                      <p className="text-xs lg:text-sm text-gray-500">{el.profile}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};