import Image from "next/image";

import mobileAdd from "@/public/images/banner/pushpull-add.png";
import playStoreIcon from "@/public/images/google-play-badge.png";

const PlayStoreBanner = () => {
  return (
    <div className="relative md:mt-20">
      <div className="play-store bg-[url('/images/banner/play-store-banner.png')] h-[280px] md:h-[400px] bg-cover bg-no-repeat flex items-center">
        <div className="container">
          <div className="grid grid-cols-12 items-center gap-7">
            <div className="col-span-6">
              <div className="md:-translate-y-20 w-[150px] md:w-full m-auto">
                <Image src={mobileAdd} alt="play store" />
              </div>
            </div>
            <div className="col-span-6">
              <div className="banner-content absolute top-1/2 -translate-y-1/2">
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
