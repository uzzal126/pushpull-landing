const AppDetailsContent = ({ service }) => {
  return (
    <div className="content">
      <h1 className="text-2xl uppercase font-bold mb-5">{service.title}</h1>
      <span className="text-base text-[#808080] font-medium">Description:</span>
      <p className="text-sm mb-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae qui sit
        saepe reprehenderit molestias soluta quam vero eum itaque fugit magnam
        alias quasi, nesciunt, sed ab quia asperiores?
      </p>
      <span className="text-base text-[#808080] font-medium">Cost</span>
      <p className="text-sm ">Receiving messages from this application: Free</p>
      <p className="text-sm">Sending messages to this application: Free</p>
      <p className="text-sm mb-5 mt-5">
        Subscription: Daily 2.00 BDT + VAT, SD and SC (auto-renew applicable)
      </p>
      <span className="text-base text-[#808080] font-medium">Instructions</span>
      <p className="text-sm mb-10">
        How to Use Type 'START 69699' And Send To 21213 Type 'STOP 69699' And
        Send To 21213
      </p>
      <a
        href={`sms:16230?body=${encodeURIComponent("Hello, MoMagic")}`}
        className="inline-block bg-primary rounded-full text-white py-3 px-8 transition-all hover:bg-secondary"
      >
        Download
      </a>
    </div>
  );
};

export default AppDetailsContent;
