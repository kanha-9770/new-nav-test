import MainLayout from "@/components/Home/MainLayout";
import { HomeData } from "@/components/Home/types/constant";
import { Metadata } from "next";

// Revalidate every 60 seconds (or any time period you prefer)
export const revalidate = 60;

// Fetch the full home data during runtime
async function fetchHomeData(): Promise<HomeData | null> {
  try {
    const res = await fetch(
      "https://jsondatafromhostingertosheet.nesscoindustries.com/en/hero.json",
      {
        cache: "no-store", // Ensures no caching, always fetch fresh data
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    const res = await fetch(
      "https://jsondatafromhostingertosheet.nesscoindustries.com/en/hero (m).json",
      {
        cache: "no-store", // Ensures no caching for the fallback as well
      }
    );
    const data = await res.json();
    return data;
  }
}

// Dynamically generate metadata using the fetched SEO data
export async function generateMetadata(): Promise<Metadata> {
  const homeData = await fetchHomeData();

  if (!homeData) {
    return {
      title: "Default Title",
      description: "Default Description",
      keywords: "default, keywords",
      openGraph: {
        title: "Default OG Title",
        description: "Default OG Description",
        images: [
          {
            url: "/default-image.webp",
            alt: "Default Image Alt",
          },
        ],
      },
      robots: "index, follow",
      alternates: {
        canonical: "https://www.default.com",
      },
      twitter: {
        card: "summary_large_image",
        site: "@DefaultTwitter",
        title: "Default Twitter Title",
        description: "Default Twitter Description",
      },
    };
  }

  const seoData = homeData.home[0].homeSeoData;

  return {
    title: seoData?.title,
    description: seoData?.description,
    keywords: seoData?.keywords,
    openGraph: {
      title: seoData?.openGraph.title,
      description: seoData?.openGraph.description,
      images: seoData?.openGraph.images.map(
        (image: { url: string; alt: string }) => ({
          url: image.url,
          alt: image.alt,
        })
      ),
    },
    robots: seoData?.robots,
    alternates: {
      canonical: seoData?.alternates.canonical,
    },
  };
}

// Home component rendering the MainLayout with fetched data
export default async function Home() {
  const homeData = await fetchHomeData();
  if (!homeData) {
    return <p>Failed to load data.</p>;
  }
  return (
    <main>
      <MainLayout homeData={homeData} />
    </main>
  );
}
