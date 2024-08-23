import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"]});

export const metadata: Metadata = {
  title: "KKHC",
  description: "Members management system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-[#FAFBFF] font-nunito-sans`}>
        <div className="flex">
          <Sidebar />
          <div className="flex-1 justify-between items-center">{children}</div>
        </div>
      </body>
    </html>

  );
}
