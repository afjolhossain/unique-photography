import React from "react";
import "./Banner.css";
import imgBg from "../../../images/carosol/lens-3151078_640.jpg";
const LoginBG = {
  background: `url(${imgBg})`,
  backgroundRepeat: " no-repeat",
  backgroundSize: "cover",
  height: "650px",
  width: "100%",
};
const Banner = () => {
  return (
    <div style={LoginBG}>
      <div className="containerbanner" sx={12}>
        <p className="heading-title">welcome To Unique</p>
        <h3 className="sub-title">
          We Promise, We Provide Quality Services For You{" "}
        </h3>
        <h5>Photography</h5>
        <p className="details">
          “I realized that getting my picture was more important to me than the
          <br />
          discomfort of someone, not understanding or someones opposition to my
          goals.”
        </p>
      </div>
    </div>
  );
};

export default Banner;
