import React from "react";
import "./Footer.css";

const Footer = () => {
  const moonLanding = new Date("december 27, 22 00:20:18");
  return (
    <div className=" text-start footer-container ">
      <div className="row">
        <div className="col-lg-4 col-md-6 col-xs-12 all-clumn">
          <h4>About Unique</h4>
          <p>
            We’ve delivered fabulous wedding event experiences over the last two
            decades and are now poised to chart out a whole new growth story. We
            hosted for reputed company
          </p>
        </div>
        <div className="col-lg-2 col-md-6 col-xs-12 all-clumn">
          <h4>Our Services</h4>
          <p>User Strategy</p>
          <p>Product Designing</p>
          <p>Marketing Strategy</p>
          <p>IT Consultancy</p>
          <p>Server Security</p>
        </div>
        <div className="col-lg-3 col-md-6 col-xs-12 all-clumn">
          <h4>Wedding Planner Faqs</h4>
          <p>Why hire a planner ?</p>
          <p>How can i make an appointment ?</p>
          <p>How to choose a venue ?</p>
          <p>Event catalogue ?</p>
          <p>Pyment type you accept</p>
        </div>
        <div className="col-lg-3 col-md-6 col-xs-12 all-clumn">
          <h4>Wedding Planner Faqs</h4>
          <p>Why hire a planner ?</p>
          <p>How can i make an appointment ?</p>
          <p>How to choose a venue ?</p>
          <p>Event catalogue ?</p>
          <p>Pyment type you accept</p>
        </div>
        <p className="copyright">
          Unique Photography©{moonLanding.getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default Footer;
