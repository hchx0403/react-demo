import './App.css';
import Page0 from './Pages/Page0'
import Page1 from './Pages/Page1'
import Page2 from './Pages/Page2'
import Page3 from './Pages/Page3'
import Page4 from './Pages/Page4'


import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true} component={Page0} />
        <Route path="/Page1" exact={true} component={Page1} />
        <Route path="/Page2" exact={true} component={Page2} />
        <Route path="/Page3" exact={true} component={Page3} />
        <Route path="/Page4" exact={true} component={Page4} />
      </Switch>
    </Router>
  );
}

export default App;
