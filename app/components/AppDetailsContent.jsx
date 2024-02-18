"use client";

import services from "@/data";
import { useEffect, useState } from "react";

const AppDetailsContent = ({ service }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const [mobileNumber, setMobileNumber] = useState("");

  const [relatedApps, setRelatedApps] = useState([]);
  useEffect(() => {
    const data = services.filter((item) => item.id !== item.id);
  }, []);

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
      {/* <button
        type="button"
        className="ml-4 mt-3 bg-primary rounded-full text-white py-3 px-8 transition-all hover:bg-secondary"
        onClick={() => setIsOpenModal((prev) => !prev)}
      >
        Toggle button
      </button> */}
      {isOpenModal ? (
        <div className="form bg-pink-100 rounded p-5 mt-5">
          <form onSubmit={handleSubmit}>
            <input
              type="number"
              placeholder="Type your mobile number"
              className="w-48 block px-4 py-2"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            />
            <button
              type="submit"
              className="mt-3 bg-primary rounded-full text-white py-1 px-5 transition-all hover:bg-secondary"
            >
              Submit
            </button>
          </form>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default AppDetailsContent;
