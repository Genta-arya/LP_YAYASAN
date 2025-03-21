import { Inter, Merriweather } from "next/font/google";
import "./globals.css";
import Container from "./(Landing-Page)/(components)/Container";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import Slider from "@/components/Slider";

// Import font
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata = {
  title: "Yayasan AL-JIHAD | Ketapang Kalimantan Barat",
  description: "Sekolah unggul berbasis akhlak & prestasi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body
        className={`${inter.variable} ${merriweather.variable} antialiased flex flex-col min-h-screen`}
        style={{
          fontFamily: "var(--font-inter), sans-serif",
        }}
      >
        <Navbar />

        <main className="flex-1">{children}</main>
        <link
          href="https://fonts.googleapis.com/css2?family=Alex+Brush&display=swap"
          rel="stylesheet"
        />

        <Footer />
      </body>
    </html>
  );
}
