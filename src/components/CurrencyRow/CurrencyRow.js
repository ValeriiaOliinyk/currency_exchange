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
import { Formik } from "formik";
import { validationSchema } from "../../helpers/validation";

// Components
import {
  FormBox,
  Option,
  FormEqually,
  FormCurrency,
  FormControl,
  FormSelect,
  ErrorMessage,
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

  return (
    <Container>
      <Formik
        enableReinitialize={true}
        initialValues={{
          fromAmount: amountInFromCurrency
            ? amount
            : (amount / exchangeRate).toFixed(1),
          toAmount: amountInFromCurrency
            ? (amount * exchangeRate).toFixed(1)
            : amount,
        }}
        validationSchema={validationSchema}
      >
        {({ values, errors, touched }) => (
          <FormCurrency>
            <FormBox>
              <FormControl
                type="number"
                name="fromAmount"
                value={values.fromAmount}
                onChange={(e) => {
                  setAmount(e.target.value);
                  setAmountInFromCurrency(true);
                }}
              />
              <FormSelect
                as="select"
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
              >
                {currency &&
                  currency.map((item) => (
                    <Option key={item} value={item}>
                      {item}
                    </Option>
                  ))}
              </FormSelect>
            </FormBox>
            {errors.fromAmount && touched.fromAmount ? (
              <ErrorMessage>{errors.fromAmount}</ErrorMessage>
            ) : (
              <ErrorMessage transparent>Transparent</ErrorMessage>
            )}
            <FormEqually></FormEqually>
            <FormBox>
              <FormControl
                type="number"
                name="toAmount"
                value={values.toAmount}
                onChange={(e) => {
                  setAmount(e.target.value);
                  setAmountInFromCurrency(false);
                }}
              />

              <FormSelect
                as="select"
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
              >
                {currency &&
                  currency.map((item) => (
                    <Option key={item} value={item}>
                      {item}
                    </Option>
                  ))}
              </FormSelect>
            </FormBox>
            {errors.toAmount && touched.toAmount ? (
              <ErrorMessage>{errors.toAmount}</ErrorMessage>
            ) : (
              <ErrorMessage transparent>Transparent</ErrorMessage>
            )}
          </FormCurrency>
        )}
      </Formik>
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
