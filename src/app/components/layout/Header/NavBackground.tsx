"use client";
import { Menu } from "lucide-react";
import { useState } from "react";
import { X } from "lucide-react";
import Link from "next/link";
const NavBackground = () => {
  const [Showmenu, SetShowmenu] = useState(false);
  return (
    <figure className="w-full">
      <img
        src="/HeroImage.png"
        className="relative  w-full  lg:h-48  object-cover object-top h-12"
      />
      <nav className="absolute top-0 mt-16 w-full hidden lg:block">
        <div className="flex text-white items-center mx-auto w-full justify-center">
          <img src="/Logo.png" className="lg:pr-24" />
          <ul className="flex gap-9">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/main/fleet">Fleet</Link>
            </li>
            <li>
              <Link href="/main/quote">Quote </Link>
            </li>
            <li>
              <Link href="/main/reviews">Reviews </Link>
            </li>
            <li>
              <Link href="/main/services">Services </Link>
            </li>
            <li>
              <Link href="/main/contactus">Contact US </Link>
            </li>
          </ul>
          <div className="flex flex-col lg:pl-20">
            <p className="text-[#E7C13C]">00098765432</p>
            <p>ayanader8@gmail.com</p>
          </div>
        </div>
      </nav>

      <nav className="absolute top-0 right-0 p-3 lg:hidden">
        <Menu onClick={() => SetShowmenu((prev) => !prev)} color="white" />
        {Showmenu ? (
          <div className="bg-[#121111de] fixed inset-0 flex justify-between px-3 py-5 transition-transform z-50">
            <div className="flex flex-col text-white justify-center pl-4">
              <img src="/Logo.png" className="mb-8" />
              <ul className="flex flex-col gap-9">
                <li>
                  <Link href="/">Home</Link>
                </li>

                <li>
                  <Link href="/main/fleet">Fleet</Link>
                </li>

                <li>
                  <Link href="/main/quote">Quote </Link>
                </li>

                <li>
                  <Link href="/main/reviews">Reviews </Link>
                </li>
                <li>
                  <Link href="/main/services">Services </Link>
                </li>
                <li>
                  <Link href="/main/contactus">Contact US </Link>
                </li>
              </ul>
              <div className="flex flex-col mt-8">
                <p className="text-[#E7C13C]">00098765432</p>
                <p>ayanader8@gmail.com</p>
              </div>
            </div>
            <X color="white" onClick={() => SetShowmenu((prev) => !prev)} />
          </div>
        ) : null}
      </nav>
    </figure>
  );
};

export default NavBackground;
