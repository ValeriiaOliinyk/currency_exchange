import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadData, getFavorites } from '../redux/ducks/currency';

// Components
import { CurrencyList, Gallery } from '../components';
import {
  MainTitle,
  Container,
  Favorite,
  TitleHome,
  Main,
} from '../styles/components';

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadData());
  }, [dispatch]);

  const favorites: Array<string> | undefined = useSelector(getFavorites);

  const getNumberOfFavorites = () =>
    favorites && favorites.length > 0 ? favorites.length : 0;

  return (
    <Main>
      <Container>
        <MainTitle>Quickly Convert</MainTitle>
        <Gallery />
        <TitleHome>List of available currencies</TitleHome>
        <Favorite>{getNumberOfFavorites()}</Favorite>
        <CurrencyList />
      </Container>
    </Main>
  );
}
