import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  addFavorite,
  deleteFavorite,
  getFavorites,
  getRegularCurrency
} from "../redux/ducks/currency";

// Components
import { MainLoader, Empty } from ".";
import {
  ListFavorite,
  BtnFavorite,
  BtnEmpty,
  ItemFavorites,
  ItemContainer,
  Value
} from "../styles/components";

export const CurrencyList = () => {
  const dispatch = useDispatch();
  const favorites: Array<string> | undefined = useSelector(getFavorites);
  const regularCurrency: Array<string> | undefined = useSelector(
    getRegularCurrency
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
        {favorites && favorites.length > 0 ? (
          favorites.map((item) => (
            <ItemFavorites key={item}>
              <ItemContainer>
                <Value>{item}</Value>
                <BtnFavorite
                  className='Btn'
                  type='button'
                  onClick={() => toggleFavAction(item)}
                />
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
                <BtnEmpty type='button' onClick={() => toggleFavAction(item)} />
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
