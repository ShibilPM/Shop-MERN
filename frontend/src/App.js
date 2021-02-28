import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/header/Header.component";
import Footer from "./components/footer/Footer.component";
import HomePage from "./pages/homepage/HomePage.component";
import ProductPage from "./pages/productpage/ProductPage.component";
import CartPage from "./pages/cartpage/CartPage.component";
import LoginPage from "./pages/loginPage/LoginPage.component";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/login" component={LoginPage} />
          <Route path="/product/:id" component={ProductPage} />
          <Route path="/cart/:id?" component={CartPage} />
          <Route path="/" component={HomePage} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
