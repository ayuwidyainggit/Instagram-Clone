"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { MdHomeFilled } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { MdExplore } from "react-icons/md";
import { PiVideo } from "react-icons/pi";
import { BiMessageRoundedCheck } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import { CgAddR } from "react-icons/cg";
import { IoPerson } from "react-icons/io5";
import { FaThreads } from "react-icons/fa6";
import { CiMenuBurger } from "react-icons/ci";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Sidebar() {
  const { data: session } = useSession();
  console.log(session);

  const [open, setOpen] = useState(false);
  const popupRef = useRef(null);

  const handleOpen = () => {
    setOpen(!open); // Toggle the click state
  };

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div className="relative border border-red-500 h-screen">
      <div className=" hidden lg:block h-[100px] flex items-center px-6">
        <Link href="/">
          <Image
            width={110}
            height={110}
            src="/instagram_text.png"
            alt="logo"
          />
        </Link>
      </div>

      <div className="block lg:hidden  h-[100px] flex items-center px-6">
        <Link href="/">
          <Image width={25} height={25} src="/instagram.webp" alt="logo" />
        </Link>
      </div>
      <div className=" h-[500px] px-4 py-5">
        <div className="flex items-center gap-3  hover:bg-gray-100 cursor-pointer p-2 rounded-md">
          <div className="">
            <MdHomeFilled size={25} />
          </div>
          <div className="hidden lg:block">
            <p className=" font-semibold">Beranda</p>
          </div>
        </div>

        <div className="flex items-center gap-3  hover:bg-gray-100 cursor-pointer p-2 rounded-md my-3">
          <div className="">
            <IoSearchOutline size={25} />
          </div>
          <div className="hidden lg:block">
            <p className=" ">Cari</p>
          </div>
        </div>

        <div className="flex items-center gap-3  hover:bg-gray-100 cursor-pointer p-2 rounded-md my-3">
          <div className="">
            <MdExplore size={25} />
          </div>
          <div className="hidden lg:block">
            <p className=" ">Jelajahi</p>
          </div>
        </div>

        <div className="flex items-center gap-3  hover:bg-gray-100 cursor-pointer p-2 rounded-md my-3">
          <div className="">
            <PiVideo size={25} />
          </div>
          <div className="hidden lg:block">
            <p className=" ">Reels</p>
          </div>
        </div>

        <div className="flex items-center gap-3  hover:bg-gray-100 cursor-pointer p-2 rounded-md my-3">
          <div className="">
            <BiMessageRoundedCheck size={25} />
          </div>
          <div className="hidden lg:block">
            <p className=" ">Pesan</p>
          </div>
        </div>

        <div className="flex items-center gap-3  hover:bg-gray-100  cursor-pointer p-2 rounded-md my-3">
          <div className="">
            <FiHeart size={25} />
          </div>
          <div className="hidden lg:block">
            <p className=" ">Notifikasi</p>
          </div>
        </div>

        <div className="flex items-center gap-3  hover:bg-gray-100 cursor-pointer p-2 rounded-md my-3">
          <div className="">
            <CgAddR size={25} />
          </div>
          <div className="hidden lg:block">
            <p className=" ">Buat</p>
          </div>
        </div>

        <div className="flex items-center gap-3  hover:bg-gray-100 cursor-pointer p-2 rounded-md my-3">
          <div className=" border border-black rounded-full">
            <IoPerson size={25} />
          </div>
          <div className="hidden lg:block">
            <p className=" ">Profil</p>
          </div>
        </div>

        <div className="flex items-center gap-3  hover:bg-gray-100 cursor-pointer p-2 rounded-md my-3">
          <div className=" border border-black rounded-full">
            <IoPerson size={25} />
          </div>
          <div className="hidden lg:block">
            <button onClick={() => signIn()} className=" ">
              Login
            </button>
          </div>
        </div>
      </div>

      <div className=" h-auto bottom-0 fixed  w-1/6 px-4 py-5 n">
        <div className="flex items-center gap-3  hover:bg-gray-100 cursor-pointer p-2 rounded-md my-3">
          <div className="">
            <FaThreads size={25} />
          </div>
          <div className="hidden lg:block">
            <p className=" ">Threads</p>
          </div>
        </div>

        <div className="flex items-center gap-3  hover:bg-gray-100 cursor-pointer p-2 rounded-md my-3">
          <div className="hidden lg:block">
            <CiMenuBurger size={25} />
          </div>
          <div className="hidden lg:block">
            <p onClick={handleOpen} className=" ">
              Lainnya
            </p>
          </div>
        </div>
      </div>
      {open && (
        <div
          ref={popupRef}
          className="w-[200px] h-[300px] z-50 bg-white border border-gray-100 absolute bottom-3 left-3 rounded-lg shadow-2xl"
        >
          <div className="px-4 py-3 m-2 rounded-md hover:bg-gray-100 cursor-pointer ">
            <button onClick={() => signOut()}>Logout</button>
          </div>
        </div>
      )}
    </div>
  );
}
