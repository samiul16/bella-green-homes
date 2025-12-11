import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./_components/ui/SmoothScroll";
import Navbar from "./_components/common/Navbar";
import Footerr from "./_components/common/Footer";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bella Green Homes",
  description: "Bella Green Homes",
  icons: {
    icon: "/logo-remove-bg.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable} font-mono antialiased`}>
        <SmoothScroll />
        <div className="overflow-x-hidden!">
          <Navbar />
          {children}
          <Footerr />
        </div>
      </body>
    </html>
  );
}
