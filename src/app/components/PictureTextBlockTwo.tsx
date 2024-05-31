import Link from "next/link";
import { cn } from "@/lib/utils";
const PictureTextBlockTwo = ({
  image,
  altText,
  title,
  paragraph,
  reverseimage,
}: {
  image: string;
  altText: string;
  title: string;
  paragraph: string;
  reverseimage?: boolean;
}) => {
  console.log(reverseimage);
  return (
    <div className="flex lg:flex-row flex-col gap-5 w-full justify-center items-center lg:px-[300px] mt-36 p-4 text-center lg:text-start ">
      <div
        className={cn(
          reverseimage
            ? "lg:order-2 order-2"
            : "lg:order-1 order-2 lg:pr-[145px]"
        )}
      >
        <h3 className="text-4xl text-[#778892] mb-8">{title}</h3>
        <p className="text-lg text-[#323232]">{paragraph}</p>
        <div className="flex text-sm flex-row lg:flex-col xl:mt-20 mt-4 gap-14 underline text-black underline-offset-7 lg:text-2xl font-medium w-full items-center justify-center lg:items-start">
          <Link href="/qoute">Get a Quote</Link>
          <Link href="/booknow">Book Now</Link>
        </div>
      </div>
      <img
        src={image}
        alt={altText}
        className={cn(
          reverseimage ? "lg:order-1 order-1" : "lg:order-2 order-1",
          "lg:min-w-[560px] w-[300px]"
        )}
      />
    </div>
  );
};

export default PictureTextBlockTwo;
