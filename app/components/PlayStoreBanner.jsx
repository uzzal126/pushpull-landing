import Image from "next/image";

import playStoreIcon from "@/public/images/google-play-badge.png";

const PlayStoreBanner = () => {
  return (
    <div className="relative">
      <div className="play-store bg-[url('/images/banner/play-store-banner.png')] h-[280px] md:h-[400px] lg:h-[650px] bg-cover bg-no-repeat">
        <div className="container">
          <div className="grid grid-cols-12 items-center">
            <div className="lg:col-span-6 lg:col-start-7">
              <div className="banner-content absolute top-1/2 -translate-y-1/2 pt-12 lg:pt-40">
                <h3 className="uppercase text-2xl md:text-4xl font-bold text-primary mb-4">
                  Pushpull mobile app
                </h3>
                <div className="max-w-[150px] lg:max-w-[200px]">
                  <a
                    href="https://play.google.com/store/search?q=mkiddo&c=apps&hl=en&gl=US"
                    target="_blank"
                  >
                    <Image src={playStoreIcon} alt="play store" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayStoreBanner;
