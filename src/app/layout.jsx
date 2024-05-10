import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import AppBgImg from "@/components/layout/AppBgImg";
import Footer from "@/components/layout/Footer";

const ibm = IBM_Plex_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  style: ["normal"],
});

export const metadata = {
  title: "API Rick and Morty",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ibm.className}>
        <AppBgImg />
        {children}
        <Footer />
      </body>
    </html>
  );
}
