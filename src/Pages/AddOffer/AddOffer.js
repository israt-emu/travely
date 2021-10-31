import React from "react";
import { useForm } from "react-hook-form";

const AddOffer = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    fetch("https://murmuring-journey-94350.herokuapp.com/offerings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Added Successfully");
          reset();
        }
      });
  };
  return (
    <div className="lg:w-4/5 w-11/12 mx-auto bg-blue-900 py-10 mt-6 md:mt-0">
      <h1 className="text-blue-200 text-3xl font-semibold text-center py-6">
        Add a New Tour Plan
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="px-5 mx-auto lg:w-3/4 md:w-11/12 sm:w-4/5 w-full"
      >
        <input
          type="text"
          {...register("title")}
          className="mb-2 py-2 px-3 mr-3 rounded w-full"
          placeholder="Place of Travel"
        />

        <input
          type="number"
          placeholder="Price"
          {...register("price", { required: true })}
          className="mb-2 py-2 px-3 rounded w-full"
        />

        <br />

        <textarea
          name=""
          id=""
          cols="40"
          rows="5"
          className="mb-2 px-3 mr-3 rounded w-full"
          placeholder="Description"
          {...register("description")}
        ></textarea>

        <input
          type="text"
          {...register("img")}
          className="mb-1 py-2 px-3 rounded w-full"
          placeholder="Image"
        />

        <br />

        <button
          type="submit"
          className="bg-white text-blue-900 font-semibold py-2 px-3 rounded"
        >
          Add Offer
        </button>
      </form>
    </div>
  );
};

export default AddOffer;
