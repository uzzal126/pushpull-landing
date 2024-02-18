import AppDetailsContent from "@/app/components/AppDetailsContent";
import ServiceCard from "@/app/components/ServiceCard";
import services from "@/data/index";

const AppDetails = ({ params }) => {
  const { id } = params;

  const service = services.find((service) => service.id === id);

  return (
    <main className="main">
      <div className="pt-40">
        <div className="container">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-4">
              <div className="thumb">
                <img src={service.icon} alt={service.title} />
              </div>
            </div>
            <div className="col-span-8">
              <AppDetailsContent service={service} />
            </div>
          </div>
        </div>
      </div>

      <div className="py-15">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 lg:gap-7 items-center">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default AppDetails;
