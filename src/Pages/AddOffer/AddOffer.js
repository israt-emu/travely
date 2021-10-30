import React from "react";
import { useForm } from "react-hook-form";

const AddOffer = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <h1>add new</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="bg-blue-900 p-5">
        <input
          type="text"
          {...register("title")}
          className="mb-1"
          placeholder="Place of Travel"
        />
        <br />

        <input
          type="number"
          placeholder="Price"
          {...register("price", { required: true })}
          className="mb-1"
        />
        <br />
        <textarea
          name=""
          id=""
          cols="30"
          rows="5"
          className="mb-1"
          placeholder="Description"
          {...register("description")}
        ></textarea>
        <br />
        <input
          type="text"
          {...register("img")}
          className="mb-1"
          placeholder="Image"
        />
        <br />

        <button type="submit" className="bg-white">
          Add Offer
        </button>
      </form>
    </div>
  );
};

export default AddOffer;
