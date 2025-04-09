import React from "react";

const Hero = () => {
  return (
    <section className="hero text-center text-white py-5" style={{ background: "url('images/bg-img.jpeg') no-repeat center center / cover" }}>
      <div className="container">
        <h2 className="display-4 fw-bold">Welcome to CartNest</h2>
        <p className="lead">Discover amazing products at unbeatable prices.</p>
        <a href="#products" className="btn btn-primary btn-lg">Shop Now</a>
      </div>
    </section>
  );
};

export default Hero;