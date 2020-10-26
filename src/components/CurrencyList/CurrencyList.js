import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import {
  addFavorite,
  deleteFavorite,
  getFavorites,
  getRegularCurrency,
  getNumberOfFavorites,
} from "../../redux/ducks/currency";

// Components
import { MainLoader, Empty } from "../../components";
import {
  ListFavorite,
  BtnFavorite,
  BtnEmpty,
  ItemFavorites,
  ItemContainer,
  Value,
} from "../../styled";

export function CurrencyList() {
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
