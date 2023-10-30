"use client";

import Image from "next/image";
import logo from "@/public/logo.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MainNavLink, PoliciesNavlink, SubNavLink } from "./navlinks";
import { ChevronRightIcon, LucideChevronRightSquare } from "lucide-react";
import { useState } from "react";
import Dialogue from "./dialogue";

/* 72px - Narrow 768px-1263px  */
/* 244px - Medium 1264px-1919 */
/* 355px - Wide 1920 */

const Sidebar = () => {
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);
  const pathname = usePathname();

  const handleToggleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  return (
    <aside
      className={`px-4 py-7 border-r min-[768px]:max-[1263px]:w-[4.5rem] min-[1264px]:max-[1919px]:w-[14rem] min-[1920px]:w-[22.2rem] border-[#EBEBEB] md:block h-screen scroll fixed overflow-auto`}
    >
      <Link href="/" className="relative w-full">
        <div className="flex gap-2 mb-10 border-b border-[#EBEBEB] pb-[2.2rem]">
          <Image src={logo} priority alt="logo" />
        </div>
        <div className="absolute w-full h-[1px] bottom-0 left-0">
          <div className="bg-gradient-to-r from-white to-current via-current h-full w-1/2 left-0 absolute"></div>
          <div className="bg-gradient-to-r from-current to-white via-current h-full w-1/2 right-0 absolute"></div>
        </div>
      </Link>

      {MainNavLink.map((link) => (
        <Link
          href={link.path}
          key={link.title}
          className={`flex items-center gap-2.5 hover:bg-[#F7F7F7] rounded-xl py-2.5 px-5 cursor-pointer mb-5 ${
            pathname === link.path ? "bg-[#F7F7F7]" : "bg-transparent"
          }`}
        >
          {link.icon}
          <p
            className={`text-sm ${
              pathname === link.path ? "font-bold" : "font-medium"
            }`}
          >
            {link.title}
          </p>
        </Link>
      ))}

      <div className="text-[0.875rem] font-medium text-[#565656] mb-5 mt-16">
        <p
          className={`text-[0.85rem] mb-5 text-[#060606] ${
            pathname.includes("admin") ? "font-bold" : "font-normal"
          }`}
        >
          ADMIN
        </p>

        {SubNavLink.map((link) => (
          <Link
            href={link.path}
            key={link.title}
            className={`flex items-center gap-4 mb-5 py-2.5 px-5 hover:bg-[#F7F7F7] rounded-xl cursor-pointer ${
              pathname === link.path ? "bg-[#F7F7F7]" : "bg-transparent"
            }`}
          >
            {link.icon}
            <p
              className={`text-sm text-[#060606] ${
                pathname === link.path ? "font-bold" : "font-medium"
              }`}
            >
              {link.title}
            </p>
          </Link>
        ))}
      </div>

      <div className="text-[0.875rem] font-medium text-[#565656] mb-5 mt-16">
        <button
          onClick={() => handleToggleDropdown()}
          className="flex items-center gap-2 mb-5"
        >
          <p
            className={`text-[0.85rem] text-[#060606] ${
              openDropdown && "font-bold"
            }`}
          >
            POLICIES & SECURITY
          </p>
          <div className={`${openDropdown && "transition-all rotate-90"}`}>
            <ChevronRightIcon />
          </div>
        </button>

        <Dialogue
          open={openDropdown}
          data={PoliciesNavlink}
          pathname={pathname}
          ulClassName="list-disc list-outside py-2 mx-8"
          pClassName="text-xs"
        />
        {/* <div
          className={`overflow-auto scroll transition-all ${
            openDropdown
              ? "translate-y-0 h-40 border-[#EBEBEB] bg-[#F7F7F7]"
              : "-translate-y-10 h-0 border-transparent"
          } border shadow-[0px_0px_32px_0px_rgba(204,204,204,0.25)] rounded-2xl`}
        >
          <ul className="list-disc list-outside py-2 mx-8">
            {PoliciesNavlink.map((link) => (
              <li key={link.title}>
                <Link
                  href={link.path}
                  target="_blank"
                  className={`flex items-center gap-4 mb-2 hover:bg-[#F7F7F7] rounded-xl cursor-pointer ${
                    pathname === link.path ? "bg-[#F7F7F7]" : "bg-transparent"
                  }`}
                >
                  <p className={`text-xs text-[#060606] hover:font-bold`}>
                    {link.title}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div> */}
      </div>
    </aside>
  );
};

export default Sidebar;
