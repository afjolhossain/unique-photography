import React from "react";
import "./Ourservices.css";

const OurServices = () => {
  return (
    <div className="row service">
      <div className="col-lg-6 col-sm-12">
        <img
          style={{ margin: "auto", width: "100%" }}
          src="http://www.themetechmount.in/html/wedco/images/single-img-04.jpg"
          alt=""
        />
      </div>

      <div className="col-lg-6 col-sm-12 text-start ">
        <div className="title">
          <h6>Welcome To Our Unique</h6>
          <h1>The Most Creative Agency</h1>
          <p>
            We’ve delivered fabulous wedding event experiences over the last two
            decades and are now out a whole new growth story.
          </p>
        </div>
        <div className="d-flex align-items-center ">
          <div>
            <img
              style={{ width: "100px" }}
              src="https://i.ibb.co/92WkY1Q/Services.png"
              alt=""
            />
          </div>
          <div>
            <h4>We Bring Quality Services</h4>
            <p>
              Experience in corporate events, hospitality and wedding planning
              is certain to make your wedding memorable.
            </p>
          </div>
        </div>
        <div className="d-flex">
          <div>
            <img
              style={{ width: "100px" }}
              src=" https://i.ibb.co/gwW38qd/support.png"
              alt=""
            />
          </div>
          <div>
            <h4>Experiance & Talented</h4>
            <p>
              We assure a wedding that is stress-free, relaxed and with
              enjoyable & the way a destination wedding should be!
            </p>
          </div>
        </div>
        <div className="d-flex mb-20">
          <div>
            <img
              style={{ width: "100px" }}
              src="https://i.ibb.co/C2RJbkZ/Experiance-Talented.png"
              alt=""
            />
          </div>
          <div>
            <h4>Offers 24/7 Quick Support</h4>
            <p>
              With years of services in the event industry, Wedco is a wedding
              planner stands on a stronger base with.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
