import styled from "styled-components";

import InputMask from "react-input-mask";
import MaskedInput from "react-text-mask";

export const Input = styled(InputMask)`
  width: 500px;
  height: 25px;

  margin-bottom: 20px;
`;

export const InputCurrency = styled(MaskedInput)`
  width: 500px;
  height: 25px;

  margin-bottom: 20px;
`;
