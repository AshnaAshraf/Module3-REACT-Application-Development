import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => {
        console.log("Fetched Products:", data);
        setProducts(data)
  });
      
  }, []);

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container id="products" className="py-5">
      <h2 className="text-center mb-4">Our Products</h2>

      {/* Search Bar */}
      <Form className="mb-4">
        <Form.Control
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </Form>

      <Row>
        {filteredProducts.map(product => (
          <Col key={product.id} md={4} className="mb-4">
            <Card className="product-card h-100 p-3">
              <Card.Img
                variant="top"
                src={product.image}
                alt={product.title}
                style={{ maxHeight: "200px", objectFit: "contain" }}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="mb-2" style={{ fontSize: "1rem" }}>
                  {product.title}
                </Card.Title>
                <Card.Text className="text-success">${product.price.toFixed(2)}</Card.Text>
                <Link to={`/product/${product.id}`} className="mt-auto btn btn-primary">
                  View Product
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
