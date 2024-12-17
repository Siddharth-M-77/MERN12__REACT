import React, { useState } from "react";
import { useForm } from "react-hook-form";

const FormHandlingUsingRHF = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullname: "Siddharth",
      email: "sidd@gmail.com",
      gender: "male",
      city: "Ujjain",

    },
  });

  const submitHandler = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div className="w-screen h-screen   bg-gray-600 flex items-center justify-center">
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="flex items-center bg-black opacity-100 text-white min-h-[400px] shadow-md min-w-[400px]  rounded-lg p-10 justify-around gap-5 flex-col"
      >
        <input
          {...register("fullname", { required: "FullName is required" })}
          type="text"
          className="px-6 py-2 rounded-lg w-full bg-white text-black"
          placeholder="Fullname"
        />

        {errors.fullname && (
          <p className=" text-red-500">{errors.fullname.message}</p>
        )}

        <input
          type="text"
          className="px-6 py-2 rounded-lg bg-white w-full text-black"
          placeholder="Email"
          {...register("email", { required: "Email is required" })}
        />

        {errors.email && (
          <p className=" text-red-500">{errors.email.message}</p>
        )}

        <div className="flex gap-5">
          <input
            className="px-6 py-2 rounded-lg bg-white w-full text-black"
            {...register("gender", { required: "gender is required" })}
            id="male"
            value={"male"}
            type="radio"
          />
          <label htmlFor="male">Male</label>
          <input
            type="radio"
            {...register("gender", { required: "Gender is required" })}
            id="female"
            value={"female"}
          />

          <label htmlFor="female">Female</label>
        </div>
        {errors.gender && (
          <p className="text-red-500 ">{errors.gender.message}</p>
        )}
        <select
          {...register("city", { required: "City is required" })}
          className="p-4 w-full bg-white my-6 text-black"
        >
          <option value="bhopal">Bhopal</option>
          <option value="Gwalior">Gwalior</option>
          <option value="Noida">Noida</option>
          <option value="Pune">Pune</option>
          <option value="Ujjain">Ujjain</option>
        </select>
        {errors.city && (
          <p className="px-4 py-1 text-red-900">{errors.city.message}</p>
        )}
        <input className="px-6 py-2 rounded-lg bg-red-500" type="submit" />
      </form>
    </div>
  );
};

export default FormHandlingUsingRHF;
