import React from "react";
import PropTypes from "prop-types";

import { useSelector, useDispatch } from "react-redux";
import {
  getFavorites,
  getRegularCurrency,
  getNumberOfFavorites,
} from "../../redux/currency/currency-selectors";
import {
  addFavorite,
  deleteFavorite,
} from "../../redux/currency/favorite-reducer";

// Components
import MainLoader from "../MainLoader/MainLoader";
import Empty from "../Empty/Empty";
import ListFavorite from "../styled/ListFavorite";
import BtnFavorite from "../styled/BtnFavorite";
import BtnEmpty from "../styled/BtnEmpty";
import ItemFavorites from "../styled/ItemFavorites";
import ItemContainer from "../styled/ItemContainer";
import Value from "../styled/Value";

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
      <ListFavorite favorite>
        {numberOfFavorites > 0 ? (
          favorites.map((item) => (
            <ItemFavorites key={item}>
              <ItemContainer>
                <Value>{item}</Value>
                <BtnFavorite
                  type="button"
                  onClick={() => toggleFavAction(item)}
                ></BtnFavorite>
              </ItemContainer>
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
              <ItemContainer>
                <Value>{item}</Value>
                <BtnEmpty
                  type="button"
                  onClick={() => toggleFavAction(item)}
                ></BtnEmpty>
              </ItemContainer>
            </ItemFavorites>
          ))
        ) : (
          <MainLoader />
        )}
      </ListFavorite>
    </>
  );
};

CurrencyList.defaultProps = {
  numberOfFavorites: 0,
  favorites: [],
};

CurrencyList.propTypes = {
  numberOfFavorites: PropTypes.number,
  favorites: PropTypes.arrayOf(PropTypes.string),
  regularCurrency: PropTypes.arrayOf(PropTypes.string),
};

export default CurrencyList;
