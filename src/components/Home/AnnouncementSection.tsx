"use client";
import React from "react";
import { Carousel, Card } from "./Common/AnnouncementCarousel";
import drupa from "../../../public/assets/Announcement/drupa.png";

function AnnouncementSection() {
  const cards = data.map((card, index) => (
    <Card
      key={index} // Using index as the key
      src={card.src}
      title={card.title}
      category={card.category}
      date={card.date}
    />
  ));

  return (
    <div className="w-full h-full">
      <Carousel items={cards} />
    </div>
  );
}

const data = [
  {
    category: "Join us at printing tech expo.",
    title: "Drupa Germany.",
    date: "May 28 to June 7, 2024",
    src: drupa,
  },
  {
    category: "Join us at printing tech expo.",
    title: "Drupa Germany.",
    date: "May 28 to June 7, 2024",
    src: drupa,
  },
  {
    category: "Join us at printing tech expo.",
    title: "Drupa Germany.",
    date: "May 28 to June 7, 2024",
    src: drupa,
  },
  {
    category: "Join us at printing tech expo.",
    title: "Drupa Germany.",
    date: "May 28 to June 7, 2024",
    src: drupa,
  },
  {
    category: "Join us at printing tech expo.",
    title: "Drupa Germany.",
    date: "May 28 to June 7, 2024",
    src: drupa,
  },
  {
    category: "Join us at printing tech expo.",
    title: "Drupa Germany.",
    date: "May 28 to June 7, 2024",
    src: drupa,
  },
];
export default AnnouncementSection;