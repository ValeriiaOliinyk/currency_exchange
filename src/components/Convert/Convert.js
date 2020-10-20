import React from "react";
import CurrencyRow from "../CurrencyRow/CurrencyRow";
import { useSelector } from "react-redux";
import {
  getFromCurrency,
  getToCurrency,
} from "../../redux/currency/currency-selectors";

const Convert = () => {
  return (
    <>
      <h2>Convert</h2>
      <CurrencyRow />
    </>
  );
};

export default Convert;
