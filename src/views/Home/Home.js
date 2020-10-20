import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadData } from "../../redux/currency/currency-reducers";

// Components
import CurrencyList from "../../components/CurrencyList/CurrencyList";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadData());
  }, [dispatch]);
  return <CurrencyList />;
};

export default Home;
