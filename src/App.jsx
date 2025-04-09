// App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import Navigation from "./components/Navigation";

const HomePage = () => (
  <>
    <Hero />
    <About />
    <ProductList />
  </>
);

function App() {
  return (
    <BrowserRouter basename="/Module3-REACT-Application-Development/">
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
