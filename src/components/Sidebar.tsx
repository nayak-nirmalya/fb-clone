import React from "react";
import Image from "next/image";
import SidebarItem from "./SidebarItem";
import { ImUsers } from "react-icons/im";
import {
  MdGroups,
  MdOutlineOndemandVideo,
  MdOutlineExpandMore
} from "react-icons/md";
import { AiOutlineShop } from "react-icons/ai";
import { BsStopwatch } from "react-icons/bs";
import { useSession } from "next-auth/react";

type SidebarProps = {};

const Sidebar: React.FC<SidebarProps> = () => {
  const { data: session } = useSession();

  return (
    <div className="hidden sticky lg:inline-flex flex-col py-2 pl-2 max-w-xl lg:min-w-[320px]">
      <div className="flex items-center space-x-2 py-3 pl-8 hover:bg-gray-300 rounded-l-xl cursor-pointer">
        <Image
          src={session?.user?.image!}
          width={40}
          height={40}
          className="rounded-full cursor-pointer"
          alt="Facebook Symbol, Facebook Logos Within A White Square"
        />
        <p className="hidden sm:inline-flex font-medium">
          {session?.user?.name}
        </p>
      </div>
      <SidebarItem Icon={ImUsers} value="Friends" />
      <SidebarItem Icon={MdGroups} value="Groups" />
      <SidebarItem Icon={AiOutlineShop} value="Marketplace" />
      <SidebarItem Icon={MdOutlineOndemandVideo} value="Watch" />
      <SidebarItem Icon={BsStopwatch} value="Memories" />
      <SidebarItem Icon={MdOutlineExpandMore} value="See More" />
    </div>
  );
};
export default Sidebar;
