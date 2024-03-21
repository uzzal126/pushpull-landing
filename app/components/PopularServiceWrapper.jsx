import Image from "next/image";

import azan from "@/public/images/services/azan-banner.jpg";
import ivr from "@/public/images/services/ivr-banner.jpg";
import rahamaQuran from "@/public/images/services/rahama-quran-banner.jpg";

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
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#333]">
            Our Popular Services
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 items-center">
          {services.map((service) => (
            <div
              className="group overflow-hidden rounded-[30px]"
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
