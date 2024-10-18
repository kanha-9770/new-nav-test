"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./footer.module.css";
import { footerData } from "../Constants/footer/footer";

import { usePathname } from "next/navigation";

const Footer: React.FC = () => {
  const pathname = usePathname() || "";
  const componentCode = pathname.split("/")[2]?.toLowerCase();
  const componentCodeourCompany = pathname.split("/")[3]?.toLowerCase();

  return (
    <>
      <div className="h-full">
        <div className="border "></div>
        {/* <PolicyHeader /> */}
        <footer
          className={`${
            ["knowledge-center", "clientele", "our-company"].includes(
              componentCode
            ) || ["our-company"].includes(componentCodeourCompany)
              ? "bg-[#222222] text-white"
              : "bg-white"
          } ${styles.footer}`}
        >
          <div
            style={{
              backgroundImage:
                "url('https://www.nesscoindia.com/Assets/images/shape/wmap.webp')",
            }}
            className={`${styles.bgimagefooter} `}
          ></div>
          <div className="w-full relative m-auto mt-6 lg:p-0 p-3">
            <div className="flex flex-col-reverse  lg:flex-row  justify-evenly items-start w-[100%] lg:px-5  mb-[-0.10rem] ">
              <div className="flex flex-row-reverse lg:flex-row mt-7 lg:mt-0 ">
                <div
                  className={`${styles.footerlistabout} lg:order-none order-last  `}
                >
                  <h3
                    className={`${styles.footerdesctitle} font-poppins text-sm font-semibold invert-0`}
                  >
                    OUR STORES
                  </h3>
                  <div className="flex flex-col -space-y-6 font-poppins hover:text-red-600 w-[3rem] font-light text-xs">
                    {footerData.stores.map((store, index) => (
                      <Link key={index} href="/" passHref>
                        <p className={styles.footeratags}>{store}</p>
                      </Link>
                    ))}
                  </div>
                  <h3
                    className={`${styles.footerdesctitle} font-poppins text-sm font-semibold invert-0 mt-4 lg:w-[10rem]`}
                  >
                    BUSINESS PARTNERS
                  </h3>
                  <p className="mt-3 font-light text-xs lg:w-[8rem] font-poppins hover:text-red-600 cursor-pointer invert-0">
                    {footerData.businessPartners}
                  </p>
                  <h3
                    className={`${styles.footerdesctitle} font-poppins text-sm font-semibold invert-0 mt-4 lg:w-[10rem]`}
                  >
                    LANGUAGE & REGION
                  </h3>
                  <p className="mt-3 font-light text-xs font-poppins hover:text-red-600 cursor-pointer invert-0 lg:w-[5rem]">
                    India | English
                  </p>
                  <h3
                    className={`${styles.footerdesctitle} font-semibold font-poppins invert-0 text-sm mt-8 lg:w-[14rem]`}
                  >
                    AWARDS & CERTIFICATIONS
                  </h3>
                  <div className="flex flex-row lg:w-[35rem] w-[24rem] -ml-2">
                    {footerData.awards.map((award, index) => (
                      <div aria-label="Footer Icon" key={index}>
                        <a
                          href="https://www.example.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image
                            src={award.src}
                            alt={award.alt}
                            width={200} // Adjust the size as needed
                            height={200} // Adjust the size as needed
                            style={{ height: "7rem", width: "12rem" }}
                            className="scale-125 transform transition-transform duration-300 hover:scale-150"
                          />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col w-[18%] relative -left-[10rem] lg:left-16 ">
                  <h3 className="font-semibold font-poppins text-sm  invert-0">
                    CLIENTELE
                  </h3>
                  <div className={styles.footerlistslink}>
                    <Link href="/" passHref>
                      <p className="font-poppins text-xs font-light mt-4 w-[5rem] hover:text-red-600 cursor-pointer invert-0">
                        {footerData.clients}
                      </p>
                    </Link>
                  </div>
                  <h3 className="font-semibold text-sm invert-0 font-poppins mt-5">
                    CAREERS
                  </h3>
                  <div className="text-xs font-light font-poppins -space-y-7 hover:text-red-600 cursor-pointer invert-0  w-[3rem]">
                    {footerData.careers.map((career, index) => (
                      <Link key={index} href="/" passHref>
                        <p className={styles.footeratags}>{career}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex-row flex lg:flex-none  lg:mt-0 mt-6 lg:-ml-[30vw]">
                <div className="w-[20%] ">
                  <h3 className="font-semibold text-sm font-poppins invert-0">
                    LINKS
                  </h3>
                  <div className="font-poppins text-xs font-light space-y-10 hover:text-red-600 invert-0  w-[4rem]">
                    {footerData.links.map((link, index) => (
                      <Link key={index} href="/" passHref>
                        <p className={styles.footeratags}>{link}</p>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="w-[20%]  lg:ml-20 ml-10">
                  <h3 className="font-semibold text-sm font-poppins invert-0">
                    LINKS
                  </h3>
                  <div className="font-poppins text-xs font-light space-y-10 hover:text-red-600 w-[4rem] invert-0">
                    {footerData.links.map((link, index) => (
                      <Link key={index} href="/" passHref>
                        <p className={styles.footeratags}>{link}</p>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col  w-[30%] lg:ml-20 ml-10 ">
                  <h3 className="font-semibold font-poppins text-sm invert-0 ">
                    SERVICES
                  </h3>
                  <div className="font-poppins font-light text-xs w-[8.5rem] hover:text-red-600 cursor-pointer ">
                    {footerData.services.map((service, index) => (
                      <Link key={index} href="/" passHref>
                        <p className={styles.footeratags}>{service}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:w-[20%] ">
                <h3
                  className={`${styles.footerdesctitle} font-poppins invert-0 text-sm font-semibold text-center lg:text-left`}
                >
                  SUBSCRIBE TO NEWSLETTER
                </h3>
                <div className="flex">
                  <input
                    placeholder="Enter your email address"
                    className=" lg:w-[20rem] w-[22rem] mt-2 h-[2.5rem] rounded-xl border p-2 border-black font-poppins font-light text-xs"
                  />
                  telegram
                </div>

                <div className="flex lg:flex-col ">
                  <div className="  ">
                    <h3
                      className={`${styles.footerdesctitle} font-semibold  invert-0 text-sm font-poppins mt-[1.6rem]`}
                    >
                      CONTACT US
                    </h3>
                    <div
                      className={`${styles.footerlistslink} hover:text-red-600 cursor-pointer font-poppins text-xs font-light invert-0 w-[7rem] `}
                    >
                      {footerData.contacts.map((contact, index) => (
                        <Link key={index} href={contact.href} passHref>
                          <p className={styles.footeratags}>{contact.name}</p>
                        </Link>
                      ))}
                    </div>

                    <div className="flex flex-row space-x-2 mt-5  "></div>
                  </div>
                  <div>
                    <h3
                      className={`${styles.footerdesctitle} font-poppins invert-0 text-sm font-semibold lg:mt-5 mt-7`}
                    >
                      ADDRESS
                    </h3>
                    <div className="font-poppins hover:text-red-600 cursor-pointer text-xs font-light mt-2  invert-0 ">
                      <p className=" lg:w-[14rem] w-[12rem]">
                        {footerData.address}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className={`${styles.footerrights}  `}>
          <div className={`${styles.footercontainerx} `}>
            <p
              className={`${styles.footerright} lg:-ml-10 font-poppins text-sm font-light`}
            >
              {footerData.copyright}
            </p>
            <div className="border h-[2rem] border-gray-400 ml-5"></div>
            {/* <Link href="/privacy-policy/" passHref>
              <p className="font-poppins text-sm font-light ml-5 invert-0">
                {footerData.privacyPolicy}
              </p>
            </Link> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
