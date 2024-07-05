import { Inter } from "next/font/google";
import "./globals.css";
import ConditionalLayout from "@/components/ConditionalLayout";
import Favicon from "/public/favicon.ico";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Wibu Nation",
  description: "Tempatnya para wibu yang suka nonton anime dan manga",
  icons: [{ rel: "icon", url: Favicon.src }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-color-dark min-h-screen flex-col flex`}
      >
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  );
}
