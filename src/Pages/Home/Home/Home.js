import React from "react";
import Banner from "../Banner/Banner";
import FAQ from "../FAQ/FAQ";
import Features from "../Features/Features";
import Offerings from "../Offerings/Offerings";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Features></Features>
      <Offerings></Offerings>
      <FAQ></FAQ>
    </div>
  );
};

export default Home;
