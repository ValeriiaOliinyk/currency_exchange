import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  getCurrencyArray,
  getFromCurrency,
  getToCurrency,
  getExchangeRate,
  getAvailableCurrencies,
} from "../../redux/currency/currency-selectors";
import { useDispatch } from "react-redux";
import { loadData } from "../../redux/currency/currency-reducers";

export default function CurrencyRow() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadData());
  }, [dispatch]);

  const currency = useSelector(getCurrencyArray);
  const selectedFromCurrency = useSelector(getFromCurrency);
  const selectedToCurrency = useSelector(getToCurrency);
  const selectedExchangeRate = useSelector(getExchangeRate);
  const availableCurrencies = useSelector(getAvailableCurrencies);
  const [fromCurrency, setFromCurrency] = useState(selectedFromCurrency);
  const [toCurrency, setToCurrency] = useState(selectedToCurrency);
  const [exchangeRate, setExchangeRate] = useState(121);
  const [amount, setAmount] = useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);

  // if (fromCurrency !== selectedFromCurrency) {
  //   const newExchangeRate = availableCurrencies.find((item) =>
  //     item.includes(fromCurrency)
  //   );

  //   if (newExchangeRate) {
  //     setExchangeRate(newExchangeRate[1]);
  //   }
  // }

  let fromAmount = null;
  let toAmount = null;

  if (amountInFromCurrency && exchangeRate) {
    fromAmount = amount;
    toAmount = amount * exchangeRate;
  }

  if (!amountInFromCurrency && exchangeRate) {
    fromAmount = amount;
    toAmount = amount / exchangeRate;
  }

  const handleFromAmountChange = (e) => {
    setAmount(e.target.value);
    setAmountInFromCurrency(true);
  };

  const handleToAmountChange = (e) => {
    setAmount(e.target.value);
    setAmountInFromCurrency(false);
  };

  return (
    <div>
      <input
        type="number"
        value={fromAmount}
        onChange={handleFromAmountChange}
      />
      <select
        value={fromCurrency}
        onChange={(e) => setFromCurrency(e.target.value)}
      >
        {currency &&
          currency.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
      </select>
      <div>=</div>
      <input type="number" value={toAmount} onChange={handleToAmountChange} />
      <select
        value={toCurrency}
        onChange={(e) => setToCurrency(e.target.value)}
      >
        {currency &&
          currency.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
      </select>
    </div>
  );
}
