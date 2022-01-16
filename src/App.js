import React, { Component } from "react";
import "../node_modules/react-spinner/react-spinner.css";
import "./App.css";
import ButtonAppBar from "./AppBar";
import SelectedListItem from "./ListItems";
import GetLog from "./GetLog";
import { Switch, Route, BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ButtonAppBar />
        <div className="menu">
          <SelectedListItem />
          <Switch>
            <Route path="/apitest/:id" component={GetLog} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
