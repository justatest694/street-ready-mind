import type { CSSProperties } from "react";
import banner from "@/assets/banner.png";

const featherMask: CSSProperties = {
  WebkitMaskImage: "linear-gradient(90deg, transparent 0%, black 14%, black 86%, transparent 100%)",
  maskImage: "linear-gradient(90deg, transparent 0%, black 14%, black 86%, transparent 100%)",
  WebkitMaskRepeat: "no-repeat",
  maskRepeat: "no-repeat",
  WebkitMaskSize: "100% 100%",
  maskSize: "100% 100%",
};

const Navbar = () => {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 w-full m-0 p-0"
      style={{ backgroundColor: "hsl(0 0% 0%)" }}
    >
      <div className="w-full flex justify-center m-0 p-0" style={{ backgroundColor: "hsl(0 0% 0%)" }}>
        <img
          src={banner}
          alt="LS Street MMA"
          className="block h-auto w-auto max-h-20 max-w-full object-contain"
          style={featherMask}
        />
      </div>
    </nav>
  );
};

export default Navbar;
