"use client";
import Link from "next/link";
import { motion } from "framer-motion";
const Card = ({
  type,
  model,
  passengers,
  suitcases,
  image,
  key,
}: {
  type: string;
  model: string;
  passengers: string;
  suitcases: string;
  image: string;
  key: number;
}) => {
  return (
    // <div className="relative group">
    //   <div className="rounded-lg border-[#E6EBEE] border-2 uppercase overflow-hidden group-hover:bg-yellow-500 transition duration-300 ease-in-out">
    //     <div className="flex flex-col justify-center items-center w-full pt-9 group-hover:opacity-0 transition duration-300 ease-in-out">
    //       <p className="text-[#B4C6D0] text-lg">{type}</p>
    //       <h2 className="text-lg text-[#778892] font-semibold">{model}</h2>
    //       <div className="border-b-[#E7C13C] border-b-2 w-1/2 my-2" />
    //       <img
    //         src="/car_cadillac_escalade-328x194.jpg.png"
    //         className="w-full"
    //         alt={`${model}`}
    //       />
    //       <p className="text-lg">
    //         Passengers:{" "}
    //         <span className="font-medium text-2xl">{passengers}</span>
    //       </p>
    //       <p className="text-lg pb-9">
    //         Suitcases: <span className="font-medium text-2xl">{suitcases}</span>
    //       </p>
    //     </div>
    //     <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
    //       <span className="text-2xl font-bold uppercase text-white">
    //         Reserve Now
    //       </span>
    //     </div>
    //   </div>
    // </div>
    <div
      className="rounded-lg border-[#E6EBEE] border-2 uppercase text-center"
      key={key}
    >
      <div className="flex flex-col justify-center items-center w-full pt-9">
        <p className="text-[#B4C6D0] text-lg">{type}</p>
        <h2 className="text-lg text-[#778892] font-semibold ">{model}</h2>
        <div className="border-b-[#E7C13C] border-b-2 w-1/4 my-2" />
        <img src={image} className="w-fit h-[155px]" />
        <p className="text-lg">
          Passengers:
          <span className="font-medium text-2xl">{passengers}</span>
        </p>
        <p className="text-lg pb-9">
          Suitcases:<span className="font-medium text-2xl">{suitcases}</span>
        </p>
        <motion.button
          whileHover={{ scale: 1.05, y: -5 }}
          transition={{ duration: 0.3 }}
          className="py-8 w-full bg-[#E6EBEE] text-[#778892] font-medium text-sm uppercase hover:bg-[#E7C13C] hover:rounded-md"
        >
          <Link href="/reserve">Reserve Now</Link>
        </motion.button>
      </div>
    </div>
  );
};

export default Card;
