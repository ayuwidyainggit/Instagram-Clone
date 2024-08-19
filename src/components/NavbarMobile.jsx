"use client";
import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { FiHeart } from "react-icons/fi";

export default function NavbarMobile() {
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const clearInput = () => {
    setInputValue("");
  };

  return (
    <div className="px-4 py-2 flex">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder="Cari"
        className={`w-[87%] ${
          !isFocused && !inputValue ? "pl-10" : "pl-2"
        } pr-4 py-2 bg-gray-100 rounded-md focus:outline-none focus:border-blue-500`}
      />
      {!isFocused && !inputValue && (
        <div className="absolute left-6 top-5">
          <IoSearchOutline />
        </div>
      )}
      {isFocused && (
        <button
          onClick={clearInput}
          className="absolute w-4 h-4 flex items-center justify-center text-sm right-20 top-5 text-white bg-gray-300 rounded-full hover:text-gray-600"
        >
          x
        </button>
      )}

      <div className="flex items-center ml-3">
        <FiHeart size={23} />
      </div>
    </div>
  );
}
