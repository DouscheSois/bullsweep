import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Heading from "./components/Heading";
import Footer from "./components/Footer";
import FrontPage from "./components/FrontPage";

import { Container } from "react-bootstrap";

const App = () => {
  return (
    <Router>
      <Heading />
      <main className="py-3">
        <Container>
          <Route path="/" component={FrontPage} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
