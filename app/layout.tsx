import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import ContainerFooter from "@/components/Footer/containerFooter";
import ContainerHeader from "@/components/Header/ContainerHeader";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../styles/index.scss";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Q&C Revestimientos",
  description: "Soluciones en revestimientos y pisos industriales",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={montserrat.variable}>
      <body>
        <ContainerHeader />
        {children}
        <ContainerFooter />
      </body>
    </html>
  );
}
