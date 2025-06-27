import React from "react";
import PropTypes from "prop-types";
import createNumberMask from "text-mask-addons/dist/createNumberMask";
import { InputCurrency } from "./styles";

const defaultMaskOptions = {
  prefix: "R$ ",
  suffix: "",
  includeThousandsSeparator: true,
  thousandsSeparatorSymbol: ".",
  allowDecimal: true,
  decimalSymbol: ",",
  decimalLimit: 2, // how many digits allowed after the decimal
  integerLimit: 13, // limit length of integer numbers
  allowNegative: false,
  allowLeadingZeroes: false,
};

export const InputMaskCurrency = ({ maskOptions, ...inputProps }) => {
  const currencyMask = createNumberMask({
    ...defaultMaskOptions,
    ...maskOptions,
  });

  return <InputCurrency mask={currencyMask} {...inputProps} />;
};

InputMaskCurrency.defaultProps = {
  inputMode: "numeric",
  maskOptions: {},
};

InputMaskCurrency.propTypes = {
  inputmode: PropTypes.string,
  maskOptions: PropTypes.shape({
    prefix: PropTypes.string,
    suffix: PropTypes.string,
    includeThousandsSeparator: PropTypes.boolean,
    thousandsSeparatorSymbol: PropTypes.string,
    allowDecimal: PropTypes.boolean,
    decimalSymbol: PropTypes.string,
    decimalLimit: PropTypes.string,
    requireDecimal: PropTypes.boolean,
    allowNegative: PropTypes.boolean,
    allowLeadingZeroes: PropTypes.boolean,
    integerLimit: PropTypes.number,
  }),
};
