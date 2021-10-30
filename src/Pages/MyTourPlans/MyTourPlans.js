import React, { useEffect } from "react";

import { useState } from "react/cjs/react.development";
import useAuth from "../../hooks/useAuth";
import SingleTour from "../SingleTour/SingleTour";

const MyTourPlans = () => {
  const [tours, setTours] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch(`http://localhost:5000/visitors/${user.email}`)
      .then((res) => res.json())
      .then((data) => setTours(data));
  }, [user.email]);

  return (
    <div className="md:w-4/5 w-11/12 mx-auto py-14">
      <h1 className="text-center mb-8 text-3xl font-medium">
        Tour Booked by {user.displayName}
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {tours.map(
          (tour) => tour && <SingleTour key={tour._id} tour={tour}></SingleTour>
        )}
      </div>
    </div>
  );
};

export default MyTourPlans;
