import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import FooterMobile from "@/components/FooterMobile";
import NavbarMobile from "@/components/NavbarMobile";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Instagram Clone",
  description: "A clone of Instagram built with Next.js and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className=" sm:grid sm:grid-cols-12 h-[100vh] relative">
          <div className="relative col-span-1 lg:col-span-2  ">
            <div className="hidden sm:block fixed inset-y-0 w-6/6 lg:w-1/6 border-r border-gray-200 ">
              <Sidebar />
            </div>
          </div>
          <div className="block sm:hidden border border-red-500">
            <NavbarMobile />
          </div>
          <div className="col-span-12 sm:col-span-11 md:col-span-10">
            {children}
          </div>
          <div className="block sm:hidden border border-red-500 fixed bottom-0 w-full h-[50px] flex items-center justify-around">
            <FooterMobile />
          </div>
        </div>
      </body>
    </html>
  );
}
