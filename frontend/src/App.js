import React from "react";
import { Container } from "react-bootstrap";

import Header from "./components/header/Header.component";
import Footer from "./components/footer/Footer.component";
import HomePage from "./pages/homepage/HomePage.component";

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <HomePage />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
