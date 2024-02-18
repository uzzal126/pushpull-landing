import HeroOne from "@/app/components/HeroOne";
import PlayStoreBanner from "@/app/components/PlayStoreBanner";
import PopularServiceWrapper from "@/app/components/PopularServiceWrapper";
import ServiceCardWrapper from "@/app/components/ServiceCardWrapper";

import services from "@/data/index";

const HomeView = () => {
  return (
    <>
      <main>
        <HeroOne services={services} />
        <ServiceCardWrapper services={services} />
        <PopularServiceWrapper />
        <PlayStoreBanner />
      </main>
    </>
  );
};

export default HomeView;
