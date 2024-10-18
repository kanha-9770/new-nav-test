"use client"
import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

import data from "../../Constants/hero.json";

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

const testinomialData = data.findLast(
  (item) => item.category === "testinomial"
)?.data;
const testimonialItems = testinomialData?.Testinomialvideos || [];

export const SwipeCarousel: React.FC = () => {
  const [videoIndex, setVideoIndex] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentVideoLink, setCurrentVideoLink] = useState<string>("");

  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setVideoIndex((pv) => (pv === testimonialItems.length - 1 ? 0 : pv + 1));
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, [dragX]);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && videoIndex < testimonialItems.length - 1) {
      setVideoIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && videoIndex > 0) {
      setVideoIndex((pv) => pv - 1);
    }
  };

 

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentVideoLink("");
  };

  return (
    <div className="relative h-full w-auto mt-6 overflow-hidden">
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        style={{ x: dragX }}
        animate={{ translateX: `-${videoIndex * 100}%` }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex cursor-grab items-center active:cursor-grabbing"
      >
        {testimonialItems.map((video, idx) => (
          <motion.div
            key={idx}
            animate={{ scale: videoIndex === idx ? 0.95 : 0.85 }}
            transition={SPRING_OPTIONS}
            className="relative h-full w-full flex-shrink-0 rounded-xl bg-black"
          >
            <video
              src={video.src}
              autoPlay={videoIndex === idx}
              loop
              muted
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute bottom-4 right-0 transform -translate-x-1/2">
              
            </div>
          </motion.div>
        ))}
      </motion.div>

      <Dots videoIndex={videoIndex} setVideoIndex={setVideoIndex} />

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[9995]">
          <div className="relative bg-white rounded-xl overflow-hidden max-w-3xl w-full">
            <button
              aria-label="CloseModal"
              onClick={closeModal}
              className="absolute top-0 right-0 bg-white p-1 rounded-full text-black z-50"
            >
            </button>
            <div className="relative w-full pt-[56.25%]">
              <iframe
                src={currentVideoLink}
                className="absolute top-0 left-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="YouTube Video"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

type DotsProps = {
  videoIndex: number;
  setVideoIndex: React.Dispatch<React.SetStateAction<number>>;
};

const Dots: React.FC<DotsProps> = ({ videoIndex, setVideoIndex }) => {
  return (
    <div className="absolute mt-1 left-1/2 transform -translate-x-1/2 flex gap-1.5">
      {testimonialItems.map((_, idx) => (
        <div
          key={idx}
          onClick={() => setVideoIndex(idx)}
          className={`relative block cursor-pointer w-1.5 h-1.5 bg-gray-400 rounded-full overflow-hidden transition-all duration-300 ${
            idx === videoIndex ? "w-10 rounded-lg h-1.5" : ""
          }`}
        >
          <span
            className={`absolute top-0 left-0 w-full h-full bg-white transform scale-x-0 origin-left ${
              idx === videoIndex ? "animate-progress" : ""
            }`}
          ></span>
        </div>
      ))}
    </div>
  );
};
