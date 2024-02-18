import Image from "next/image";
import Link from "next/link";

import logo from "@/public//images/logo/logo.svg";

const HeaderOne = () => {
  return (
    <header className="py-4 absolute w-full bg-[#3D0000]">
      <div className="container">
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-6 md:col-span-3">
            <div className="header-logo max-w-40">
              <Link href="/">
                <Image src={logo} alt="PushPull" />
              </Link>
            </div>
          </div>
          <div className="col-span-6 md:col-span-9">
            <div className="relative flex items-center justify-end">
              <div className="">
                <Link
                  href="/"
                  className="inline-block bg-primary rounded-full text-white py-2 px-7 transition-all hover:bg-secondary"
                >
                  Help?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderOne;
