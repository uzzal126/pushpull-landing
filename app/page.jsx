import HeroOne from "@/app/components/HeroOne";
import PlayStoreBanner from "@/app/components/PlayStoreBanner";
import PopularServiceWrapper from "@/app/components/PopularServiceWrapper";
import ServiceCardWrapper from "@/app/components/ServiceCardWrapper";

export const metadata = {
  title: "PushPull Entertainment Services",
};

const api_url = `${process.env.NEXT_PUBLIC_APP_STRAPI_URL}/push-pull-entertainment-services?populate=*`;

const getData = async () => {
  const myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    `Bearer ${process.env.NEXT_PUBLIC_APP_STRAPI_TOKEN}`
  );

  try {
    const res = await fetch(api_url, {
      cache: "no-store",
      headers: myHeaders,
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const HomeView = async () => {
  const ServiceData = await getData();

  return (
    <>
      <main>
        <HeroOne services={ServiceData} />
        <ServiceCardWrapper services={ServiceData} />
        <PopularServiceWrapper ServiceData={ServiceData} />
        <PlayStoreBanner />
      </main>
    </>
  );
};

export default HomeView;
