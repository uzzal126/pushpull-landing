const AppDetailsContent = ({ service }) => {
  return (
    <div className="content">
      <h1 className="text-2xl text-[#333] uppercase font-bold mb-5">
        {service?.attributes?.title}
      </h1>
      <span className="text-base text-[#808080] font-medium mb-1 inline-block">
        Description:
      </span>
      <p className="text-sm mb-5">{service?.attributes?.description}</p>
      <span className="text-base text-[#808080] font-medium mb-1 inline-block">
        Instructions
      </span>
      <p className="text-sm">
        Type <span className="uppercase">'{service?.attributes?.keyword}'</span>{" "}
        And Send To 16303
      </p>
      <p className="text-[12px] mb-5 text-[#808080]">
        (Charge: 2.00 BDT + VAT, SD and SC)
      </p>
      <a
        href={`sms:16303?body=${encodeURIComponent(
          service?.attributes?.keyword
        )}`}
        className="inline-block bg-primary rounded-full text-white py-3 px-8 transition-all hover:bg-secondary"
      >
        Subscribe
      </a>
    </div>
  );
};

export default AppDetailsContent;
