"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
const Card = ({
  title,
  image,
  step,
}: {
  title: string;
  image: string;
  step: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  console.log(isHovered, "ishovered");
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      //   onHoverStart={(prev) => setIsHovered(!prev)}
      //   onHoverEnd={(prev) => setIsHovered(!prev)}
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-fit text-white cursor-pointer"
    >
      <figure className="relative w-fit text-white">
        <div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black"
          style={{ zIndex: 1 }}
        />
        <img src={image} className="relative" alt="service type image" />
        <div className="absolute top-0 md:pt-14 flex w-full  justify-between px-5 pt-5 md:px-20 text-sm md:text-lg">
          <h3>FLORIDA PREMIUM LIMO</h3>
          <p>
            <motion.span
              animate={isHovered ? { scale: 2 } : { scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              {step}
            </motion.span>
            /9
          </p>
        </div>
        <div className="absolute bottom-0 md:pb-14  flex w-full justify-between px-5 pb-5 md:px-20 z-10 text-sm md:text-lg">
          <h3>{title}</h3>
          <p className="underline underline-offset-4">
            <Link href="/services/more">More</Link>
          </p>
        </div>
      </figure>
    </motion.div>
  );
};

export default Card;
