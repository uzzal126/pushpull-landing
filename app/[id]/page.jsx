import AppDetailsContent from "@/app/components/AppDetailsContent";
import RelatedApps from "@/app/components/RelatedApps";

import services from "@/data/index";

const AppDetails = ({ params }) => {
  const { id } = params;

  const service = services.find((service) => service.id === id);

  return (
    <main className="main">
      <div className="pt-36 md:pt-40 pb-15">
        <div className="container">
          <div className="grid grid-cols-12 gap-7">
            <div className="col-span-12 md:col-span-4">
              <div className="thumb">
                <img src={service.icon} alt={service.title} />
              </div>
            </div>
            <div className="col-span-12 md:col-span-8">
              <AppDetailsContent service={service} />
            </div>
          </div>
        </div>
      </div>

      <RelatedApps services={services} id={id} />
    </main>
  );
};

export default AppDetails;
