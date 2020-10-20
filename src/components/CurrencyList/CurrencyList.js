import React from "react";
import { useSelector } from "react-redux";
import { getCurrencyArray } from "../../redux/currency/currency-selectors";

// Components
import MainLoader from "../MainLoader/MainLoader";

const CurrencyList = () => {
  const currency = useSelector(getCurrencyArray);
  return (
    <ul>
      {currency ? (
        currency.map((item) => <li key={item}>{item}</li>)
      ) : (
        <MainLoader />
      )}
    </ul>
  );
};

export default CurrencyList;
