import React, { useEffect, useState } from "react";
import SingleOffer from "../SingleOffer/SingleOffer";

const Offerings = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    fetch("https://murmuring-journey-94350.herokuapp.com/offerings")
      .then((res) => res.json())
      .then((data) => setTours(data))
      .finally(() => setIsLoading(false));
  }, []);
  //loading spinner
  if (isLoading) {
    return (
      <div
        style={{ borderTopColor: "transparent" }}
        className="w-16 h-16 border-4 border-blue-900 border-dashed rounded-full animate-spin mx-auto mt-10"
      ></div>
    );
  }
  return (
    <div className="lg:w-11/12 md:w-4/5 w-11/12 mx-auto py-14">
      <h1 className="text-4xl text-center mb-6 py-6"> Our offerings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {tours.map((tour) => (
          <SingleOffer key={tour._id} tour={tour}></SingleOffer>
        ))}
      </div>
    </div>
  );
};

export default Offerings;
