"use client";
import Form from "@/app/components/form/review/Form";
import Header from "@/app/components/form/review/Header";
import { useState } from "react";

const page = () => {
  const [Showform, setShowform] = useState<boolean>(false);
  return (
    <div className="bg-[#E5E4E2] xl:px-[200px] p-4 lg:p-0 lg:px-[70px] ">
      {!Showform ? (
        <Header setterform={setShowform} />
      ) : (
        <Form setterform={setShowform} />
      )}
    </div>
  );
};

export default page;
