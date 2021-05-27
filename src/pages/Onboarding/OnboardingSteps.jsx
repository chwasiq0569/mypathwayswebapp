import React from "react";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Check from "@material-ui/icons/Check";
import StepConnector from "@material-ui/core/StepConnector";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import OnboardingNavbar from "../../components/OnboardingNavbar/OnboardingNavbar";
import StepOne from "./Steps/StepOne/StepOne";
import "./onboardingsteps.css";
import StepOneUpper from "./Steps/StepOne/StepOneUpper";
import StepThreeUpper from "./Steps/StepThree/StepThreeUpper";
import StepThree from "./Steps/StepThree/StepThree";
import StepFourUpper from "./Steps/StepFour/StepFourUpper";
import StepFour from "./Steps/StepFour/StepFour";
import FinishStep from "./Steps/FinishStep/FinishStep";
import FinishStepUpper from "./Steps/FinishStep/FinishStepUpper";

const QontoConnector = withStyles({
  alternativeLabel: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)",
  },
  active: {
    "& $line": {
      borderColor: "#784af4",
    },
  },
  completed: {
    "& $line": {
      borderColor: "#784af4",
    },
  },
  line: {
    borderColor: "#eaeaf0",
    borderTopWidth: 3,
    borderRadius: 1,
  },
})(StepConnector);

const useQontoStepIconStyles = makeStyles({
  root: {
    color: "#eaeaf0",
    display: "flex",
    height: 22,
    alignItems: "center",
  },
  active: {
    color: "#784af4",
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
  completed: {
    color: "#784af4",
    zIndex: 1,
    fontSize: 18,
  },
});

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? (
        <Check className={classes.completed} />
      ) : (
        <div className={classes.circle} />
      )}
    </div>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
};

const ColorlibConnector = withStyles({
  alternativeLabel: {
    // top: 224
  },
  active: {
    "& $line": {
      backgroundColor: "#0071BC",
      //   backgroundImage:
      //     "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  completed: {
    "& $line": {
      backgroundColor: "#0071BC",
    },
  },
  line: {
    width: "cover",
    height: 2,
    border: 0,
    backgroundColor: "#8798B4",
    borderRadius: 1,
    marginLeft: "-8px",
    marginRight: "-8px",
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: "#fffff",
    zIndex: 1,
    // color: "#fff",
    width: "24px",
    height: "24px",
    // display: "flex",
    borderRadius: "50%",
    // justifyContent: "center",
    // alignItems: "center",
    border: "2px solid #8798B4",
  },
  active: {
    // top: "10%",
    // backgroundColor: "yellow",
    // backgroundImage: "./timelineactive.png",
    backgroundColor: "white",
    border: "8px solid #0071BC",
    width: "24px",
    height: "24px",
    boxShadow: "0px 4px 8px rgba(0, 84, 139, 0.2)",
    // borderRadius: "30px",
    // backgroundImage:
    //   "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
    // boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  },
  completed: {
    backgroundColor: "white",
    border: "8px solid #0071BC",
    width: "24px",
    height: "24px",
    boxShadow: "0px 4px 8px rgba(0, 84, 139, 0.2)",
    // backgroundColor: "yellow",
    // backgroundImage:
    //   "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: "",
    2: "",
    3: "",
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return [
    "Select campaign settings",
    "Create an ad group",
    "Create an ad",
    "Create an ad on Step4",
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return { upper: <StepOneUpper />, lower: <StepOne /> };
    case 1:
      return "What is an ad group anyways?";
    case 2:
      return { upper: <StepThreeUpper />, lower: <StepThree /> };
    case 3:
      return { upper: <StepFourUpper />, lower: <StepFour /> };
    default:
      return "Unknown step";
  }
}

export default function CustomizedSteppers() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <div className={"stepContainer"}>
        <OnboardingNavbar />
        <div className="pageContent">
          {activeStep === steps.length ? (
            <div>
              <FinishStepUpper />
            </div>
          ) : (
            getStepContent(activeStep).upper
          )}
          <Stepper
            style={{ background: "none" }}
            alternativeLabel
            activeStep={activeStep}
            connector={<ColorlibConnector />}
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel StepIconComponent={ColorlibStepIcon}></StepLabel>
              </Step>
            ))}
          </Stepper>
          <div>
            {/* when all steps are finished */}
            {activeStep === steps.length ? (
              <div>
                {/* <FinishStepUpper /> */}
                <FinishStep />
                {/* <Typography className={classes.instructions}>
                  All steps completed - you&apos;re finished
                </Typography> */}
                {/* <Button onClick={handleReset} className={classes.button}>
                  Reset
                </Button> */}
              </div>
            ) : (
              <div>
                <Typography className={classes.instructions}>
                  {getStepContent(activeStep).lower}
                </Typography>
                <div className="btnsContainerWrapper">
                  <div className="actionBtns">
                    <div
                      className="prevBtn"
                      disabled={activeStep === 0}
                      onClick={handleBack}
                    >
                      <svg
                        width="14"
                        height="10"
                        viewBox="0 0 14 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M4.92192 0.947368C4.64757 0.684211 4.20447 0.684211 3.93012 0.947368L0.207585 4.51803C-0.0693741 4.78369 -0.0693741 5.2163 0.207585 5.48196L3.93002 9.05262C4.06766 9.18453 4.24742 9.25 4.42593 9.25C4.60441 9.25 4.78421 9.18457 4.92181 9.05264C5.19877 8.78698 5.19879 8.35435 4.92183 8.08869L2.41008 5.67934H12.9326C13.3169 5.67934 13.6362 5.37935 13.6362 4.99999C13.6362 4.62059 13.3169 4.32065 12.9326 4.32065H2.41009L4.92192 1.9113C5.19888 1.64564 5.19888 1.21303 4.92192 0.947368Z"
                          fill="#505050"
                        />
                      </svg>
                      <span>Previous</span>
                    </div>
                    <div className="nextBtn" onClick={handleNext}>
                      <span>
                        {activeStep === steps.length - 1 ? "Finish" : "Next"}
                      </span>
                      <svg
                        width="14"
                        height="10"
                        viewBox="0 0 14 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M4.92192 0.947368C4.64757 0.684211 4.20447 0.684211 3.93012 0.947368L0.207585 4.51803C-0.0693741 4.78369 -0.0693741 5.2163 0.207585 5.48196L3.93002 9.05262C4.06766 9.18453 4.24742 9.25 4.42593 9.25C4.60441 9.25 4.78421 9.18457 4.92181 9.05264C5.19877 8.78698 5.19879 8.35435 4.92183 8.08869L2.41008 5.67934H12.9326C13.3169 5.67934 13.6362 5.37935 13.6362 4.99999C13.6362 4.62059 13.3169 4.32065 12.9326 4.32065H2.41009L4.92192 1.9113C5.19888 1.64564 5.19888 1.21303 4.92192 0.947368Z"
                          fill="#ffffff"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* <StepOne /> */}
        </div>
      </div>
    </div>
  );
}
