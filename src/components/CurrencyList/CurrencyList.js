import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getCurrencyArray,
  getFavorites,
  getNumberOfFavorites,
} from "../../redux/currency/currency-selectors";
import {
  addFavorite,
  deleteFavorite,
} from "../../redux/currency/currency-reducers";

// Components
import MainLoader from "../MainLoader/MainLoader";

const CurrencyList = () => {
  const dispatch = useDispatch(addFavorite);
  const currency = useSelector(getCurrencyArray);
  const favorites = useSelector(getFavorites);
  const numberOfFavorites = useSelector(getNumberOfFavorites);

  const toggleFavAction = (text) => {
    if (!favorites.includes(text)) {
      dispatch(addFavorite(text));
    }

    if (favorites.includes(text)) {
      dispatch(deleteFavorite(text));
    }
  };

  console.log(favorites);

  return (
    <ul>
      <div>Favorite currencies: {numberOfFavorites}</div>
      {currency ? (
        currency.map((item) => (
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
