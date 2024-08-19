import React from "react";

export default function Home() {
  return (
    <div className=" text-teal-800 grid grid-cols-10">
      <div className="col-span-12 sm:col-span-8 md:col-span-7 border border-red-500">
        content
      </div>
      <div className="hidden sm:block sm:col-span-3 border border-red-500">
        disarankan
      </div>
    </div>
  );
}
