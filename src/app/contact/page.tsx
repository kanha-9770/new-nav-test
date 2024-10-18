import React from "react";
import dynamic from "next/dynamic";
const ContactForm = dynamic(() => import("@/components/Contact-page/Contact"), {
  ssr: false,
});
const Branches = dynamic(() => import("@/components/Contact-page/Branches"), {
  ssr: false,
});
const Reach = dynamic(() => import("@/components/Contact-page/Reach"), {
  ssr: false,
});
export default function contact() {
  return (
    <main>
      <ContactForm />
      <Branches />
      <div className="mb-10">
        <Reach />
      </div>
    </main>
  );
}
