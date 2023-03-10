import React from "react";
import { IconType } from "react-icons";

type SidebarItemProps = {
  Icon: IconType;
  value: string;
};

const SidebarItem: React.FC<SidebarItemProps> = ({ Icon, value }) => {
  return (
    <div className="flex items-center space-x-2 py-3 pl-8 hover:bg-gray-300 rounded-l-xl cursor-pointer">
      <Icon className="h-8 w-8 text-blue-500" />
      <p className="hidden sm:inline-flex font-medium">{value}</p>
    </div>
  );
};
export default SidebarItem;
