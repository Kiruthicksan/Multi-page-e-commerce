import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../ProductDetail/ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        setProduct(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load Product", err);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [id]);

  if (loading) {
    return (
      <div className="loading-wrapper">
        <div className="spinner"></div>

        <p>Loading Products...</p>
      </div>
    );
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="product-details-container">
      <div className="product-image-section">
        <img src={product.image} alt={product.title} />
      </div>

      <div className="product-info-section">
        <h2>{product.title}</h2>
        <p className="price">₹ {product.price}</p>
        <p className="description">{product.description}</p>
        <p className="category">
          <strong>Category:</strong> {product.category}
        </p>
      </div>
    </div>
  );
};

export default ProductDetail;
