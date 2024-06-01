import Link from "next/link";
// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";

const PictureTextBlock = () => {
  // const RefElementOne = useRef(null);
  // const RefElementTwo = useRef(null);
  // const InviewOne = useInView(RefElementOne, { once: true });
  // const InviewTwo = useInView(RefElementTwo, { once: true });
  // console.log(InviewOne, "first view");
  // console.log(InviewTwo, "second view");

  return (
    <>
      <div
        className="lg:flex lg:flex-row w-full items-center justify-center flex flex-col text-center lg:text-start mt-6 lg:mt-0 "
        // initial={{ x: "-100vw" }}
        // transition={{
        //   type: "spring",
        //   stiffness: 120,
        //   layout: { duration: 0.3 },
        // }}
        // animate={InviewOne && { x: 0 }}
        // ref={RefElementOne}
        // layout
      >
        <div className="lg:max-w-[27%]">
          <h3 className="text-[#778892] lg:text-xl  mb-5">
            WE OFFER YOU AN EXCLUSIVE, EXECUTIVE EXPERIENCE
          </h3>
          <h2 className="text-[#323232] lg:text-4xl text-xl font-bold">
            WITH THE MOST SUITABLE RATES AND EXCEPTIONAL SERVICE
          </h2>
        </div>

        <img src="/BlackCar.png" alt="black car" />
      </div>
      <div
        //ref={RefElementTwo}
        className="lg:flex lg:flex-row flex flex-col w-full items-center justify-center gap-10 mt-5 lg:mt-0 p-4 lg:p-0 "
        // initial={{ x: "100vw" }}
        // transition={{
        //   type: "spring",
        //   stiffness: 120,
        //   layout: { duration: 0.3 },
        // }}
        // animate={InviewTwo && { x: 0 }}
        // layout
      >
        <img src="/WhiteCar.png" className="hidden lg:block" alt="white car" />
        <div className="lg:text-xl lg:max-w-[27%] text-center lg:text-start ">
          <h2 className="font-semibold mb-3 ">
            TRUSTED, PREMIUM SERVICE with PREMIUM NEW CARS.
          </h2>
          <p>
            When it comes to choosing an excotic car we provide you with first
            class service. FLORIDA PREMIUM LIMO provides exceptional customer
            service and cost-effective on the finest quality, and elite brand
            fleet. We offer appropriate prices on all Premium cars.
          </p>
          <div className="flex text-sm flex-row lg:flex-col xl:mt-20 mt-4 gap-14 underline text-black underline-offset-7 lg:text-2xl font-medium w-full items-center justify-center lg:items-start">
            <Link href="/qoute">Get a Quote</Link>
            <Link href="/booknow">Book Now</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PictureTextBlock;
