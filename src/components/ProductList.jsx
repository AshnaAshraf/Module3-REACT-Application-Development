// components/ProductList.jsx
import React, { useEffect, useState } from "react";
import { Row, Col, Card, Button, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  if (loading) return <div className="text-center mt-5"><Spinner animation="border" /></div>;

  return (
    <section id="products" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Our Products</h2>
        <Row>
          {products.map((product) => (
            <Col md={4} className="mb-4" key={product.id}>
              <Card className="product-card p-3 h-100">
                <Card.Img
                  variant="top"
                  src={product.image}
                  style={{ height: "200px", objectFit: "contain" }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text className="text-success fw-bold">${product.price.toFixed(2)}</Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => navigate(`/product/${product.id}`)}
                    className="mt-auto"
                  >
                    View Product
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default ProductList;
