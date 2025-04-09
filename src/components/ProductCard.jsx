import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ProductCard = ({ product, onShowModal }) => {
  return (
    <Card className="product-card h-100">
      <Card.Img variant="top" src={product.image} style={{ maxHeight: '200px', objectFit: 'contain' }} />
      <Card.Body className="d-flex flex-column">
        <Card.Title style={{ minHeight: '65px' }}>{product.title}</Card.Title>
        <Card.Text className="text-success">${product.price.toFixed(2)}</Card.Text>
        <Button variant="primary" onClick={() => onShowModal(product)} className="mt-auto">
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
