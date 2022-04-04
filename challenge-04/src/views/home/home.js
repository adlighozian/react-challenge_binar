import Nava from "../partials/navbar";
import Cardo from "./card";
import { Container } from "reactstrap";
import { Fragment, useState, useEffect, Component } from "react";
import axios from "axios";
import qs from "querystring";

const api = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

function Home() {
  const [state, setState] = useState({
    post: [],
  });
  useEffect(() => {
    fetch(api)
      .then((Response) => Response.json())
      .then((result) => {
        setState({ post: result.drinks });
        // console.log(result);
      });
  }, []);

  const card = [
    { id: 1, title: "eat" },
    { id: 2, title: "run" },
    { id: 3, title: "sing" },
  ];

  return (
    <>
      <Fragment>
        <Nava />
        <Container>
          <Cardo dataCard={state} />
        </Container>
      </Fragment>
    </>
  );
}

export default Home;
