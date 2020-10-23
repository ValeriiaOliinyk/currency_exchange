import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadData } from "../../redux/currency/currency-reducers";
import { getNumberOfFavorites } from "../../redux/currency/currency-selectors";

// Components
import CurrencyList from "../../components/CurrencyList/CurrencyList";
import MainTitle from "../../components/styled/MainTitle";
import Container from "../../components/styled/Container";
import Favorite from "../../components/styled/Favorite";
import TitleHome from "../../components/styled/TitleHome";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadData());
  }, [dispatch]);

  const numberOfFavorites = useSelector(getNumberOfFavorites);
  return (
    <main>
      <Container>
        <MainTitle>Quickly Convert</MainTitle>
        <TitleHome>List of available currencies</TitleHome>
        <Favorite>{numberOfFavorites}</Favorite>
        <CurrencyList />
      </Container>
    </main>
  );
};

export default Home;
