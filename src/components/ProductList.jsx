import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center mt-5"><Spinner animation="border" /></div>;
  }

  return (
    <section id="products" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Our Products</h2>
        <Row>
          {products.map(product => (
            <Col md={4} className="mb-4" key={product.id}>
              <Card className="h-100 product-card">
                <Card.Img variant="top" src={product.image} style={{ height: "200px", objectFit: "contain" }} />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text className="text-success">${product.price.toFixed(2)}</Card.Text>
                  <Button
                    as={Link}
                    to={`/product/${product.id}`}
                    variant="primary"
                    className="mt-auto"
                  >
                    View Product
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ProductList;
