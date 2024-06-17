"use client";
import { motion } from "framer-motion";
import { ReviewComponent } from "../../Reviewcomponent";
const Header = ({
  setterform,
  Reviewform,
}: {
  setterform: (value: boolean) => void;
  Reviewform: Array<any>;
  Setreviewform?: React.Dispatch<React.SetStateAction<Array<any>>>;
}) => {
  return (
    <div className="flex flex-col justify-center items-center w-full gap-5 lg:gap-8">
      <h2 className="text-2xl">Ratings & Reviews</h2>
      <p className="text-[#666666]">Share your thoughts with other customers</p>
      <motion.button
        onClick={() => setterform(true)}
        whileHover={{ scale: 1.02 }}
        className="border-[#666666] border py-2 w- lg:w-1/4 hover:bg-[#E7C13C] text-lg font-semibold px-4"
      >
        Write a review
      </motion.button>
      {Reviewform.length > 0 ? (
        <ReviewComponent Reviewform={Reviewform} />
      ) : null}
    </div>
  );
};

export default Header;
