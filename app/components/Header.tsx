import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { IoSettings } from "react-icons/io5";

const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-transparent mt-0 h-full text-white">
    <div className="flex justify-between">
      <div className="flex justify-items-start align-middle space-x-2">
        <div className="text-4xl">
          <IoLocationOutline />
        </div>
        <div className="text-xl">New York</div>
      </div>
      <div className="text-4xl">
        <IoSettings/>
      </div>
      </div>
      {children}
    </div>
  );
};

export default Header;
