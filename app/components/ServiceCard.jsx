import Link from "next/link";

const ServiceCard = ({ service }) => {
  return (
    <div className="card hover:scale-110 transition duration-500">
      <div className="rounded-lg text-center">
        <Link href={service.id}>
          <div className="rounded-xl overflow-hidden">
            <img src={service.icon} alt={service.title} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
