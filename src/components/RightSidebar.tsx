import React from "react";
import { RiVideoAddFill } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";
import { CgMoreAlt } from "react-icons/cg";
import Contacts from "./Contacts";

type RightSidebarProps = {};

const RightSidebar: React.FC<RightSidebarProps> = () => {
  return (
    <div className="hidden md:inline-flex flex-col pt-4 max-w-xl md:min-w-[200px] lg:min-w-[250px]">
      <div className="flex items-center text-gray-600">
        <p className="flex text-lg font-semibold flex-grow">Contacts</p>
        <div className="flex space-x-1 px-2">
          <div className="rounded-full p-2 hover:bg-gray-300 cursor-pointer">
            <RiVideoAddFill size={20} />
          </div>
          <div className="rounded-full p-2 hover:bg-gray-300 cursor-pointer">
            <BiSearch size={20} />
          </div>
          <div className="rounded-full p-2 hover:bg-gray-300 cursor-pointer">
            <CgMoreAlt size={20} />
          </div>
        </div>
      </div>
      <Contacts
        src="https://www.freepnglogos.com/uploads/facebook-logo-icon/facebook-logo-icon-file-facebook-icon-svg-wikimedia-commons-4.png"
        name="Nirmalya Nayak"
        online={true}
      />
      <Contacts
        src="https://www.freepnglogos.com/uploads/facebook-logo-icon/facebook-logo-icon-file-facebook-icon-svg-wikimedia-commons-4.png"
        name="Kaibalya Nayak"
        online={true}
      />
      <Contacts
        src="https://www.freepnglogos.com/uploads/facebook-logo-icon/facebook-logo-icon-file-facebook-icon-svg-wikimedia-commons-4.png"
        name="Laxmipriya Nayak"
        online={false}
      />
      <Contacts
        src="https://www.freepnglogos.com/uploads/facebook-logo-icon/facebook-logo-icon-file-facebook-icon-svg-wikimedia-commons-4.png"
        name="Manoranjan Nayak"
        online={true}
      />
      <Contacts
        src="https://www.freepnglogos.com/uploads/facebook-logo-icon/facebook-logo-icon-file-facebook-icon-svg-wikimedia-commons-4.png"
        name="Pitambar Nayak"
        online={false}
      />
      <Contacts
        src="https://www.freepnglogos.com/uploads/facebook-logo-icon/facebook-logo-icon-file-facebook-icon-svg-wikimedia-commons-4.png"
        name="Bauri Dei"
        online={false}
      />
    </div>
  );
};
export default RightSidebar;
