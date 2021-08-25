import React, { Fragment } from "react";

import Header from "../UI/Header/Header";
import Footer from "../UI/Footer/Footer";
import Sections from "../sections/Sections";
import ScrollButton from "../sections/ScrollButton/ScrollButton";
const Layout = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <Sections />
      </main>
      <ScrollButton />
      <Footer />
    </Fragment>
  );
};

export default Layout;
