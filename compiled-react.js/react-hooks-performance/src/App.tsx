import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import PokemonRequet from "./pages/PokemonRequet";
import Performance from "./pages/Performance";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={PokemonRequet} />
        <Route path="/performance" exact component={Performance} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
