import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Formik } from "formik";

import {
  loadData,
  getCurrencyArray,
  getFromCurrency,
  getToCurrency,
  getExchangeRate,
  updateData,
  getUpdatedData,
  addExchangeRate
} from "../redux/ducks/currency";

import { validationSchema } from "../helpers/validation";
import { InitialValues, CurrencyTypes } from "../helpers/interfaces";

// Components
import {
  FormBox,
  Option,
  FormEqually,
  FormCurrency,
  FormControlComponent,
  ErrorMessage,
  SelectField,
  FormControlBox
} from "../styles/components";

// Styles
import { Container } from "react-bootstrap";

export const CurrencyRow = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadData());
  }, [dispatch]);

  const currency: Array<string> | undefined = useSelector(getCurrencyArray);
  const selectedFromCurrency: string | undefined = useSelector(getFromCurrency);
  const selectedToCurrency: string | undefined = useSelector(getToCurrency);
  const selectedExchangeRate: number | undefined = useSelector(getExchangeRate);
  const updatedData: CurrencyTypes = useSelector(getUpdatedData);

  const [fromCurrency, setFromCurrency] = useState<string | undefined>(
    selectedFromCurrency
  );
  const [toCurrency, setToCurrency] = useState<string | undefined>(
    selectedToCurrency
  );
  const [exchangeRate, setExchangeRate] = useState<number>(
    selectedExchangeRate
  );
  const [amount, setAmount] = useState<number>(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState<boolean>(
    true
  );

  const firstExchange = useRef<number>(exchangeRate);

  useEffect(() => {
    setToCurrency(selectedToCurrency);
  }, [selectedToCurrency]);

  useEffect(() => {
    if (updatedData.rates && toCurrency) {
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

  const getInitialValues = (): InitialValues => {
    return {
      fromAmount: amountInFromCurrency
        ? amount
        : (amount / exchangeRate).toFixed(1),
      toAmount: amountInFromCurrency
        ? (amount * exchangeRate).toFixed(1)
        : amount
    };
  };

  return (
    <Container>
      <Formik
        enableReinitialize={true}
        initialValues={getInitialValues()}
        validationSchema={validationSchema}
        onSubmit={() => {}}
      >
        {({ values, errors, touched }) => (
          <FormCurrency>
            <FormBox>
              <FormControlComponent
                type='number'
                name='fromAmount'
                value={values.fromAmount}
                onChange={(e: {
                  target: { value: React.SetStateAction<number> };
                }) => {
                  setAmount(e.target.value);
                  setAmountInFromCurrency(true);
                }}
              />
              <FormControlBox variant='filled'>
                <SelectField
                  native
                  labelId='demo-simple-select-outlined-label'
                  id='demo-simple-select-outlined'
                  value={fromCurrency}
                  onChange={(e: React.ChangeEvent<{ value: unknown }>) =>
                    setFromCurrency(e.target.value as string)
                  }
                >
                  {currency &&
                    currency.map((item) => (
                      <Option key={item} value={item}>
                        {item}
                      </Option>
                    ))}
                </SelectField>
              </FormControlBox>
            </FormBox>
            {errors.fromAmount && touched.fromAmount ? (
              <ErrorMessage>{errors.fromAmount}</ErrorMessage>
            ) : (
              <ErrorMessage transparent>Transparent</ErrorMessage>
            )}
            <FormEqually />
            <FormBox>
              <FormControlComponent
                type='number'
                name='toAmount'
                value={values.toAmount}
                onChange={(e: {
                  target: { value: React.SetStateAction<number> };
                }) => {
                  setAmount(e.target.value);
                  setAmountInFromCurrency(false);
                }}
              />
              <FormControlBox variant='filled'>
                <SelectField
                  native
                  value={toCurrency}
                  onChange={(e: React.ChangeEvent<{ value: unknown }>) =>
                    setToCurrency(e.target.value as string)
                  }
                >
                  {currency &&
                    currency.map((item) => (
                      <Option key={item} value={item}>
                        {item}
                      </Option>
                    ))}
                </SelectField>
              </FormControlBox>
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
};
