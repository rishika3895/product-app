import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

const DELETE_PRODUCT = gql`
  mutation DeleteProduct($id: String!) {
    deleteProduct(id: $id)
  }
`;

const DeleteProduct = () => {
  const [id, setId] = useState('');
  const [deleteProduct] = useMutation(DELETE_PRODUCT);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await deleteProduct({ variables: { id } });
    setId('');
  };

  return (
    <div>
      <h2>Delete Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <button type="submit">Delete</button>
      </form>
    </div>
  );
};

export default DeleteProduct;

