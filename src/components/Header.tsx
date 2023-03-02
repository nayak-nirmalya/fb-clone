import React from "react";
import Image from "next/image";
import { HiOutlineSearch, HiOutlineHome } from "react-icons/hi";
import { RiFlag2Line } from "react-icons/ri";
import { MdOutlineOndemandVideo, MdOutlineExpandMore } from "react-icons/md";
import { AiOutlineShop, AiFillMessage, AiFillBell } from "react-icons/ai";
import { IoGameControllerOutline } from "react-icons/io5";
import { CgMenuGridO } from "react-icons/cg";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className="bg-white flex items-center p-2 shadow-md top-0 sticky z-50 h-16">
      {/* Left */}
      <div className="flex min-w-fit space-x-6">
        <Image
          src={
            "https://www.freepnglogos.com/uploads/facebook-logo-icon/facebook-logo-icon-file-facebook-icon-svg-wikimedia-commons-4.png"
          }
          width={40}
          height={40}
          alt="Facebook Symbol, Facebook Logos Within A White Square"
        />
        <div className="flex items-center space-x-2 mx-6 px-2 ml-2 rounded-full bg-gray-200 text-gray-500">
          <HiOutlineSearch size={25} />
          <input
            className="bg-transparent focus:outline-none rounded hidden lg:inline-flex"
            type="text"
            placeholder="Search Facebook"
          ></input>
        </div>
      </div>

      {/* Center */}
      <div className="flex flex-grow justify-center mx-2">
        <div className="flex items-center">
          <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-200 cursor-pointer">
            <HiOutlineHome size={25} className="mx-auto" />
          </div>
          <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-200 cursor-pointer">
            <RiFlag2Line size={25} className="mx-auto" />
          </div>
          <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-200 cursor-pointer">
            <MdOutlineOndemandVideo size={25} className="mx-auto" />
          </div>
          <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-200 cursor-pointer">
            <AiOutlineShop size={25} className="mx-auto" />
          </div>
          <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-200 cursor-pointer">
            <IoGameControllerOutline size={25} className="mx-auto" />
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center justify-end min-w-fit space-x-2">
        <Image
          src={
            "https://www.freepnglogos.com/uploads/facebook-logo-icon/facebook-logo-icon-file-facebook-icon-svg-wikimedia-commons-4.png"
          }
          width={40}
          height={40}
          className="rounded-full"
          alt="Facebook Symbol, Facebook Logos Within A White Square"
        />
        <p className="hidden xl:inline-flex font-semibold text-sm whitespace-nowrap p-3 max-w-xs">
          Nirmalya
        </p>
        <CgMenuGridO
          size={20}
          className="hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300"
        />
        <AiFillMessage
          size={20}
          className="hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300"
        />
        <AiFillBell
          size={20}
          className="hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300"
        />
        <MdOutlineExpandMore
          size={20}
          className="hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300"
        />
      </div>
    </div>
  );
};
export default Header;
