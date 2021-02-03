import './App.css';
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
  
    <Router>
      <Switch>
        <Route path="/Page1" exact={true} component={Page1} />
        <Route path="/Page2" exact={true} component={Page2} />
      </Switch>
    </Router>

    
  );
}

export default App;


