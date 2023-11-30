export const productTypeDefs = `#graphql
  type Product {
    id: ID
    name: String!
    description: String!
    price: Float!
    qtyInStock: Float
    photo: String
    slug: String
  }

  input GetProductsContent{
    id: ID
    name: String
    price: Float
    qtyInStock: Float
    slug: String
  }

  input GetProductContent{
    id:ID
    slug: String
  }

  input ProductCreateContent{
    name: String!
    description: String!
    price: Float!
    photo: String
    qtyInStock: Float
  }

  input DeleteProductContent{
    id: ID
  }

  type Query {
    getProducts(content: GetProductsContent): [Product]
    getProduct(content:GetProductContent): Product
  }

  type Mutation {
    createProduct(content:ProductCreateContent):Product
    deleteProduct(content: DeleteProductContent):Boolean
}
`;
