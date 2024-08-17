import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Instagram Clone",
  description: "A clone of Instagram built with Next.js and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="grid grid-cols-12 h-[100vh] relative">
          <div className=" col-span-2  ">
            <div className="fixed inset-y-0 w-1/6 border-r border-gray-200 ">
              <Sidebar />
            </div>
          </div>
          <div className=" col-span-10">{children}</div>
        </div>
      </body>
    </html>
  );
}
