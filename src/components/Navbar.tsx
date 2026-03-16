import banner from "@/assets/banner.jpg";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="w-full">
        <img src={banner} alt="LS Street MMA" className="w-full h-16 object-cover" />
      </div>
    </nav>
  );
};

export default Navbar;
