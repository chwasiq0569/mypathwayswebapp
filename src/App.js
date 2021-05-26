import "./App.css";
import React from "react";
import AuthPage from "./pages/AuthPage/AuthPage";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

function App() {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <AuthPage />
    </MuiPickersUtilsProvider>
  );
}

export default App;
