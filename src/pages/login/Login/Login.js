import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImageBG from "../../../images/login-bg.jpg";
import "./Login.css";
import logo from "../../../images/logo.png";
import google from "../../../images/social-img/google.png";
import facebook from "../../../images/social-img/Facebook.png";
import github from "../../../images/social-img/github.png";

import auth from "../../Firebase.config";
import {
  useSignInWithEmailAndPassword,
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";

const LoginBG = {
  background: `url(${loginImageBG})`,
  backgroundRepeat: "round",
  backgroundColor: "#040433",
  backgroundBlendMode: "overlay",
  width: "100%",
};
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [signInWithGoogle, user1] = useSignInWithGoogle(auth);

  const [signInWithGithub, user2] = useSignInWithGithub(auth);

  const [signInWithFacebook, user3] = useSignInWithFacebook(auth);

  const emailOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const passwordOnBlur = (e) => {
    setPassword(e.target.value);
  };
  if (user) {
    navigate(from, { replace: true });
  }
  if (user1) {
    navigate(from, { replace: true });
  }
  if (user2) {
    navigate(from, { replace: true });
  }
  if (user3) {
    navigate(from, { replace: true });
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  return (
    <div style={LoginBG} sm={12}>
      <br />
      <div className="login-heading">
        <h1>UNIQUE</h1>
        <h6> Photography</h6>
        <h3>LOGIN/SIGNUP/FORGOT PANEL ALL IN ONE SINGLE PAGE</h3>
      </div>
      <br />

      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 social-container mx-auto">
          <h1>UNIQUE</h1>
          <img src={logo} alt="" />
          <br />
          <small>Photography</small>
          <p>Login using social media to get quick access</p>
          <button onClick={() => signInWithGoogle()}>
            <img src={google} alt="" /> Sign-In-Google
          </button>
          <button onClick={() => signInWithFacebook()}>
            <img src={facebook} alt="" /> Sign-In-Facebook
          </button>
          <button onClick={() => signInWithGithub()}>
            <img src={github} alt="" /> Sign-In-Github
          </button>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 login-container mx-auto bg-body">
          <h3 style={{ color: "#E64209", marginTop: 40 }}>
            Login Your Account
          </h3>
          <span>
            Dont't have an Account ?<Link to="/register">Sign Up</Link>
          </span>
          <br />
          <form onSubmit={handleOnSubmit}>
            <input
              onBlur={emailOnBlur}
              type="email"
              name=""
              placeholder="Entre Email"
              id=""
            />
            <input
              type="password"
              name=""
              onBlur={passwordOnBlur}
              placeholder="Entre Password"
              id=""
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
