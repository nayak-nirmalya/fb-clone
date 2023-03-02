import React from "react";
import Image from "next/image";

type ContactsProps = {
  name: string;
  src: string;
  online: boolean;
};

const Contacts: React.FC<ContactsProps> = ({ name, src, online }) => {
  return (
    <div className="flex relative cursor-pointer items-center space-x-2 py-2 pl-1 hover:bg-gray-300 rounded-l-xl">
      <Image
        src={src}
        width={40}
        height={40}
        alt="Facebook Symbol, Facebook Logos Within A White Square"
        className="rounded-full"
      />
      <p className="hidden sm:inline-flex text-sm">{name}</p>
      {online && (
        <div className="bg-green-500 h-4 w-4 rounded-full left-5 bottom-2 border-2 absolute"></div>
      )}
      {!online && (
        <div className="bg-gray-600 h-4 w-4 rounded-full left-5 bottom-2 border-2 absolute"></div>
      )}
    </div>
  );
};
export default Contacts;
