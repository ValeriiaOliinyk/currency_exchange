import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadData } from "../../redux/currency/currency-reducers";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadData());
  }, [dispatch]);
  return <h1>Home</h1>;
};

export default Home;
