import React from "react";
import OurServices from "../../ourServices/OurServices";
import Footer from "../../Shared/Footer/Footer";
import Banner from "../banner/Banner";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <OurServices></OurServices>
      <Services></Services>
      <Footer></Footer>
    </div>
  );
};

export default Home;
