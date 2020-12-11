import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./Screens/ShopPage";
import Homepage from "./Screens/Homepage";
import Header from "./Components/Header";
import SignIn from "./Components/SignIn";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignIn} />
      </Switch>
    </div>
  );
};

export default App;
