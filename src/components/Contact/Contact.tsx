import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
const SignupFormDemo = dynamic(() => import("./SignupFormDemo"));
interface ContactFormProps {
  isContactFormVisible: boolean;
  setContactFormVisible: (visible: boolean) => void;
  setIsFlagOpen: (flag: boolean) => void;
}
const ContactForm: React.FC<ContactFormProps> = ({
  isContactFormVisible,
  setContactFormVisible,
  setIsFlagOpen,
}) => {
  const contactRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);


  // Show form when mouse enters the button or the form itself
  const handleMouseEnter = () => {
    setContactFormVisible(true);
    setIsFlagOpen(false);
  };

  // Hide form when the mouse leaves both the button and the form
  const handleMouseLeave = (event: React.MouseEvent) => {
    if (
      contactRef.current &&
      !contactRef.current.contains(event.relatedTarget as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.relatedTarget as Node)
    ) {
      setContactFormVisible(false);
    }
  };

  useEffect(() => {
    const contactElement = contactRef.current;
    const buttonElement = buttonRef.current;

    // Native event listeners require a DOM-compatible event handler
    const handleMouseLeaveNative = (event: MouseEvent) => {
      if (
        contactRef.current &&
        !contactRef.current.contains(event.relatedTarget as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.relatedTarget as Node)
      ) {
        setContactFormVisible(false);
      }
    };

    // Add event listeners for mouse leave
    contactElement?.addEventListener("mouseleave", handleMouseLeaveNative);
    buttonElement?.addEventListener("mouseleave", handleMouseLeaveNative);

    // Cleanup event listeners
    return () => {
      contactElement?.removeEventListener("mouseleave", handleMouseLeaveNative);
      buttonElement?.removeEventListener("mouseleave", handleMouseLeaveNative);
    };
  }, []);

  const transition = {
    type: "spring",
    mass: 0.5,
    damping: 11.5,
    stiffness: 100,
    restDelta: 0.001,
    restSpeed: 0.001,
  };

  return (
    <div className="">
    

      <AnimatePresence>
        {isContactFormVisible && (
          <motion.div
            ref={contactRef}
            className="fixed top-14 right-0 z-50 mr-8 mt-0 w-[200px] md:w-[300px] lg:w-[400px] xl:w-[500px] bg-white rounded-lg overflow-hidden"
            initial={{ y: "-100%", height: 0, opacity: 0 }}
            animate={{ y: 0, height: "35rem", opacity: 1 }}
            exit={{ y: "-100%", height: 0, opacity: 0 }}
            transition={transition}
            onMouseEnter={handleMouseEnter} // Keep form visible when entering it
            onMouseLeave={handleMouseLeave} // Hide form when leaving it
          >
            {/* Header with text and close icon */}
            <div className="flex justify-between items-center p-4">
              <h2 className="font-montserrat text-xl text-neutral-800 dark:text-neutral-200">
                GET IN TOUCH WITH US
              </h2>
              <button
                onClick={() => setContactFormVisible(false)}
                aria-label="Close contact form"
                className="text-gray-600 hover:text-gray-800"
              >
                X
              </button>
            </div>

            {/* Content */}
            <SignupFormDemo />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactForm;
