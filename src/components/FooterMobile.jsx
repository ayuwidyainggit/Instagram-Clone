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
export default function FooterMobile() {
  return (
    <div className="flex justify-around items-center h-auto  w-full">
      <MdHomeFilled size={28} />
      <MdExplore size={28} />
      <PiVideo size={28} />
      <CgAddR size={28} />
      <BiMessageRoundedCheck size={28} />
      <IoPerson size={28} />
    </div>
  );
}
