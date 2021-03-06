import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from "./Components/Home";
import ConversionComp from "./Components/ConversionComp";
import Login from "./Components/Login";
import China from "./destinations/China";
import India from "./destinations/India";
import US from "./destinations/US";
import UK from "./destinations/UK";
import EU from "./destinations/EU";

class App extends React.Component{
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path = "/" component = {Home} exact/>
          <Route path = "/ConversionComp" component = {ConversionComp} />
          <Route path = "/China" component = {China} />
          <Route path = "/India" component = {India} />
          <Route path = "/UK" component = {UK} />
          <Route path = "/US" component = {US} />
          <Route path = "/EU" component = {EU} />
          <Route path = "/Login" component = {Login} />
          <Route component = {Error} />
        </Switch>
    </BrowserRouter>
    );
  }
}

export default App