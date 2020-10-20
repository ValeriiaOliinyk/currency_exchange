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
  return (
    <main>
      <section>
        <h1>Quickly Convert</h1>
        <p>List of available currencies</p>
        <CurrencyList />
      </section>
    </main>
  );
};

export default Home;
