import React from "react";
import "./onboardingnavbar.css";
import LogoImg from "../../assets/images/Logo.png";

const OnboardingNavbar = () => {
  return (
    <div className="onboardingNavbarContainer">
      <div className="brandLogoContainer">
        <img className="logo" alt="mypathways_logo" src={LogoImg} />
      </div>
      <div className="navItemsContainer">
        <div className="navItem firstItem">Home</div>
        <div className="navItem">Blog</div>
      </div>
    </div>
  );
};

export default OnboardingNavbar;
