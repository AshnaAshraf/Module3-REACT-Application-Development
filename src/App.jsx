import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import About from "./components/About";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

function App() {
  return (
    <Router>
      <Navigation />
      <Hero />
      <About />
      <ProductList />
      <Footer />
      <Routes>
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}

export default App;