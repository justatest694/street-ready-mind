import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <div className="flex items-center gap-3">
          <img src={logo} alt="LS Street MMA" className="h-10 w-auto rounded" />
          <span className="font-heading text-xl font-bold tracking-wider text-primary">
            LS STREET MMA
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
