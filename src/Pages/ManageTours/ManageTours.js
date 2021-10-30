import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import ManageSingle from "../ManageSingle/ManageSingle";

const ManageTours = () => {
  const [bookedTours, setBookedTours] = useState([]);
  const [change, setChange] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/visitors")
      .then((res) => res.json())
      .then((data) => setBookedTours(data));
  }, [change]);

  return (
    <div className="md:w-4/5 w-11/12 mx-auto shadow py-6 my-10">
      <h1 className="text-center text-3xl font-medium">
        Tours Booked By All Visitors
      </h1>
      <div className="p-4">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          {bookedTours.map((tour) => (
            <ManageSingle
              key={tour._id}
              tour={tour}
              setChange={setChange}
            ></ManageSingle>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageTours;
