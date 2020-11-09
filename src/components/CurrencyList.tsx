import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";

import {
  addFavorite,
  deleteFavorite,
  getFavorites,
  getRegularCurrency,
  getNumberOfFavorites,
} from "../redux/ducks/currency";

// Components
import { MainLoader, Empty } from ".";
import {
  ListFavorite,
  BtnFavorite,
  BtnEmpty,
  ItemFavorites,
  ItemContainer,
  Value,
} from "../styles/components";

export function CurrencyList() {
  const dispatch = useDispatch();
  const favorites: Array<string> | undefined = useSelector(getFavorites);
  const regularCurrency: Array<string> | undefined = useSelector(
    getRegularCurrency
  );
  const numberOfFavorites: Number | undefined = useSelector(
    getNumberOfFavorites
  );

  const toggleFavAction = (text: string) => {
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
                  className="Btn"
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
}

CurrencyList.defaultProps = {
  numberOfFavorites: 0,
  favorites: [],
};

CurrencyList.propTypes = {
  numberOfFavorites: PropTypes.number,
  favorites: PropTypes.arrayOf(PropTypes.string),
  regularCurrency: PropTypes.arrayOf(PropTypes.string),
};
