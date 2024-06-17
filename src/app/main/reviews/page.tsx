"use client";
import Form from "@/app/components/form/review/Form";
import Header from "@/app/components/form/review/Header";
import { useState } from "react";

const page = () => {
  const [Showform, setShowform] = useState<boolean>(false);
  const [imageid, Setimageid] = useState<any[]>([]);
  const [Reviewform, Setreviewform] = useState<any[]>([]);
  const [avatarimage, SetAvatarimage] = useState<any[]>([]);

  return (
    <div className="bg-[#E5E4E2] xl:px-[200px] p-4 lg:p-0 lg:px-[70px] h-full min-h-svh">
      {!Showform ? (
        <Header
          setterform={setShowform}
          Reviewform={Reviewform}
          Setreviewform={Setreviewform}
        />
      ) : (
        <Form
          setterform={setShowform}
          imageid={imageid}
          Setimageid={Setimageid}
          Reviewform={Reviewform}
          Setreviewform={Setreviewform}
          avatarimage={avatarimage}
          SetAvatarimage={SetAvatarimage}
        />
      )}
    </div>
  );
};

export default page;
