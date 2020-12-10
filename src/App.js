import React from "react";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./Screens/ShopPage";
import Homepage from "./Screens/Homepage";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
};

export default App;
