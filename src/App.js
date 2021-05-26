import "./App.css";
import React from "react";
import AuthPage from "./pages/AuthPage/AuthPage";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import InitialStep from "./pages/Onboarding/InitialStep";

function App() {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      {/* <AuthPage /> */}
      <InitialStep />
    </MuiPickersUtilsProvider>
  );
}

export default App;
