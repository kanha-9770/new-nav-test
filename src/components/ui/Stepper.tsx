import React, { useState, useRef, useEffect} from "react";
import box from "../../../public/assets/stepper/box.svg";
import box1 from "../../../public/assets/stepper/bowl.svg";
import box2 from "../../../public/assets/stepper/popcorn.svg";
import box3 from "../../../public/assets/stepper/spoon.svg";
import box4 from "../../../public/assets/stepper/lid.svg";
import box5 from "../../../public/assets/stepper/box.svg";
import Image from "next/image";

const Stepper: React.FC<{ onStepChange: (index: number) => void }> = ({
  onStepChange,
}) => {
  const [activeStep, setActiveStep] = useState(0);
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]); // To manage visible steps
  const stepperRef = useRef<HTMLDivElement>(null);

  const steps = [
    { name: "All paper Products", icon: box },
    { name: "Paper cup machines", icon: box1 },
    { name: "Paper bowl machines", icon: box2 },
    { name: "Paper bag machines", icon: box3 },
    { name: "Paper plate machines", icon: box4 },
    { name: "Paper straw machines", icon: box5 },
    { name: "Paper wrap machines", icon: box },
    { name: "Napkin machines", icon: box1 },
    { name: "Tissue machines", icon: box2 },
    { name: "new products", icon: box3 },
    { name: "Other products", icon: box3 },
    { name: "Paper plate machines", icon: box4 },
    { name: "Paper straw machines", icon: box5 },
    { name: "Paper wrap machines", icon: box },
    { name: "Napkin machines", icon: box1 },
    { name: "Tissue machines", icon: box2 },
    { name: "new products", icon: box3 },
    { name: "Other products", icon: box3 },
  ];

  const handleClick = (index: number) => {
    setActiveStep(index);
    onStepChange(index);
  };

  // Use IntersectionObserver to load icons lazily
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index")!, 10);
            setVisibleSteps((prev) => [...prev, index]);
          }
        });
      },
      {
        root: stepperRef.current,
        threshold: 0.5,
      }
    );

    const stepElements = document.querySelectorAll(".step-icon");

    stepElements.forEach((element) => observer.observe(element));

    return () => {
      stepElements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <div
      className={`sticky top-14 max-w-screen-2xl left-0 w-full z-40 ${
        activeStep > 0 ? "bg-white border-t-[0.5px]" : "bg-[#f2f2f2]"
      }`}
    >
      <div className="relative flex items-center justify-center w-full h-20  mx-auto lg:h-20 ">
        <div className="w-screen">
          <div
            className="relative flex items-center max-w-screen-2xl justify-start overflow-x-scroll scrollbar-hide w-full "
            ref={stepperRef}
          >
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                <div
                  className={`flex flex-col pt-1 last:pr-[6%] first:pl-[4%] items-center justify-center relative cursor-pointer step-icon ${
                    index === activeStep ? "text-black" : "text-black"
                  }`}
                  onClick={() => handleClick(index)}
                  data-index={index}
                >
                  <div
                    className={`relative h-8 w-8 flex items-center justify-center text-xl ${
                      index === activeStep
                        ? "bg-[#dc0e2a] text-white rounded-full shadow-lg"
                        : "p-0"
                    }`}
                  >
                    {visibleSteps.includes(index) && (
                      <Image
                        className="h-6 w-6"
                        src={step.icon}
                        alt={"step-icons"}
                        height={200}
                        width={200}
                      />
                    )}
                  </div>
                  <span className="text-xs text-black lg:text-xs font-regular  mt-2 font-poppins text-center w-20 lg:w-20">
                    {step.name}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className="flex items-center">
                    <div className="h-1 border-t-2 w-4 lg:w-10"></div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stepper;
