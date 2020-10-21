import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getCurrencyArray,
  getFromCurrency,
  getToCurrency,
  getExchangeRate,
} from "../../redux/currency/currency-selectors";
import { loadData } from "../../redux/currency/currency-reducers";
import axios from "axios";

const BASE_URL = "https://api.exchangeratesapi.io/latest";

export default function CurrencyRow() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadData());
  }, [dispatch]);

  const currency = useSelector(getCurrencyArray);
  const selectedFromCurrency = useSelector(getFromCurrency);
  const selectedToCurrency = useSelector(getToCurrency);
  const selectedExchangeRate = useSelector(getExchangeRate);
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [exchangeRate, setExchangeRate] = useState();
  const [amount, setAmount] = useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);

  useEffect(() => {
    if (selectedFromCurrency && selectedToCurrency) {
      setFromCurrency(selectedFromCurrency);
      setToCurrency(selectedToCurrency[0]);
      setExchangeRate(selectedExchangeRate);
    }
  }, [selectedExchangeRate, selectedFromCurrency, selectedToCurrency]);

  let fromAmount = null;
  let toAmount = null;

  if (amountInFromCurrency) {
    fromAmount = amount;
    toAmount = (amount * exchangeRate).toFixed(2);
  } else {
    toAmount = amount;
    fromAmount = (amount / exchangeRate).toFixed(2);
  }

  useEffect(() => {
    if (fromCurrency !== undefined && toCurrency !== undefined) {
      axios(
        `${BASE_URL}?base=${fromCurrency}&symbols=${toCurrency}`
      ).then(({ data }) => setExchangeRate(data.rates[toCurrency]));
    }
  }, [fromCurrency, toCurrency]);

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