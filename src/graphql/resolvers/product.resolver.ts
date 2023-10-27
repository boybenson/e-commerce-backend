import { createProduct, getProducts } from "../services/product.service.js";

export const productResolver = {
  Query: {
    getProducts: (_: any, args: any) => {
      return getProducts(args);
    },
  },
  Mutation: {
    createProduct: (_: any, args: any) => {
      return createProduct(args);
    },
  },
};
