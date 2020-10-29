import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "assets/scss/style.scss";
import LandingPage from "pages/LandingPage";
import DetailsPage from "pages/DetailsPage";
import ExampleInputNumber from "pages/ExampleInputNumber";
import ExampleInputDate from "pages/ExampleInputDate";
import ExampleBreadcrumb from "pages/ExampleBreadcrumb";

export default function App() {
  return (
    <div className="App">
      <Router>
          <Route exact path="/" component={LandingPage}/>
          <Route exact path="/detail-kostan/:id" component={DetailsPage}/>
          <Route path="/example-input-number" component={ExampleInputNumber} />
          <Route path="/example-input-date" component={ExampleInputDate} />
          <Route path="/example-breadcrumb" component={ExampleBreadcrumb} />
      </Router>
    </div>
  );
}
