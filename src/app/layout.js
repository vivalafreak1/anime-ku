import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Anime Next",
  description: "Website Anime Next",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="{inter.className} bg-color-dark">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
