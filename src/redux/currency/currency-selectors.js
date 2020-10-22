export const getCurrency = (state) => state.currency.currencyTypes;

export const getCurrencyArray = (state) => {
  const currency = getCurrency(state);
  if (currency.rates && currency.base) {
    return [currency.base, ...Object.keys(currency.rates)];
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
    return Object.keys(currency.rates)[0];
  }
};

export const getFavorites = (state) => state.favorite;
export const getNumberOfFavorites = (state) => state.favorite.length;
export const getRegularCurrency = (state) => {
  const currency = getCurrencyArray(state);
  const favorites = getFavorites(state);
  if (currency) {
    return currency.filter((n) => favorites.indexOf(n) === -1);
  }
};

export const getExchangeRate = (state) => state.rate;
export const getDataUrl = (state) => state.data;
