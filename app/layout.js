import { Inter } from "next/font/google";
import Footer from "./components/Footer";
import HeaderOne from "./components/HeaderOne";

import "swiper/css";
import "swiper/css/pagination";

import "./globals.css";

const inter = Inter({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const openGraphImage = {
  images: ["https://cms.webmanza.com/uploads/love_tips_banner_7b63d1e6e4.png"],
};

export const metadata = {
  title: "PushPull Entertainment Services",
  description:
    "PushPull Entertainment Service is an innovative platform that revolutionizes the way people consume entertainment.",
  openGraph: {
    title: "PushPull Entertainment Service",
    description:
      "PushPull Entertainment Service is an innovative platform that revolutionizes the way people consume entertainment.",
    ...openGraphImage,
  },
  manifest: "/manifest.json",
  icons: { apple: "/icon-192x192.png" },
};

const fontFamily = `${inter.variable}`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={fontFamily}>
      <body>
        <HeaderOne />
        {children}
        <Footer />
      </body>
    </html>
  );
}
