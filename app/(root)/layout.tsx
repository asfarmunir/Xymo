import Image from "next/image";
import Hero from "@/components/shared/Hero";
import Navbar from "@/components/shared/Navbar";
import { Testimonials } from "@/components/shared/Testimonials";
import Footer from "@/components/shared/Footer";

export default function RootLayout({ children }) {
  return (
    <main className="oyo3 flex min-h-screen flex-col bg-primary items-center justify-between pt-16">
      <div className=" w-full flex justify-center  sticky top-10 ">
        <Navbar />
      </div>
      {children}
      <Footer />
    </main>
  );
}
