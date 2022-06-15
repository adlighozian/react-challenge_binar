import React from "react";

import NavigationBar from "../components/navigationBar";
import Menu from "../components/menu";
import Footer from "../components/footer";

import "../../assets/css/home.css";

function Home() {
  return (
    <>
      <NavigationBar />
      <section className="home">
        <Menu />
      </section>
      <Footer />
    </>
  );
}

export default Home;
