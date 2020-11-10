import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { loadData, getFavorites } from '../redux/ducks/currency';

// Components
import { CurrencyList } from '../components';
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
        <TitleHome>List of available currencies</TitleHome>
        <Favorite>{getNumberOfFavorites()}</Favorite>
        <CurrencyList />
      </Container>
    </Main>
  );
}

Home.defaultProps = {
  numberOfFavorites: 0,
};

Home.propTypes = {
  numberOfFavorites: PropTypes.number,
};
