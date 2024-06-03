"use client";
import { cn } from "@/lib/utils";
import { StarIcon } from "@heroicons/react/20/solid";
// import { Plus } from "lucide-react";
import "@uploadcare/react-uploader/core.css";
import { FileUploaderRegular } from "@uploadcare/react-uploader";
import { useState } from "react";
const Form = ({ setterform }: { setterform: (value: boolean) => void }) => {
  const [imageid, Setimageid] = useState([]);

  const handleChangeEvent = (items) => {
    Setimageid([
      ...items.allEntries.filter((file) => file.status === "success"),
    ]);
  };
  return (
    <div className="flex flex-col gap-4 pt-5 lg:pt-10">
      <div className="flex justify-between w-full">
        <button onClick={() => setterform(false)}>Cancel</button>
        <button className="border-[#666666] bg-white p-2 px-4">Post</button>
      </div>
      <div className="flex flex-col gap-2">
        <p>Score:</p>
        <div className="flex space-x-2">
          {[0, 1, 2, 3, 4].map((rating) => (
            <StarIcon
              key={rating}
              className={cn(
                rating ? "text-yellow-400" : "text-gray-300",
                "h-5 w-5 flex-shrink-0"
              )}
              aria-hidden="true"
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <input
          type="text"
          className="p-4 border-[#666666] border rounded-md"
          placeholder="Title"
        />
        <input
          type="text"
          className="p-4 border-[#666666] border rounded-md"
          placeholder="Review"
        />
        {/* <div>Upload Image:</div>
        <div className="p-4 bg-[#E5E4E2] flex w-full h-full justify-center items-center border-[#666666] border px-8">
          <Plus />
        </div> */}
        <FileUploaderRegular
          pubkey="cd61ea7861feaacd09cc"
          maxLocalFileSizeBytes={10000000}
          multipleMax={4}
          imgOnly={true}
          sourceList="local, url, camera, dropbox"
          onChange={handleChangeEvent}
        />
        {/* rendering image */}
        <div className="flex justify-start w-full gap-3">
          {imageid.map((file) => (
            <div key={file.uuid}>
              <img
                src={file.cdnUrl}
                alt={file.fileInfo.originalFilename}
                className="lg:w-[200px] w-[50px] lg:h-[100px] h-[50px]"
              />
            </div>
          ))}
        </div>

        <div className="border-b border-b-black border-dashed" />
        <input
          type="text"
          className="p-4 border-[#666666] border rounded-md"
          placeholder="User Name"
        />
        <input
          type="text"
          className="p-4 border-[#666666] border rounded-md"
          placeholder="Email"
        />
      </div>
    </div>
  );
};

export default Form;
