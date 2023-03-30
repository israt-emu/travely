import React, {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {useParams} from "react-router";
import useAuth from "../../hooks/useAuth";

const PlaceOrder = () => {
  const {id} = useParams();
  const {user} = useAuth();
  const [tour, setTour] = useState({});
  ///fetching single item by id
  useEffect(() => {
    fetch(`https://travely-server.onrender.com/offerings/${id}`)
      .then((res) => res.json())
      .then((data) => setTour(data));
  }, []);
  const {title, img, description, price} = tour;
  //react hook form
  const {register, handleSubmit, reset} = useForm();
  const onSubmit = (data) => {
    data.status = "Pending";
    data.tour = title;
    data.img = img;
    data.price = price;
    //post request
    fetch("https://travely-server.onrender.com/visitors", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Order Placed Successfully!!");
          reset();
        }
      });
  };
  return (
    <div className="w-11/12 mx-auto py-14">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 items-center">
        <div className="bg-blue-900 p-10 rounded shadow-lg">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" defaultValue={user.displayName || ""} {...register("name", {required: true, maxLength: 20})} className="block w-full py-2 mt-2 rounded px-3" />
            <br />
            <input type="email" defaultValue={user.email || ""} {...register("email")} className="block w-full py-2 mt-1 rounded px-3" />
            <br />
            <input type="text" {...register("address")} className="block w-full py-2 mt-1 rounded px-3" placeholder="Your Address" />
            <br />
            <input type="number" {...register("phone")} className="block w-full py-2 mt-1 rounded px-3" placeholder="Your Phone" />
            <br />
            <button type="submit" className="bg-blue-300 text-blue-900 font-bold px-4 py-2 rounded">
              Place Order
            </button>
          </form>
        </div>
        <div className="lg:col-start-2 lg:col-end-4 p-8 shadow lg:ml-12">
          <div>
            <img src={img} alt="" className="w-3/4" />
          </div>
          <h1 className="text-2xl font-bold my-3">{title}</h1>
          <p className="text-blue-900 font-bold text-lg">${price}/per person</p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
