import React, {useEffect, useState} from "react";
import useAuth from "../../hooks/useAuth";
import SingleTour from "../SingleTour/SingleTour";

const MyTourPlans = () => {
  const [tours, setTours] = useState([]);
  const [change, setChange] = useState(false);
  const {user} = useAuth();

  //fetching data by user email matching

  useEffect(() => {
    fetch(`https://travely-server.onrender.com/visitors/${user.email}`)
      .then((res) => res.json())
      .then((data) => setTours(data));
  }, [user.email, change]);

  return (
    <div className="md:w-4/5 w-11/12 mx-auto py-14">
      <h1 className="text-center mb-8 text-3xl font-medium">Tour Booked by {user.displayName}</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">{tours.map((tour) => tour && <SingleTour key={tour._id} tour={tour} setChange={setChange} change={change}></SingleTour>)}</div>
    </div>
  );
};

export default MyTourPlans;
