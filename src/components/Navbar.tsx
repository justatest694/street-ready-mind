import banner from "@/assets/banner.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border">
      <div className="w-full">
        <img src={banner} alt="LS Street MMA" className="w-full max-h-20 object-contain" />
      </div>
    </nav>
  );
};

export default Navbar;
