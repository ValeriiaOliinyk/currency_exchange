export const getCurrency = (state) => state.currency.currencyTypes;

export const getCurrencyArray = (state) => {
  const currency = getCurrency(state);
  if (currency.rates && currency.base) {
    return [currency.base, ...Object.keys(currency.rates)];
  }
};

export const getAvailableCurrencies = (state) => {
  const currency = getCurrency(state);
  if (currency.rates) {
    return Object.entries(currency.rates);
  }
};

export const getFromCurrency = (state) => {
  const currency = getCurrency(state);
  if (currency.base) {
    return currency.base;
  }
};

export const getToCurrency = (state) => {
  const currency = getCurrency(state);
  if (currency.rates) {
    return [Object.keys(currency.rates)[0]];
  }
};

export const getExchangeRate = (state) => {
  const currency = getCurrency(state);
  const firstCurrency = getToCurrency(state);
  if (currency && firstCurrency) {
    return currency.rates[firstCurrency];
  }
};
