import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

const ADD_PRODUCT = gql`
  mutation AddProduct($productId: String!, $name: String!, $description: String!) {
    createProduct(productId: $productId, name: $name, description: $description) {
      productId
      name
      description
    }
  }
`;

const AddProduct = () => {
  const [productId, setProductId] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [createProduct] = useMutation(ADD_PRODUCT);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createProduct({ variables: { productId, name, description } });
    setProductId('');
    setName('');
    setDescription('');
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product ID"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
        />
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddProduct;
