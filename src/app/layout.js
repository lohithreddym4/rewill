import { Poppins, Roboto } from "next/font/google";
import Navbar from "@/components/Navbar";
import '../styles/globals.css';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Load Google Fonts with Next.js optimization
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins", // Optional: CSS variable for custom use
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${roboto.variable}`}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
