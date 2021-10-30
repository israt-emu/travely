import React from "react";
import { useState } from "react/cjs/react.development";

const SingleTour = (props) => {
  const [isTour, setIsTour] = useState(true);
  const { _id, tour, img, price, status } = props.tour;
  const handleDelete = () => {
    const proceed = window.confirm("Are you sure you want to cancel booking?");
    if (proceed) {
      fetch(`http://localhost:5000/visitors/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert("Canceled Successfully");
            setIsTour(false);
          }
        });
    }
  };
  return (
    <div>
      {isTour && (
        <div className="p-6 shadow-xl h-full">
          <div>
            <img src={img} className="" alt="" />
          </div>
          <div>
            <h1 className="text-xl font-bold my-2">{tour}</h1>
            <h1 className="text-lg font-bold text-blue-900">
              ${price}/per person
            </h1>
            {status === "Pending" ? (
              <p className="text-red-500 font-bold">Booking {status}...</p>
            ) : (
              <p className="text-green-700 font-bold">Booking {status}</p>
            )}
            <button
              className="px-3 py-2 rounded font-medium bg-blue-900 text-white mt-2"
              onClick={handleDelete}
            >
              Cancel Booking
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleTour;
