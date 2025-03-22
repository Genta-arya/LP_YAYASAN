import { Inter, Merriweather } from "next/font/google";
import "./globals.css";
import Container from "./(Landing-Page)/(components)/Container";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import Slider from "@/components/Slider";
import ScrollToTopButton from "@/components/ScrollToTop";


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
  icons: {
    icon: "/LOGO-SMP.ico", // Letakkan favicon.ico di /public
  },
  openGraph: {
    title: "Yayasan Islamiyyah Al Jihad Ketapang",
    description: "Sekolah unggul berbasis akhlak & prestasi",
    url: "al-jihad.center.mgentaarya.my.id/",
    siteName: "Yayasan Islamiyyah Al Jihad Ketapang",
    images: [
      {
        url: "/LOGO-SMP.jpg", // Pastikan file og-image.jpg ada di /public
        width: 1200,
        height: 630,
        alt: "Yayasan Islamiyyah Al Jihad Ketapang",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yayasan Islamiyyah Al Jihad Ketapang",
    description: "Sekolah unggul berbasis akhlak & prestasi",
    images: ["/LOGO-SMP.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        {/* Link tambahan jika perlu custom font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Alex+Brush&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.variable} ${merriweather.variable} antialiased flex flex-col min-h-screen`}
        style={{
          fontFamily: "var(--font-inter), sans-serif",
        }}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
       
        <ScrollToTopButton />
        <Footer />
      </body>
    </html>
  );
}