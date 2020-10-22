import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getCurrencyArray,
  getFromCurrency,
  getToCurrency,
  getExchangeRate,
} from "../../redux/currency/currency-selectors";
import {
  loadData,
  loadDataUrl,
  updateData,
  addExchangeRate,
} from "../../redux/currency/currency-reducers";
import axios from "axios";

// Styles
import { Form, Container } from "react-bootstrap";
import "./CurrencyRow.scss";

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
  const [fromCurrency, setFromCurrency] = useState(selectedFromCurrency);
  const [toCurrency, setToCurrency] = useState(selectedToCurrency);
  const [exchangeRate, setExchangeRate] = useState(0);
  const [amount, setAmount] = useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);

  useEffect(() => {
    setExchangeRate(selectedExchangeRate);
  }, [selectedExchangeRate]);

  let fromAmount = null;
  let toAmount = null;

  if (amountInFromCurrency) {
    fromAmount = amount;
    toAmount = (amount * exchangeRate).toFixed(1);
  } else {
    toAmount = amount;
    fromAmount = (amount / exchangeRate).toFixed(1);
  }

  const handleFromAmountChange = (e) => {
    setAmount(e.target.value);
    setAmountInFromCurrency(true);
  };

  const handleToAmountChange = (e) => {
    setAmount(e.target.value);
    setAmountInFromCurrency(false);
  };

  useEffect(() => {
    if (fromCurrency && toCurrency) {
      axios(`${BASE_URL}?base=${fromCurrency}&symbols=${toCurrency}`)
        .then(({ data }) => dispatch(addExchangeRate(data.rates[toCurrency])))
        .catch((error) => console.log(error));
    }
    dispatch(updateData(`?base=${fromCurrency}&symbols=${toCurrency}`));
    dispatch(loadDataUrl());
  }, [dispatch, fromCurrency, toCurrency]);

  return (
    <Container>
      <Form className="Form">
        <div className="Form__box">
          <Form.Control
            type="number"
            value={fromAmount}
            onChange={handleFromAmountChange}
            className="Form__input"
          />
          <Form.Control
            as="select"
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            className="Form__select"
          >
            {currency &&
              currency.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
          </Form.Control>
        </div>
        <div className="Form__equally">=</div>
        <div className="Form__box">
          <Form.Control
            type="number"
            value={toAmount}
            onChange={handleToAmountChange}
            className="Form__input"
          />
          <Form.Control
            as="select"
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            className="Form__select"
          >
            {currency &&
              currency.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
          </Form.Control>
        </div>
      </Form>
    </Container>
  );
}
