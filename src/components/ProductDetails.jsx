import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Spinner, Alert, Button, Card, Badge } from "react-bootstrap";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!res.ok) throw new Error("Product not found");
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const handleBack = () => {
    navigate("/");
  };

  if (loading) return <div className="text-center mt-5"><Spinner animation="border" /></div>;
  if (error) return <Alert variant="danger" className="mt-5 text-center">{error}</Alert>;

  return (
    <Container className="py-5">
      <Card className="p-4 shadow-lg border-0">
        <Row className="align-items-center">
          <Col md={6} className="mb-4 mb-md-0">
            <img src={product.image} alt={product.title} className="img-fluid rounded shadow" />
          </Col>
          <Col md={6}>
            <h2 className="mb-3">{product.title}</h2>
            <Badge bg="info" className="mb-3 text-uppercase">{product.category}</Badge>
            <p className="text-muted mb-3">{product.description}</p>
            <h4 className="text-success mb-4">${product.price.toFixed(2)}</h4>
            {product.rating && (
            <div className="mb-3">
                <strong>Rating:</strong> {product.rating.rate} ⭐ ({product.rating.count} reviews)
            </div>
            )}
            <div className="d-flex gap-2">
              <Button variant="secondary" onClick={handleBack}>Back to Shop</Button>
              <Button variant="primary" onClick={handleAddToCart} disabled={addedToCart}>
                {addedToCart ? "Added!" : "Add to Cart"}
              </Button>
            </div>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default ProductDetails;