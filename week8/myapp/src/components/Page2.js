import React from 'react';
import { Button, Card } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Page2.css';

const Page2 = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const product = state?.product;

  const handleConfirm = async () => {
    if (product) {
        await axios.post('https://dummyjson.com/products/add', product);
        alert('Product added successfully!');
        navigate('/');
      }
  };

  if (!product) {
    return <div>No product details available</div>;
  }

  return (
    <div className="confirmation-page">
      <Card className="product-details-card">
        <h2>Confirm Product Details</h2>
        <p><strong>Title:</strong> {product.title}</p>
        <p><strong>Price:</strong> ${product.price}</p>
        <p><strong>Description:</strong> {product.description || 'No description provided'}</p>
        <Button type="primary" onClick={handleConfirm} style={{ marginTop: '20px' }}>
          Confirm
        </Button>
      </Card>
    </div>
  );
};

export default Page2;