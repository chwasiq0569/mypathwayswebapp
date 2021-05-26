import React, { useState } from "react";
import "../SignIn/signin.css";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import EmailIcon from "../../assets/icons/emailicon.png";
import PasswordIcon from "../../assets/icons/passwordicon.png";
import NameIcon from "../../assets/icons/usericon.png";
import NetworkIcon from "../../assets/icons/networkicon.png";
import { grey } from "@material-ui/core/colors";
import Checkbox from "@material-ui/core/Checkbox";
import DateRangeIcon from "@material-ui/icons/DateRange";
import InlineDatePicker from "../utils/InlineDatePicker";
import {
  Button,
  createMuiTheme,
  Grid,
  makeStyles,
  MuiThemeProvider,
  Typography,
} from "@material-ui/core";

const MainTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#0071BC",
    },
  },
});

const SignUp = ({ setSignInPage }) => {
  const [hidePassword, setHidePassword] = useState(true);
  const [selectedDOB, setSelectedDOB] = useState("DD/MM/YYYY");

  const handleHidePassword = () => {
    setHidePassword(!hidePassword);
  };

  return (
    <MuiThemeProvider theme={MainTheme}>
      <div className="formContainer">
        <form>
          <label htmlFor="name">Name</label>
          <br />
          <div className="inputFieldContainer">
            <div className="iconContainer">
              <img src={NameIcon} />
            </div>
            <input
              type="name"
              id="name"
              name="name"
              placeholder="e.g. Joseph"
            />
          </div>
          <br />
          <label htmlFor="dob">Date of Birth</label>

          <br />
          <div className="inputFieldContainer">
            <div className="iconContainer" style={{ position: "relative" }}>
              <DateRangeIcon style={{ fontSize: 20, color: grey[500] }} />
              <InlineDatePicker setSelectedDOB={setSelectedDOB} />
            </div>
            <input
              style={{ marginTop: "5px" }}
              type="dob"
              id="dob"
              name="dob"
              placeholder="DD/MM/YYYY"
              value={selectedDOB}
            />
          </div>
          <br />
          <label htmlFor="email">Email Address</label>
          <br />
          <div className="inputFieldContainer">
            <div className="iconContainer">
              <img src={EmailIcon} />
            </div>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="email@email.com"
            />
          </div>
          <label htmlFor="networkcode">Network Code</label>
          <br />
          <div className="inputFieldContainer">
            <div className="iconContainer">
              <img src={NetworkIcon} />
            </div>
            <input
              type="networkcode"
              id="networkcode"
              name="networkcode"
              placeholder="2326565"
            />
          </div>
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <div className="inputFieldContainer">
            <div className="iconContainer">
              <img src={PasswordIcon} />
            </div>
            <input
              type={hidePassword ? "password" : "text"}
              id="password"
              name="password"
              placeholder="minimum 8 characters"
            />
            <div className="hideShowIcon" onClick={handleHidePassword}>
              {hidePassword ? (
                <VisibilityIcon style={{ fontSize: 20, color: grey[500] }} />
              ) : (
                <VisibilityOffIcon style={{ fontSize: 20, color: grey[500] }} />
              )}
            </div>
          </div>
          <div className="forgetPassword"></div>
          <div className="rememberAccountSection">
            <Checkbox
              style={{ margin: 0, padding: 0, color: "#0071BC" }}
              defaultChecked
              color="primary"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />{" "}
            <span className="basicfontStylings">
              I accept the <span className="importantInfo">Privacy Policy</span>{" "}
              & <span className="importantInfo">Terms & Conditions</span>
            </span>
          </div>
          <div container className="submitAndSignUp">
            <div className="leftSide">
              <button className="submitBtnForm">Sign Up</button>
            </div>
            <div className="rightSide">
              <p className="signUpText">
                Are you a member?
                <strong
                  className="clickable"
                  onClick={() => setSignInPage(true)}
                  style={{ color: "#0071BC", marginLeft: "5px" }}
                >
                  Sign In
                </strong>
              </p>
            </div>
          </div>
        </form>
      </div>
    </MuiThemeProvider>
  );
};

export default SignUp;
