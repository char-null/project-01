import React, { Fragment } from 'react';

import Home from './Home/Home';
import About from './About/About';
import Service from './Service/Service';
import Facts from './Facts/Facts';
import Blog from './Blog/Blog';
import Contact from './Contact/Contact';
import MapMarker from './MapMarker/MapMarker';
import Gallerys from './Gallery/Gallerys';
import Writing from './Writing/Writing';

const sections = () => {
  return (
    <Fragment>
      <Home />
      <About />
      <Service />
      <Blog />
      <Gallerys />
      <Writing />
      <Facts />
      <Contact />
      <MapMarker />
    </Fragment>
  );
};

export default sections;
