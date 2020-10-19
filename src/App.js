import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { loadData } from "./redux/currency/currency-reducers";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadData());
  }, [dispatch]);
  return <h1> Currency exchange </h1>;
};

export default App;
