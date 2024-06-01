import Link from "next/link";
const NavBar = () => {
  return (
    <nav className="absolute top-0 mt-6 w-full ">
      <div className="flex text-white items-center mx-auto w-full justify-center">
        <img src="/Logo.png" className="lg:pr-24" />
        <ul className="flex gap-9 ">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/main/fleet">Fleet</Link>
          </li>
          <li>
            <Link href="/main/quote">Quote </Link>
          </li>
          <li>
            <Link href="/main/reviews">Reviews </Link>
          </li>

          <li>
            <Link href="/main/contactus">Contact US </Link>
          </li>
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
