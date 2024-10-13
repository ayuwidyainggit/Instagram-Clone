"use client";

import { useSession } from "next-auth/react";
import Sidebar from "@/components/Sidebar";
import NavbarMobile from "@/components/NavbarMobile";
import FooterMobile from "@/components/FooterMobile";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AuthenticatedLayout({ children }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return; // Do nothing while loading
    if (!session) router.push("/login"); // Redirect to login if not authenticated
  }, [session, status, router]);

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="sm:grid sm:grid-cols-12 h-[100vh] relative">
      {/* Sidebar */}
      {session && (
        <div className="relative col-span-1 lg:col-span-2">
          <div className="hidden sm:block fixed inset-y-0 w-full lg:w-1/6 border-r border-gray-200">
            <Sidebar />
          </div>
        </div>
      )}

      {/* NavbarMobile */}
      {session && (
        <div className="block sm:hidden ">
          <NavbarMobile />
        </div>
      )}

      {/* Main Content */}
      <div
        className={`col-span-12 sm:col-span-11 md:col-span-12 ${
          session ? "" : "w-full"
        }`}
      >
        {children}
      </div>

      {/* FooterMobile */}
      {session && (
        <div className="block sm:hidden  fixed bottom-0 w-full h-[50px] flex items-center justify-around">
          <FooterMobile />
        </div>
      )}
    </div>
  );
}
