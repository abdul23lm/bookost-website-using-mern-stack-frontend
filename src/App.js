import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "assets/scss/style.scss";
import LandingPage from "pages/LandingPage";
import Example from "pages/Example";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* <Route path="/" component={LandingPage}/> */}
          <Route path="/example" component={Example} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
