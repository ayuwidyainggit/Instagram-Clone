import Image from "next/image";
import Link from "next/link";
import React from "react";
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

export default function Sidebar() {
  return (
    <div className=" ">
      <div className="  h-[100px] flex items-center px-6">
        <Link href="/">
          <Image
            width={110}
            height={110}
            src="/instagram_text.png"
            alt="logo"
          />
        </Link>
      </div>
      <div className=" h-[500px] px-4 py-5">
        <div className="flex items-center gap-3  hover:bg-gray-100 cursor-pointer p-2 rounded-md">
          <div className="">
            <MdHomeFilled size={25} />
          </div>
          <div className="">
            <p className=" font-semibold">Beranda</p>
          </div>
        </div>

        <div className="flex items-center gap-3  hover:bg-gray-100 cursor-pointer p-2 rounded-md my-3">
          <div className="">
            <IoSearchOutline size={25} />
          </div>
          <div className=" ">
            <p className=" ">Cari</p>
          </div>
        </div>

        <div className="flex items-center gap-3  hover:bg-gray-100 cursor-pointer p-2 rounded-md my-3">
          <div className="">
            <MdExplore size={25} />
          </div>
          <div className=" ">
            <p className=" ">Jelajahi</p>
          </div>
        </div>

        <div className="flex items-center gap-3  hover:bg-gray-100 cursor-pointer p-2 rounded-md my-3">
          <div className="">
            <PiVideo size={25} />
          </div>
          <div className=" ">
            <p className=" ">Reels</p>
          </div>
        </div>

        <div className="flex items-center gap-3  hover:bg-gray-100 cursor-pointer p-2 rounded-md my-3">
          <div className="">
            <BiMessageRoundedCheck size={25} />
          </div>
          <div className=" ">
            <p className=" ">Pesan</p>
          </div>
        </div>

        <div className="flex items-center gap-3  hover:bg-gray-100  cursor-pointer p-2 rounded-md my-3">
          <div className="">
            <FiHeart size={25} />
          </div>
          <div className=" ">
            <p className=" ">Notifikasi</p>
          </div>
        </div>

        <div className="flex items-center gap-3  hover:bg-gray-100 cursor-pointer p-2 rounded-md my-3">
          <div className="">
            <CgAddR size={25} />
          </div>
          <div className=" ">
            <p className=" ">Buat</p>
          </div>
        </div>

        <div className="flex items-center gap-3  hover:bg-gray-100 cursor-pointer p-2 rounded-md my-3">
          <div className=" border border-black rounded-full">
            <IoPerson size={25} />
          </div>
          <div className=" ">
            <p className=" ">Profil</p>
          </div>
        </div>
      </div>

      <div className=" h-auto bottom-0 fixed  w-1/6 px-4 py-5 ">
        <div className="flex items-center gap-3  hover:bg-gray-100 cursor-pointer p-2 rounded-md my-3">
          <div className="">
            <FaThreads size={25} />
          </div>
          <div className=" ">
            <p className=" ">Threads</p>
          </div>
        </div>

        <div className="flex items-center gap-3  hover:bg-gray-100 cursor-pointer p-2 rounded-md my-3">
          <div className="">
            <CiMenuBurger size={25} />
          </div>
          <div className=" ">
            <p className=" ">Lainnya</p>
          </div>
        </div>
      </div>
    </div>
  );
}
