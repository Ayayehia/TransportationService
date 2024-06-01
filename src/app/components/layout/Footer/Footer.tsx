import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#3A3B42]">
      <div className="py-20 px-auto flex lg:flex-row flex-col justify-center items-center gap-[160px] text-white">
        <div className="flex flex-col lg:gap-5 gap-3">
          <img src="/Logo.png" alt="logo" />
          <p>PREMIUM LIMO, LLC</p>
        </div>
        <ul className="flex lg:flex-row flex-col lg:gap-14 gap-10">
          <div className="fle flex-col gap-4 ">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/fleet">Fleet</Link>
            </li>
            <li>
              <Link href="/quote">Quote</Link>
            </li>
          </div>
          <div className="fle flex-col E7C13C">
            <li>
              <Link href="/reviews">Reviews</Link>
            </li>
            <li>
              <Link href="/contactus">Contact Us</Link>
            </li>
          </div>
          <div className="fle flex-col E7C13C">
            <li>Copyright ©</li>
            <li>Terms of service</li>
            <li>Privacy policy</li>
          </div>
        </ul>
        <div>
          <p className="text-[#E7C13C]">786-913-0999</p>
          <p>ayanader8@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
