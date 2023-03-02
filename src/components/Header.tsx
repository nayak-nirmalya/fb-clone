import React from "react";
import Image from "next/image";

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
      </div>

      {/* Center */}
      {/* Right */}
    </div>
  );
};
export default Header;
