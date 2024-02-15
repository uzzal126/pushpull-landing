import HeroOne from "@/app/components/HeroOne";
import PlayStoreBanner from "@/app/components/PlayStoreBanner";
import PopularServiceWrapper from "@/app/components/PopularServiceWrapper";
import ServiceCardWrapper from "@/app/components/ServiceCardWrapper";

import celebrityUpdates from "@/public/images/hero/celebrity-updates-banner.svg";
import dailyFunnyJokes from "@/public/images/hero/daily-funny-jokes-banner.svg";
import dailyHoroscope from "@/public/images/hero/daily-horoscope-banner.svg";
import friendshipTips from "@/public/images/hero/friendship-tips-banner.svg";
import loveTips from "@/public/images/hero/love-tips-banner.svg";
import topSports from "@/public/images/hero/top-sports-banner.svg";

const services = [
  {
    id: "101",
    icon: "/images/icons/sports.png",
    title: "Latest Sports Update",
    banner: topSports,
  },
  {
    id: "102",
    icon: "/images/icons/love-tips.png",
    title: "Love Tips",
    banner: loveTips,
  },
  {
    id: "103",
    icon: "/images/icons/daily-jokes.png",
    title: "Daily Funny Jokes",
    banner: dailyFunnyJokes,
  },
  {
    id: "104",
    icon: "/images/icons/friendship.png",
    title: "Friendship Tips",
    banner: friendshipTips,
  },
  {
    id: "105",
    icon: "/images/icons/celebrity.png",
    title: "Celebrity Updates",
    banner: celebrityUpdates,
  },
  {
    id: "106",
    icon: "/images/icons/horoscope.png",
    title: "Daily Horoscope",
    banner: dailyHoroscope,
  },
];

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
