import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  getFavorites,
  getRegularCurrency,
  getNumberOfFavorites,
} from "../../redux/currency/currency-selectors";
import {
  addFavorite,
  deleteFavorite,
} from "../../redux/currency/currency-reducers";

// Components
import MainLoader from "../MainLoader/MainLoader";
import Empty from "../Empty/Empty";
import ListFavorite from "../styled/ListFavorite";
import BtnFavorite from "../styled/BtnFavorite";
import BtnEmpty from "../styled/BtnEmpty";
import ItemFavorites from "../styled/ItemFavorites";

const CurrencyList = () => {
  const dispatch = useDispatch();
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
    <>
      <ListFavorite>
        {numberOfFavorites > 0 ? (
          favorites.map((item) => (
            <ItemFavorites key={item}>
              <>
                <p>{item}</p>
                <BtnFavorite
                  type="button"
                  onClick={() => toggleFavAction(item)}
                ></BtnFavorite>
              </>
            </ItemFavorites>
          ))
        ) : (
          <Empty />
        )}
      </ListFavorite>
      <ListFavorite>
        {regularCurrency ? (
          regularCurrency.map((item) => (
            <ItemFavorites key={item}>
              <>
                <p>{item}</p>
                <BtnEmpty
                  type="button"
                  onClick={() => toggleFavAction(item)}
                ></BtnEmpty>
              </>
            </ItemFavorites>
          ))
        ) : (
          <MainLoader />
        )}
      </ListFavorite>
    </>
  );
};

export default CurrencyList;
