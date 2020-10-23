export const EXCHANGE_RATE = "EXCHANGE_RATE";

export function addExchangeRate(rate) {
  return {
    type: EXCHANGE_RATE,
    payload: rate,
  };
}

export const exchangeRateReducer = (state = 0, action) => {
  switch (action.type) {
    case EXCHANGE_RATE:
      return action.payload;
    default:
      return state;
  }
};
