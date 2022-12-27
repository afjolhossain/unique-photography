import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginImageBG from "../../../images/login-bg.jpg";
import "./Regiaster.css";
import logo from "../../../images/logo.png";
import google from "../../../images/social-img/google.png";
import facebook from "../../../images/social-img/Facebook.png";
import github from "../../../images/social-img/github.png";
import auth from "../../Firebase.config";
import {
  useCreateUserWithEmailAndPassword,
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

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);

  const [signInWithGoogle, user1, error] = useSignInWithGoogle(auth);

  const [signInWithGithub, user2] = useSignInWithGithub(auth);

  const [signInWithFacebook, user3] = useSignInWithFacebook(auth);

  const emailOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const passwordOnBlur = (e) => {
    setPassword(e.target.value);
  };
  const confirnPasswordOnBlur = (e) => {
    setConfirmPassword(e.target.value);
  };
  if (user) {
    navigate("/");
  }
  if (user1) {
    navigate("/");
  }
  if (user2) {
    navigate("/");
  }
  if (user3) {
    navigate("/");
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      error("Your two password did't match");
    }
    if (password.length < 6) {
      setEmail("Password must be six or longer character");
    }
    createUserWithEmailAndPassword(email, password);
  };
  return (
    <div style={LoginBG} xs={12}>
      <br />
      <div className="login-heading">
        <h1>UNIQUE</h1>
        <small>Photography</small>
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
            Sign-up Your Account
          </h3>
          <span>
            All ready user ?<Link to="/login">Login</Link>
          </span>
          <br />
          <form onSubmit={handleOnSubmit}>
            <input
              type="email"
              name="email"
              onBlur={emailOnBlur}
              placeholder="Entre your Email"
              id=""
            />
            <input
              type="password"
              onBlur={passwordOnBlur}
              name="password"
              placeholder="Entre your Password"
              id=""
            />
            <input
              type="password"
              onBlur={confirnPasswordOnBlur}
              name="confirmpassword"
              placeholder="Entre re-password"
              id=""
            />
            {error}
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
