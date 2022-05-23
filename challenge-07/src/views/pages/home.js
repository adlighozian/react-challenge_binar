import React from "react";

import NavigationBar from "../components/navbarLanding";
import HomeLayout from "../layouts/homeLayout";
import FooterBar from "../components/footerLanding";

function Home() {
  return (
    <section>
      <NavigationBar />
      <HomeLayout />
      <FooterBar />
    </section>
  );
}

export default Home;
