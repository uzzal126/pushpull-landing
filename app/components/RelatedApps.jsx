import ServiceCard from "@/app/components/ServiceCard";

const RelatedApps = ({ services, id }) => {
  const data = services.filter((item) => item.id !== id);

  return (
    <div className="pt-10 pb-15 md:pt-15 bg-[#f8f8f8]">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-light">
            Related Services
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 lg:gap-7 items-center">
          {data.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedApps;
