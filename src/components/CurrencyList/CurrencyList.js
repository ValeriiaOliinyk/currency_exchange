import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getFavorites,
  getNumberOfFavorites,
  getRegularCurrency,
} from "../../redux/currency/currency-selectors";
import {
  addFavorite,
  deleteFavorite,
} from "../../redux/currency/currency-reducers";

// Components
import MainLoader from "../MainLoader/MainLoader";

const CurrencyList = () => {
  const dispatch = useDispatch(addFavorite);
  const favorites = useSelector(getFavorites);
  const regularCurrency = useSelector(getRegularCurrency);
  const numberOfFavorites = useSelector(getNumberOfFavorites);

  const toggleFavAction = (text) => {
    if (!favorites.includes(text)) {
      dispatch(addFavorite(text));
    }

    if (favorites.includes(text)) {
      dispatch(deleteFavorite(text));
    }
  };

  return (
    <ul>
      <div>Favorite currencies: {numberOfFavorites}</div>
      {favorites ? (
        favorites.map((item) => (
          <li key={item}>
            <>
              <p>{item}</p>
              <button type="button" onClick={() => toggleFavAction(item)}>
                Favorite
              </button>
            </>
          </li>
        ))
      ) : (
        <MainLoader />
      )}
      {regularCurrency ? (
        regularCurrency.map((item) => (
          <li key={item}>
            <>
              <p>{item}</p>
              <button type="button" onClick={() => toggleFavAction(item)}>
                Favorite
              </button>
            </>
          </li>
        ))
      ) : (
        <MainLoader />
      )}
    </ul>
  );
};

export default CurrencyList;
