import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import { loadData, getNumberOfFavorites } from "../redux/ducks/currency";

// Components
import { CurrencyList } from "../components";
import {
  MainTitle,
  Container,
  Favorite,
  TitleHome,
  Main,
} from "../components/styled";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadData());
  }, [dispatch]);

  const numberOfFavorites: number | undefined = useSelector(
    getNumberOfFavorites
  );

  return (
    <Main>
      <Container>
        <MainTitle>Quickly Convert</MainTitle>
        <TitleHome>List of available currencies</TitleHome>
        <Favorite>{numberOfFavorites}</Favorite>
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
