import banner from "@/assets/banner.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-[#1a1a1a] m-0 p-0">
      <div className="w-full flex justify-center bg-[#1a1a1a] relative">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#1a1a1a] to-transparent z-10" />
        <img src={banner} alt="LS Street MMA" className="max-h-20 object-contain" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#1a1a1a] to-transparent z-10" />
      </div>
    </nav>
  );
};

export default Navbar;
