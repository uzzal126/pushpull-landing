"use client";
import Image from "next/image";

import azan from "@/public/images/services/azan-banner.svg";
import ivr from "@/public/images/services/ivr-banner.svg";
import rahamaQuran from "@/public/images/services/rahama-quran-banner.svg";

const services = [
  {
    id: "101",
    title: "Latest Sports Update",
    banner: ivr,
  },
  {
    id: "102",
    title: "Rahama Al-Quran",
    banner: rahamaQuran,
  },
  {
    id: "103",
    title: "Azan",
    banner: azan,
  },
];

const PopularServiceWrapper = () => {
  return (
    <div className="py-10 md:py-15">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-light">
            Our Popular Services
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 items-center">
          {services.map((service) => (
            <div
              className="service-card group overflow-hidden"
              key={service.id}
            >
              <Image
                src={service.banner}
                alt={service.title}
                className="group-hover:scale-110 transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularServiceWrapper;
