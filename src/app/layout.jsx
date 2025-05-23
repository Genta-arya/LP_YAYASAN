import { Inter, Merriweather } from "next/font/google";
import "./globals.css";

import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";

import ScrollToTopButton from "@/components/ScrollToTop";
import CursorParticles from "./Components/Ribbonss";
import { Toaster } from "sonner";

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
    url: "https://www.aljihadketapang.sch.id/",
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

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Beranda",
                  item: "https://www.aljihadketapang.sch.id",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Sistem Penerimaan Murid Baru",
                  item: "https://www.aljihadketapang.sch.id/sistem-penerimaan-murid-baru",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Informasi",
                  item: "https://www.aljihadketapang.sch.id/informasi",
                },
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${merriweather.variable} relative antialiased flex flex-col min-h-screen`}
        style={{
          fontFamily: "var(--font-inter), sans-serif",
        }}
      >
        <Navbar />
        <div className="hidden md:block lg:block">
          <CursorParticles />
        </div>

        <main className="flex-1 z-10 "> {children}</main>
        <ScrollToTopButton />
        <Footer />
        <Toaster
          richColors
          position="bottom-center"
          duration={3000}
          closeButton
          swipeDirections={["up", "down", "left", "right"]}
        />
      </body>
    </html>
  );
}
