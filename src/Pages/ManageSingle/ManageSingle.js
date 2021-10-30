import React from "react";
import { useState } from "react/cjs/react.development";

const ManageSingle = (props) => {
  const { _id, img, price, tour, status } = props?.tour;

  const setChange = props.setChange;
  //delete booking tour
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
            setChange(true);
          }
        });
    }
  };
  //status updating
  const handleApproved = () => {
    fetch(`http://localhost:5000/visitors/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(props.tour),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          alert("Booking Approved Successfully!");
          setChange(true);
        }
      });
  };
  return (
    <div>
      <div className="p-6 shadow-xl h-full">
        <div className="text-right">
          <button
            className="py-1 px-3 bg-red-200 font-bold rounded text-red-700 my-2"
            onClick={handleDelete}
            title="Cancel Booking"
          >
            X
          </button>
        </div>
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
            <p className="text-green-700 font-bold text-lg">
              Booking {status}!
            </p>
          )}
          {status === "Pending" && (
            <button
              className="px-3 py-2 rounded font-medium bg-blue-900 text-white mt-2"
              onClick={handleApproved}
            >
              Approved Booking
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageSingle;
