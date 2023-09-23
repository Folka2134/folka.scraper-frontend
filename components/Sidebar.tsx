import React from "react";
import Image from "next/image";

const Sidebar = () => {
  return (
    <div className="p-6 overflow-y-auto border-b border-indigo-500/50">
      <div className="flex flex-col items-center justify-center mb-10">
        <Image
          className="hidden md:inline rounded-full"
          src="/Folkascraper-logos.jpeg"
          width={150}
          height={150}
          alt="Logo"
        />
      </div>

      <ul>
        {/* SidebarRow */}
        {/* SidebarRow */}
        {/* SidebarRow */}
        {/* SidebarRow */}
      </ul>
    </div>
  );
};

export default Sidebar;
