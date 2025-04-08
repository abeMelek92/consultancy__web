import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ReactNode } from "react";

export const metadata = {
  title: "Debths Global - General Consultancy",
  description: "Innovative solutions for businesses' success.",
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
