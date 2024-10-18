"use client";

import Image from "next/image";
import { useTransform, motion, MotionValue } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import AnimatedText from "@/components/ui/AnimatedText";

interface KnowMoreCardProps {
  i: number;
  title: string;
  description: string;
  src: string;
  url: string;
  color: string;
  expertiseExperience: string;
  expertiseAbout: string;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
}

const KnowMoreCard: React.FC<KnowMoreCardProps> = ({
  i,
  title,
  description,
  src,
  url,
  color,
  expertiseExperience,
  expertiseAbout,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef<HTMLDivElement>(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  const [styles, setStyles] = useState<{ [key: string]: string } | null>(null); // Updated type

  useEffect(() => {
    // Dynamically import the styles when the component mounts
    import(`../Styles/style.module.css`).then((module) => {
      setStyles(module.default); 
    });
  }, []);

  if (!styles) {
    return null; // Return null or a loading state until the styles are loaded
  }

  return (
    <div ref={container} className={`${styles.KnowMoreCardContainer} -mt-[5rem]`}>
      <motion.div
        style={{
          backgroundColor: color,
          scale,
        }}
        className={`${
          styles.KnowMoreCard
        } top-[calc(2vh + ${i}px)] lg:top-[calc(2vh + ${i * 0.5}px)] `}
      >
        <div className={styles.body}>
          <div className={styles.description}>
            <div
              style={{
                backgroundColor: color,
              }}
              className={styles.expertiseContainer}
            >
              <div className={styles.expertiseText}>
                <div className="font-poppins text-white">
                  {expertiseExperience}
                </div>
                <div className="text-white font-bold font-poppins">
                  <AnimatedText
                    className="text-white"
                    text={`${expertiseAbout}`}
                  />
                </div>
              </div>
            </div>
            <h2 className="text-center text-base lg:text-lg font-semibold text-white font-poppins">
              {title}
            </h2>
            <p className="text-sm mt-2 lg:text-base font-regular text-white text-center font-poppins">
              {description}
            </p>

            <span className="w-full flex flex-row justify-center items-center">
              <Link
                className="text-base text-[#483d78] font-poppins font-semibold text-center"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                See more
              </Link>
            </span>
          </div>
          <motion.div className={styles.imageContainer}>
            <Image height={400} width={400} src={src} alt="image" className={styles.image} />
          </motion.div>
          <div className={styles.imageCorner}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              viewBox="0 0 20 20"
              fill="none"
              className="svg--ca1"
            >
              <path
                d="M20 20C20 8.95431 11.0457 0 0 0H20V20Z"
                fill={color} // Use the color prop here
              ></path>
            </svg>
          </div>
          <div className={styles.imageCorner_second}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              viewBox="0 0 20 20"
              fill="none"
              className="svg--ca1"
            >
              <path
                d="M20 20C20 8.95431 11.0457 0 0 0H20V20Z"
                fill={color}
              ></path>
            </svg>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default KnowMoreCard;
