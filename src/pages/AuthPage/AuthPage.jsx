import { makeStyles } from "@material-ui/core";
import React from "react";
import LogoImg from "../../assets/images/Logo.png";
import SignupCover from "../../assets/images/signupcover.png";
import SignIn from "../../components/SignIn/SignIn";
import BottomVector from "../../../src/assets/images/bottomvector.png";
import "./authpage.css";

const AuthPage = () => {
  return (
    <div className="authPageContainer">
      <div className="leftSide">
        <div className="contentContainer">
          <div className="logoContainer">
            <img className="logo" alt="mypathways_logo" src={LogoImg} />
          </div>
          <p className="primaryHeading">Welcome Back!</p>
          <p className="secondaryText">
            Welcome back to Pathway, Good to see you again :)
          </p>
          <div className="signInContainer">
            <SignIn />
          </div>
        </div>
        <div className="bottomVector">
          <img src={BottomVector} />
        </div>
      </div>
      <div className="rightSide">
        <img className="signUpCoverImage" src={SignupCover} />
      </div>
    </div>
  );
};

export default AuthPage;
