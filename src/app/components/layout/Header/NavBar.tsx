const NavBar = () => {
  return (
    <nav className="absolute top-0 mt-6 w-full ">
      <div className="flex text-white items-center mx-auto w-full justify-center">
        <img src="/Logo.png" className="lg:pr-24" />
        <ul className="flex gap-9">
          <li>Home</li>
          <li>Fleet</li>
          <li>Quote</li>
          <li>Reviews</li>
          <li>Contact US</li>
        </ul>
        <div className="flex flex-col lg:pl-20">
          <p className="text-[#E7C13C]">00098765432</p>
          <p>ayanader8@gmail.com</p>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
