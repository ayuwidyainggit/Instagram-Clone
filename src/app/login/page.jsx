// app/login/page.jsx
"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function LoginPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/home");
    }
  }, [status, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      redirect: false,
      username,
      password,
    });

    if (result.ok) {
      router.push("/home");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="">
      <div className="flex items-center justify-center  ">
        <div className=" w-[50%] flex justify-end items-center pr-8">
          <Image width={410} height={410} src="/login.png" alt="logo" />
        </div>
        <div className=" w-[50%]">
          <div className="border border-gray-300 w-[350px] h-[350px] flex flex-col items-center justify-center  ">
            <Image
              width={200}
              height={200}
              src="/instagram_text.png"
              alt="logo"
            />

            <Image
              width={80}
              height={80}
              src="/user.png"
              alt="logo"
              className="border-2 border-[#E5E5E5] rounded-full"
            />

            <button
              onClick={handleSubmit}
              className="bg-primary text-white text-md px-4 py-1 rounded-md mt-8"
            >
              Lanjut menggunakan akun google
            </button>
          </div>
          <div className="border border-gray-300 w-[350px] h-[100px] mt-4 flex flex-col items-center justify-center ">
            <p className="text-sm text-gray-400">Bukan ayuwidyainggit ?</p>
            <p className="text-sm text-gray-400">
              <span className="text-sm text-primary font-semibold">
                Ganti Akun
              </span>{" "}
              atau{" "}
              <span className="text-sm text-primary font-semibold">Daftar</span>
            </p>
          </div>
          <div className=" w-[350px] h-[100px]  flex flex-col items-center justify-center ">
            <p>Dapatkan aplikasi </p>
            <div className="flex w-full justify-center">
              <Image
                width={130}
                height={130}
                src="/googleplay.png"
                alt="logo"
              />
              <Image
                width={130}
                height={130}
                src="/googleplay.png"
                alt="logo"
              />
            </div>
          </div>
          {/* <form
          onSubmit={handleSubmit}
          className="p-6 bg-white rounded shadow-md"
        >
          <h2 className="mb-4 text-xl">Login</h2>
          <div className="mb-4">
            <label className="block mb-1">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <button
            type="submit"
            className="w-full px-3 py-2 text-white bg-blue-500 rounded"
          >
            Login
          </button>
        </form> */}
        </div>
      </div>
      <div className="flex  justify-center gap-3">
        <p className="text-xs font-semibold text-gray-400">Meta</p>
        <p className="text-xs font-semibold text-gray-400">Tentang</p>
        <p className="text-xs font-semibold text-gray-400"> Blog</p>
        <p className="text-xs font-semibold text-gray-400">Pekerjaan</p>
        <p className="text-xs font-semibold text-gray-400">Bantuan</p>
        <p className="text-xs font-semibold text-gray-400">API</p>
        <p className="text-xs font-semibold text-gray-400">Privasi</p>
        <p className="text-xs font-semibold text-gray-400">Ketentuan</p>
        <p className="text-xs font-semibold text-gray-400">Lokasi</p>
        <p className="text-xs font-semibold text-gray-400">Instagram Lite</p>
        <p className="text-xs font-semibold text-gray-400">Threads</p>
        <p className="text-xs font-semibold text-gray-400">
          Pengunggahan Kontak & Nonpengguna
        </p>
        <p className="text-xs font-semibold text-gray-400">Verifikasi Meta</p>
        <p className="text-xs font-semibold text-gray-400">Meta di Indonesia</p>
      </div>
      <div className=" flex  justify-center gap-3 mt-4">
        <p className="text-xs font-semibold text-gray-400">Bahasa Indonesia</p>
        <p className="text-xs font-semibold text-gray-400">
          © 2024 Instagram from Meta
        </p>
      </div>
    </div>
  );
}
