import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  loadData,
  addExchangeRate,
  getCurrencyArray,
  getFromCurrency,
  getToCurrency,
  getExchangeRate,
  // updateData,
  // getUpdatedData,
} from "../../redux/ducks/currency";
import PropTypes from "prop-types";
import axios from "axios";

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

const BASE_URL = "https://api.exchangeratesapi.io/latest";

export function CurrencyRow() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadData());
  }, [dispatch]);

  const currency = useSelector(getCurrencyArray);
  const selectedFromCurrency = useSelector(getFromCurrency);
  const selectedToCurrency = useSelector(getToCurrency);
  const selectedExchangeRate = useSelector(getExchangeRate);
  // const updatedData = useSelector(getUpdatedData);
  const [fromCurrency, setFromCurrency] = useState(selectedFromCurrency);
  const [toCurrency, setToCurrency] = useState(selectedToCurrency);
  const [exchangeRate, setExchangeRate] = useState(selectedExchangeRate);
  const [amount, setAmount] = useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);

  useEffect(() => {
    setToCurrency(selectedToCurrency);
  }, [selectedToCurrency]);

  useEffect(() => {
    setExchangeRate(selectedExchangeRate);
  }, [selectedExchangeRate]);

  useEffect(() => {
    // dispatch(updateData(fromCurrency, toCurrency));
    if (fromCurrency && toCurrency) {
      axios(`${BASE_URL}?base=${fromCurrency}&symbols=${toCurrency}`)
        .then(({ data }) => dispatch(addExchangeRate(data.rates[toCurrency])))
        .catch((error) => console.log(error));
      // dispatch(addExchangeRate(updatedData.rates[toCurrency]));
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
