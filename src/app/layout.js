import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://eco-sapling.vercel.app";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Eco Sapling",
    template: "%s | Eco Sapling",
  },
  description:
    "Eco Sapling is a curated plant shop for greener spaces, mindful care, and plant styling inspiration.",
  openGraph: {
    title: "Eco Sapling",
    description:
      "Shop curated plants, explore care rituals, and bring calmer green energy home.",
    url: "/",
    siteName: "Eco Sapling",
    images: [
      {
        url: "https://i.ibb.co.com/VYCssHyy/banner-Img.jpg",
        width: 1200,
        height: 630,
        alt: "Eco Sapling hero plants",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eco Sapling",
    description:
      "Shop curated plants, explore care rituals, and bring calmer green energy home.",
    images: ["https://i.ibb.co.com/VYCssHyy/banner-Img.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-green-50 min-h-screen flex flex-col`}
      >
        <Navbar />
        <div className="flex-1">{children}</div>
        <ToastContainer
          position="top-center"
          hideProgressBar={true}
          autoClose={2000}
        />
        <Footer />
      </body>
    </html>
  );
}
