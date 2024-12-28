import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './apollo/client';
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';
import DeleteProduct from './components/DeleteProduct';

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h1>GraphQL Product Management</h1>
        <AddProduct />
        <EditProduct />
        <DeleteProduct />
        <ProductList />
      </div>
    </ApolloProvider>
  );
}

export default App;
