import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./Screens/ShopPage";
import Homepage from "./Screens/Homepage";
import Header from "./Components/Header";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
};

export default App;
