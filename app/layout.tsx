import type { Metadata } from "next";
import { Poppins, Oxanium } from "next/font/google";
import "./globals.css";
// import { Toaster } from "react-hot-toast";
// import NextTopLoader from "nextjs-toploader";

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700", "800"],
//   variable: "--font-poppins",
// });

const oxanium = Oxanium({
  subsets: ["latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-oxanium",
});

export const metadata: Metadata = {
  title: "Xymo",
  description: " xymo.io ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning suppressContentEditableWarning>
      <body className={oxanium.variable}>
        {/* <NextTopLoader
          color="blue"
          initialPosition={0.08}
          crawlSpeed={200}
          height={2}
          crawl={true}
          // showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 5px #2299DD,0 0 5px #2299DD"
        /> */}
        {children}
        {/* <Toaster position="top-center" /> */}
      </body>
    </html>
  );
}
