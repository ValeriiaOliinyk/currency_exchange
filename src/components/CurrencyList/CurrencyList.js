import React from "react";
import { useSelector } from "react-redux";
import { getCurrency } from "../../redux/currency/currency-selectors";

// Components
import MainLoader from "../MainLoader/MainLoader";

const CurrencyList = () => {
  const currency = useSelector(getCurrency);
  console.log(currency);
  return (
    <ul>
      {currency.length > 0 ? (
        currency.map((item) => <li key={item.ccy}>{item.ccy}</li>)
      ) : (
        <MainLoader />
      )}
    </ul>
  );
};

export default CurrencyList;
