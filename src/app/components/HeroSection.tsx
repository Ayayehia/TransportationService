import Link from "next/link";
const HeroSection = () => {
  return (
    <figure className="relative w-full m-0 p-0 ">
      <img
        src="/HeroImage.png"
        alt="hero section car picture"
        className="w-full "
      />

      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <h2 className=" text-center lg:text-start uppercase lg:font-bold sm:text-4xl text-lg lg:text-5xl text-white lg:min-w-[940px] lg:max-h-[184px] xl:text-6xl">
          <span className="block text-[#E7C13C]">Premium</span>
          Transpotation <br className="hidden lg:block" />
          Services
        </h2>
        <div className="flex flex-row lg:flex-col lg:min-w-[940px] xl:mt-20 mt-4 gap-14 underline text-white underline-offset-4 lg:text-2xl font-medium">
          <Link href="/qoute">Get a Quote</Link>
          <Link href="/booknow">Book Now</Link>
        </div>
      </div>
    </figure>
  );
};

export default HeroSection;
