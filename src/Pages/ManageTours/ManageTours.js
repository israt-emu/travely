import React, { useEffect, useState } from "react";
import ManageSingle from "../ManageSingle/ManageSingle";

const ManageTours = () => {
  const [bookedTours, setBookedTours] = useState([]);
  const [change, setChange] = useState(false);
  //fetching data from visitors
  useEffect(() => {
    fetch("https://murmuring-journey-94350.herokuapp.com/visitors")
      .then((res) => res.json())
      .then((data) => setBookedTours(data));
  }, [change]);

  return (
    <div className="md:w-11/12 w-full mx-auto shadow-lg py-6 mt-6 md:mt-0">
      <h1 className="text-center md:text-3xl text-2xl font-semibold">
        Tours Booked By All Visitors
      </h1>
      <div className="p-4">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
          {bookedTours.map((tour) => (
            <ManageSingle
              key={tour._id}
              tour={tour}
              setChange={setChange}
              change={change}
            ></ManageSingle>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageTours;
