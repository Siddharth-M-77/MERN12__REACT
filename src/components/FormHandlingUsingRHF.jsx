import React, { useState } from "react";
import { useForm } from "react-hook-form";

const FormHandlingUsingRHF = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div className="w-screen h-screen   bg-indigo-600 flex items-center justify-center">
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="flex items-center bg-gray-400 opacity-90 text-black min-h-[400px] shadow-md min-w-[400px]  rounded-lg p-10 justify-around gap-5 flex-col"
      >
        <input
          {...register("fullname", { required: "City is required" })}
          type="text"
          className="px-6 py-2 rounded-lg w-full bg-white"
          placeholder="Fullname"
        />
        <div className="">
          {errors.fullname && (
            <p className="px-4 py-1 text-red-900">{errors.fullname.message}</p>
          )}
        </div>
        <input
          type="text"
          className="px-6 py-2 rounded-lg bg-white w-full"
          placeholder="Email"
          {...register("email", { required: "City is required" })}
        />
        <div className="">
          {errors.email && (
            <p className="px-4 py-1 text-red-900">{errors.email.message}</p>
          )}
        </div>
        <div className="flex gap-5">
          <input
            {...register("gender", { required: "gender is required" })}
            id="male"
            value={"male"}
            type="radio"
          />
          <label htmlFor="male">Male</label>
          <input
            type="radio"
            {...register("gender", { required: "City is required" })}
            id="female"
            value={"female"}
          />

          {errors.gender && <p className="">{errors.gender.message}</p>}
          <label htmlFor="female">Female</label>
        </div>
        <select
          {...register("city", { required: "City is required" })}
          className="p-4 w-full bg-white my-6"
        >
          <option value="">City</option>
          <option value="bhopal">Bhopal</option>
          <option value="Gwalior">Gwalior</option>
          <option value="Noida">Noida</option>
          <option value="Pune">Pune</option>
        </select>
        {errors.city && (
          <p className="px-4 py-1 text-red-900">{errors.city.message}</p>
        )}
        <input
          {...register}
          className="px-6 py-2 rounded-lg bg-red-500"
          type="submit"
        />
      </form>
    </div>
  );
};

export default FormHandlingUsingRHF;
