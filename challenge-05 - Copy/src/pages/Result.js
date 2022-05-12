import React from "react";
import { Container, Row, Col } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { getCarList } from "../stores/actions/carAction";
import Navbar from "../components/Navbar";
import FormSearch from "../components/FormSearch";
import Footer from "../components/Footer";
import LayerJumb from "../components/LayerJumb";
import Card from "../components/Card";

function Result() {
  const { getListCarResult } = useSelector((state) => state.carReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCarList());
  }, [dispatch]);
  console.log(getListCarResult);

  return (
    <div>
      <Navbar />
      <LayerJumb />
      <FormSearch show="true" edit="true"></FormSearch>
      <main className="mt-4">
        <Container>
          <Row>
            {getListCarResult.length > 0 &&
              getListCarResult.map((e, key) => {
                return (
                  <Col md="4">
                    <Card key={key} {...e} />
                  </Col>
                );
              })}
          </Row>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default Result;
