import banner from "@/assets/banner.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-black m-0 p-0">
      <div className="w-full flex justify-center bg-black">
        <img src={banner} alt="LS Street MMA" className="max-h-20 object-contain" />
      </div>
    </nav>
  );
};

export default Navbar;
