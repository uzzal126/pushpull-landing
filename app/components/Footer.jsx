import logo from "@/public/images/logo/logo.svg";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" bg-black bg-opacity-90">
      <div className="container">
        <div className="py-10 md:flex justify-between items-center">
          <div className="logo text-center">
            <Link href="/">
              <Image src={logo} alt="PushPull" />
            </Link>
          </div>
          <div className="mt-4 md:mt-0 text-center">
            <h2 className="text-white text-2xl md:text-3xl font-medium mb-2">
              We are here to help
            </h2>
            <h3 className="text-white text-xl md:text-2xl font-medium">
              24/7 Call
              <a
                href="tel:09611016303"
                className="text-primary inline-block transition-all hover:scale-105 pl-3"
              >
                09611016303
              </a>
            </h3>
          </div>
        </div>
        <div className="footer-bottom border-t-2 border-t-white border-opacity-20 py-5">
          <div className="md:flex justify-between items-center">
            <div className="copyright">
              <h6 className="text-base md:text-lg text-white text-center">
                @ 2024 Copyright by PushPull
              </h6>
            </div>
            <ul className="flex items-center justify-center">
              <li className="text-base md:text-lg text-white transition-all mr-5 last:mr-0 hover:text-primary">
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              <li className="text-base md:text-lg text-white transition-all mr-5 last:mr-0 hover:text-primary">
                <Link href="/terms-conditions">Terms and Conditions</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
