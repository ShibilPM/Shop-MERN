import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/header/Header.component";
import Footer from "./components/footer/Footer.component";
import HomePage from "./pages/homepage/HomePage.component";
import ProductPage from "./pages/productpage/ProductPage.component";
import CartPage from "./pages/cartpage/CartPage.component";
import LoginPage from "./pages/loginPage/LoginPage.component";
import RegisterPage from "./pages/registerPage/RegisterPage.component";
import ProfilePage from "./pages/profilePage/ProfilePage.component";
import ShippingPage from "./pages/shippingPage/ShippingPage.component";
import PaymentPage from "./pages/paymentPage/PaymentPage.component";
import PlaceOrderPage from "./pages/placeOrderPage/PlaceOrderPage.component";
import OrderPage from "./pages/orderPage/OrderPage.component";
import UserListPage from "./pages/userListPage/UserListPage.component";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/orders/:id" component={OrderPage} />
          <Route path="/placeorder" component={PlaceOrderPage} />
          <Route path="/payment" component={PaymentPage} />
          <Route path="/shipping" component={ShippingPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/product/:id" component={ProductPage} />
          <Route path="/cart/:id?" component={CartPage} />
          <Route path="/admin/userlist" component={UserListPage} />
          <Route path="/" component={HomePage} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
