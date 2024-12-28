import { buildSchema } from 'graphql';

const productSchema = buildSchema(`
type Query {
    product(id: String!): Product
    products(limit: Int, offset: Int): [Product]
    totalCount: Int
}
type Mutation {
    createProduct(productId: String!, name: String!, description: String!): Product
    updateProduct(id: String!, name: String, description: String): Product
    deleteProduct(id: String!): String
    deleteAllProducts: String

}
type Product {
    id: ID!
    productId: String!
    name: String!
    description: String!
}

`);

export default productSchema;
