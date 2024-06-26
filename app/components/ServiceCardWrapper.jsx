import ServiceCard from "@/app/components/ServiceCard";

const ServiceCardWrapper = ({ services }) => {
  return (
    <div className="pt-10 md:pt-28">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#333]">
            Entertainment Services
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 lg:gap-7 items-center">
          {services?.data?.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceCardWrapper;
