import banner from "@/assets/banner.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a] border-b border-border">
      <div className="w-full">
        <img src={banner} alt="LS Street MMA" className="w-full max-h-20 object-cover" />
      </div>
    </nav>
  );
};

export default Navbar;
