import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import ProgressOfRes from "../ProgressOfRes/ProgressOfRes";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <About></About>
      <ProgressOfRes></ProgressOfRes>
    </div>
  );
};

export default Home;
