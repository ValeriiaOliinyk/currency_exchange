import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { loadData } from "../../redux/currency/fetch-reducer";
import { getNumberOfFavorites } from "../../redux/currency/currency-selectors";

// Components
import CurrencyList from "../../components/CurrencyList/CurrencyList";
import MainTitle from "../../components/styled/MainTitle";
import Container from "../../components/styled/Container";
import Favorite from "../../components/styled/Favorite";
import TitleHome from "../../components/styled/TitleHome";
import Main from "../../components/styled/Main";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadData());
  }, [dispatch]);

  const numberOfFavorites = useSelector(getNumberOfFavorites);
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
};

Home.defaultProps = {
  numberOfFavorites: 0,
};

Home.propTypes = {
  numberOfFavorites: PropTypes.number,
};

export default Home;
