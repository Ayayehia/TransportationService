"use client";
import { Formik, Field, Form } from "formik";
import { db } from "../../../lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import { CircleCheck } from "lucide-react";
import { z } from "zod";

const schema = z.object({
  name: z.string().nonempty("Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^\d+$/, "Phone number must be a number"),
  describtion: z.string().nonempty("Description is required"),
});
const validate = (values): any => {
  try {
    schema.parse(values);
  } catch (error) {
    return error.formErrors.fieldErrors;
  }
  return {};
};
const Questions = () => {
  return (
    <Formik
      validate={validate}
      initialValues={{ name: "", email: "", phone: "", describtion: "" }}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        try {
          const docref = await addDoc(collection(db, "questions"), values);
          setSubmitting(true);
          // resetForm();
        } catch (e) {
          console.error("Error adding document: ", e);
        }
        console.log(values, "Values on submit");
        setSubmitting(false); // Ensure to set submitting to false after submission
      }}
    >
      {({ isSubmitting, errors, touched }) => (
        <Form className="pt-[170px] pb-20">
          <div className="flex flex-col lg:justify-start lg:items-start justify-center items-center w-full text-[#778892] gap-16">
            <h3 className="flex w-full justify-center uppercase text-4xl">
              You have questions
            </h3>
            <div className="lg:flex lg:flex-row flex-col gap-6  ">
              <div className="flex flex-col gap-5 items-start">
                <label>Name</label>
                <Field
                  name="name"
                  type="text"
                  className="border border-[#778892] rounded-md p-2"
                />
                {errors.name && touched.name ? (
                  <div className="text-red-500">{errors.name}</div>
                ) : null}
              </div>
              <div className="flex flex-col gap-5 items-start">
                <label>Email</label>
                <Field
                  name="email"
                  type="email"
                  className="border border-[#778892] rounded-md p-2"
                />
                {errors.email && touched.email ? (
                  <div className="text-red-500">{errors.email}</div>
                ) : null}
              </div>
              <div className="flex flex-col gap-5 items-start">
                <label>Phone Number</label>
                <Field
                  name="phone"
                  type="phone"
                  className="border border-[#778892] rounded-md p-2"
                />
                {errors.phone && touched.phone ? (
                  <div className="text-red-500">{errors.phone}</div>
                ) : null}
              </div>
            </div>
            <div className="flex flex-col gap-5 items-start">
              <label>Message</label>
              <Field
                as="textarea"
                className="border border-[#778892] rounded-md p-6"
                name="describtion"
              />
              {errors.describtion && touched.describtion ? (
                <div className="text-red-500">{errors.describtion}</div>
              ) : null}
            </div>
            <div className="flex w-full lg:justify-end justify-center">
              <button
                className="bg-transparent text-black font-medium text-2xl uppercase "
                type="submit"
                disabled={isSubmitting}
              >
                send
              </button>
            </div>
            {isSubmitting && (
              <div className="flex w-full justify-start text-green-500 text-lg font-bold">
                <span className="pr-4">
                  <CircleCheck color="green" />
                </span>
                Sent Succesufully
              </div>
            )}
          </div>
          {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
        </Form>
      )}
    </Formik>
  );
};

export default Questions;
