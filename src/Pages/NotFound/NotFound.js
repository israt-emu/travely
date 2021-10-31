import React from "react";
import img from "../../images/404.png";

const NotFound = () => {
  return (
    <div className="text-center my-8">
      <img src={img} alt="" className="mx-auto" />
      <h1 className="text-3xl font-bold">Page Not Found</h1>
    </div>
  );
};

export default NotFound;
