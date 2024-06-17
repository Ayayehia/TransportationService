"use client";
import { cn } from "@/lib/utils";
import { StarIcon } from "@heroicons/react/20/solid";
import "@uploadcare/react-uploader/core.css";
import { FileUploaderRegular } from "@uploadcare/react-uploader";
import { useState } from "react";
import { z } from "zod";
import { Formik, Field, Form } from "formik";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
const ReviewForm = ({
  setterform,
  imageid,
  Setimageid,
  Reviewform,
  Setreviewform,
  avatarimage,
  SetAvatarimage,
}: {
  setterform: (value: boolean) => void;
  Reviewform: Array<any>;
  Setreviewform?: React.Dispatch<React.SetStateAction<Array<any>>>;
  imageid: Array<any>;
  Setimageid?: React.Dispatch<React.SetStateAction<Array<any>>>;
  avatarimage: Array<any>;
  SetAvatarimage: React.Dispatch<React.SetStateAction<Array<any>>>;
}) => {
  console.log(Reviewform[0]?.avatar, "Reviewform info avatar");
  console.log(Reviewform, "Reviewform info");

  const handleChangeEvent = (items) => {
    Setimageid([
      ...items.allEntries.filter((file) => file.status === "success"),
    ]);
  };
  const handleChangeEventavatar = (items) => {
    SetAvatarimage([
      ...items.allEntries.filter((file) => file.status === "success"),
    ]);
  };
  const schema = z.object({
    title: z.string().nonempty("Title is Required"),
    review: z.string().nonempty("Review is Required"),
    username: z.string().nonempty("UserName is Required"),
    email: z.string().email("Invalid email address"),
  });
  const validate = (values): any => {
    try {
      schema.parse(values);
    } catch (error) {
      return error.formErrors.fieldErrors;
    }
    return {};
  };
  return (
    <Formik
      validate={validate}
      initialValues={{
        title: "",
        review: "",
        username: "",
        email: "",
      }}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        try {
          setSubmitting(false);
          resetForm();
          Setimageid([]);
          SetAvatarimage([]);
          Setreviewform([values, imageid, avatarimage]);
          setterform(false);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
        console.log(values, "Values on submit");
        setSubmitting(false); // Ensure to set submitting to false after submission
      }}
    >
      {({ isSubmitting, errors, touched }) => (
        <Form className="flex flex-col gap-4 pt-5 lg:pt-10">
          <div className="flex justify-between w-full">
            <button onClick={() => setterform(false)}>Cancel</button>
            <button
              type="submit"
              className="border-[#666666] bg-white p-2 px-4"
            >
              Post
            </button>
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
            <Field
              type="text"
              className="p-4 border-[#666666] border rounded-md"
              placeholder="Title"
              name="title"
            />
            {errors.title && touched.title ? (
              <div className="text-red-500">{errors.title}</div>
            ) : null}
            <Field
              type="text"
              className="p-4 border-[#666666] border rounded-md"
              placeholder="Review"
              name="review"
            />
            {errors.review && touched.review ? (
              <div className="text-red-500">{errors.review}</div>
            ) : null}

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
            <Field
              type="text"
              className="p-4 border-[#666666] border rounded-md"
              placeholder="User Name"
              name="username"
            />
            {errors.username && touched.username ? (
              <div className="text-red-500">{errors.username}</div>
            ) : null}
            <Field
              type="text"
              className="p-4 border-[#666666] border rounded-md"
              placeholder="Email"
              name="email"
            />
            {errors.email && touched.email ? (
              <div className="text-red-500">{errors.email}</div>
            ) : null}
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <FileUploaderRegular
                pubkey="cd61ea7861feaacd09cc"
                maxLocalFileSizeBytes={10000000}
                multipleMax={1}
                imgOnly={true}
                sourceList="local, url, camera, dropbox"
                onChange={handleChangeEventavatar}
              />
              <div className="flex justify-start w-full gap-3">
                {avatarimage.map((file) => (
                  <div key={file.uuid}>
                    <img
                      src={file.cdnUrl}
                      alt={file.fileInfo.originalFilename}
                      className="lg:w-[200px] w-[50px] lg:h-[100px] h-[50px]"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ReviewForm;
