import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "assets/scss/style.scss";
// import LandingPage from "pages/LandingPage";
// import ExampleInputNumber from "pages/ExampleInputNumber";
import ExampleInputDate from "pages/ExampleInputDate";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* <Route path="/" component={LandingPage}/> */}
          {/* <Route path="/example-input-number" component={ExampleInputNumber} /> */}
          <Route path="/example-input-date" component={ExampleInputDate} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
