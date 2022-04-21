import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import FormSearch from "../components/FormSearch";
import Footer from "../components/Footer";
import { getCarList } from "../stores/actions/carAction";

function CariMobil() {
  const { getListCarResult } = useSelector((state) => state.carReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCarList());
  }, [dispatch]);
  console.log(getListCarResult);

  return (
    <div>
      <Navbar />
      <Jumbotron />
      <FormSearch show="true" cari="false" />
      <Footer />
    </div>
  );
}
export default CariMobil;
