import React from "react";
import Image from "next/image";
import { HiOutlineSearch } from "react-icons/hi";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className="bg-white flex items-center p-2 shadow-md top-0 sticky z-50 h-16">
      {/* Left */}
      <div className="flex min-w-fit">
        <Image
          src={
            "https://www.freepnglogos.com/uploads/facebook-logo-icon/facebook-logo-icon-file-facebook-icon-svg-wikimedia-commons-4.png"
          }
          width={40}
          height={40}
          alt="Facebook Symbol, Facebook Logos Within A White Square"
        />
        <div className="flex items-center space-x-2 px-2 ml-2 rounded-full bg-gray-200 text-gray-500">
          <HiOutlineSearch size={30} />
          <input
            className="bg-transparent focus:outline-none rounded hidden lg:inline-flex"
            type="text"
            placeholder="Search Facebook."
          ></input>
        </div>
      </div>

      {/* Center */}
      {/* Right */}
    </div>
  );
};
export default Header;
