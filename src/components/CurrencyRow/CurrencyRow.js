import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  loadData,
  getCurrencyArray,
  getFromCurrency,
  getToCurrency,
  getExchangeRate,
  updateData,
  getUpdatedData,
  addExchangeRate,
} from "../../redux/ducks/currency";
import PropTypes from "prop-types";

// Components
import {
  FormBox,
  Option,
  FormEqually,
  FormCurrency,
  FormControl,
  FormSelect,
} from "../../styled";

// Styles
import { Container } from "react-bootstrap";

export function CurrencyRow() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadData());
  }, [dispatch]);

  const currency = useSelector(getCurrencyArray);
  const selectedFromCurrency = useSelector(getFromCurrency);
  const selectedToCurrency = useSelector(getToCurrency);
  const selectedExchangeRate = useSelector(getExchangeRate);
  const updatedData = useSelector(getUpdatedData);
  const [fromCurrency, setFromCurrency] = useState(selectedFromCurrency);
  const [toCurrency, setToCurrency] = useState(selectedToCurrency);
  const [exchangeRate, setExchangeRate] = useState(selectedExchangeRate);
  const [amount, setAmount] = useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);
  const firstExchange = useRef(exchangeRate);
  console.log(firstExchange.current);

  useEffect(() => {
    setToCurrency(selectedToCurrency);
  }, [selectedToCurrency]);

  useEffect(() => {
    if (updatedData.rates) {
      setExchangeRate(updatedData.rates[toCurrency]);
    }
  }, [dispatch, toCurrency, updatedData.rates]);

  useEffect(() => {
    dispatch(addExchangeRate(firstExchange.current));
  }, [dispatch]);

  useEffect(() => {
    if (fromCurrency && toCurrency) {
      dispatch(updateData(fromCurrency, toCurrency));
    }
  }, [dispatch, fromCurrency, toCurrency]);

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

  console.log(exchangeRate);
  console.log(updatedData);

  return (
    <Container>
      <FormCurrency>
        <FormBox>
          <FormControl
            type="number"
            value={fromAmount}
            onChange={handleFromAmountChange}
            className="Form__input"
          />
          <FormSelect
            as="select"
            name="from"
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            className="Form__select"
          >
            {currency &&
              currency.map((item) => (
                <Option key={item} value={item}>
                  {item}
                </Option>
              ))}
          </FormSelect>
        </FormBox>
        <FormEqually></FormEqually>
        <FormBox>
          <FormControl
            type="number"
            value={toAmount}
            onChange={handleToAmountChange}
            className="Form__input"
          />
          <FormSelect
            as="select"
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            className="Form__select"
          >
            {currency &&
              currency.map((item) => (
                <Option key={item} value={item}>
                  {item}
                </Option>
              ))}
          </FormSelect>
        </FormBox>
      </FormCurrency>
    </Container>
  );
}

CurrencyRow.defaultProps = {
  currency: [],
  selectedFromCurrency: "",
  selectedToCurrency: "",
  selectedExchangeRate: 0,
};

CurrencyRow.propTypes = {
  currency: PropTypes.arrayOf(PropTypes.string),
  selectedFromCurrency: PropTypes.string,
  selectedToCurrency: PropTypes.string,
  selectedExchangeRate: PropTypes.number,
};
