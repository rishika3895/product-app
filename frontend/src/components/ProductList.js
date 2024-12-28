import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_PRODUCTS = gql`
  query GetProducts($offset: Int, $limit: Int) {
    products(offset: $offset, limit: $limit) {
      productId
      name
      description
    }
    totalCount
  }
`;

const ProductList = () => {
  const [page, setPage] = useState(1);
  const limit = 10; // Number of products per page

  const { loading, error, data } = useQuery(GET_PRODUCTS, {
    variables: { offset: (page - 1) * limit, limit },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const totalPages = Math.ceil(data.totalCount / limit);

  const handleNext = () => {
    if (page < totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevious = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div>
      <h2>Product List</h2>
      <table border="1" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ padding: '8px' }}>Product ID</th>
            <th style={{ padding: '8px' }}>Name</th>
            <th style={{ padding: '8px' }}>Description</th>
          </tr>
        </thead>
        <tbody>
          {data.products.map((product, index) => (
            <tr key={index}>
              <td style={{ padding: '8px', textAlign: 'center' }}>{product.productId}</td>
              <td style={{ padding: '8px', textAlign: 'center' }}>{product.name}</td>
              <td style={{ padding: '8px', textAlign: 'center' }}>{product.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ marginTop: '16px', textAlign: 'center' }}>
        <button onClick={handlePrevious} disabled={page === 1} style={{ marginRight: '8px' }}>
          Previous
        </button>
        <span>Page {page} of {totalPages}</span>
        <button onClick={handleNext} disabled={page === totalPages} style={{ marginLeft: '8px' }}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductList;
