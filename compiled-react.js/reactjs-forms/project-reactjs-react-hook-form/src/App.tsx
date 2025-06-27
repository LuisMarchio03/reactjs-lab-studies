import React, { useState } from "react";

import { Main } from "./components/Main";
import { FormNew } from "./components/FormNew";

function App() {
  return (
    <div className="App">
      <Main>
        <FormNew />
      </Main>
    </div>
  );
}

export default App;
