import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ReactNode } from "react";

export const metadata = {
  title: "AgriConsult - Agricultural Consultancy",
  description: "Innovative solutions for agriculture and farming success.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
