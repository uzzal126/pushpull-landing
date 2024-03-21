import Link from "next/link";

const ServiceCard = ({ service }) => {
  return (
    <div className="card hover:scale-110 transition duration-500">
      <div className="rounded-lg text-center">
        <Link href={`/services/${service?.attributes?.slug}`}>
          <div className="rounded-xl overflow-hidden">
            <img
              src={`https://cms.webmanza.com${service?.attributes?.icon?.data?.attributes?.url}`}
              alt={service?.attributes?.title}
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
