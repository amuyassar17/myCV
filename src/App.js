import React from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './component/Home';
import Skill from './component/Skill';
import Experience from './component/Experience';
import Portfolio from './component/Portfolio';
import Education from './component/Education';


function App() {
  return (
    <Router>
      <>
        <Route exact path="/" component={Home} />
        <Switch>
          <Route path="/skill" component={Skill} />
          <Route path="/education" component={Education} />
          <Route path="/experience" component={Experience} />
          <Route path="/portofolio" component={Portfolio} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
