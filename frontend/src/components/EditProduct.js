import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

const EDIT_PRODUCT = gql`
  mutation EditProduct($id: String!, $name: String, $description: String) {
    updateProduct(id: $id, name: $name, description: $description) {
      productId
      name
      description
    }
  }
`;

const EditProduct = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [updateProduct] = useMutation(EDIT_PRODUCT);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateProduct({ variables: { id, name, description } });
    setId('');
    setName('');
    setDescription('');
  };

  return (
    <div>
      <h2>Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <input
          type="text"
          placeholder="New Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="New Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditProduct;
