import React from "react";
import { Container } from "react-bootstrap";

import Header from "./components/header/Header.component";
import Footer from "./components/footer/Footer.component";

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <h1>Hello</h1>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
