import { useState } from "react";
import { Menu, X } from "lucide-react";
import banner from "@/assets/banner.jpg";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-center py-2 px-4">
        <img src={banner} alt="LS Street MMA" className="h-12 w-auto" />
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
