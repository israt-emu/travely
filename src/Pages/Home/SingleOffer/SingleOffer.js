import React from "react";
import { Link } from "react-router-dom";

const SingleOffer = ({ tour }) => {
  const { title, img, description, price, _id } = tour;
  return (
    <div className="p-5 shadow-xl">
      <div>
        <img src={img} alt="" />
      </div>
      <h1 className="text-xl font-bold my-3">{title}</h1>
      <p>{description.slice(0, 150)}...</p>
      <div className="flex items-start mt-3 justify-between">
        <Link to={`/placeorder/${_id}`}>
          <button className="text-white py-2 px-3 rounded bg-blue-900">
            Book Now
          </button>
        </Link>
        <div className="bg-blue-200 rounded-2xl px-4 py-1 font-bold text-blue-900">
          <p>${price}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleOffer;
