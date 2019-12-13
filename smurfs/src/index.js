import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
// import "./index.css";
import App from "./components/App";

import 'semantic-ui-css/semantic.min.css'

const AppWithRouter = withRouter(App);

ReactDOM.render(<Router><App /></Router>, document.getElementById("root"));
