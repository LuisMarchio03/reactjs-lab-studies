import { useState } from "react";
import { InputMaskCurrency } from "./components/inputMask/InputMaskCurrency";
import { InputMaskPhone } from "./components/inputMask/InputMaskPhone";
import { InputMaskCep } from "./components/inputMask/InputMaskCep";
import { InputMaskCnpj } from "./components/inputMask/InputMaskCnpj";

import { Container } from "./styles/styles";

function App() {
  const [money, setMoney] = useState("");

  console.log(money);

  //.replace(/[^0-9]/g, "")
  //Remover todos os caracteres que não forem números

  return (
    <Container>
      <InputMaskCurrency
        value={money}
        onChange={(event) => setMoney(event.target.value)}
      />
      <InputMaskPhone />
      <InputMaskCep />
      <InputMaskCnpj />
    </Container>
  );
}

export default App;
