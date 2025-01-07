import Navbar from "@/components/Navbar";
import '../styles/globals.css';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&family=Roboto:wght@400;500;700&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
