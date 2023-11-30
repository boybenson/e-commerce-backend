import { Op } from "sequelize";
import slugify from "slugify";
import Product from "../../models/Product.js";

export const getProduct = async (payload: any): Promise<any> => {
  const { slug, id } = payload.content;
  const product = await Product.findOne({
    where: {
      [Op.or]: [{ slug }, { id }],
    },
  });
  return product.dataValues;
};

export const getProducts = async (payload: any): Promise<any> => {
  const products = await Product.findAll({ raw: true });
  return products;
};

export const createProduct = async (payload: any): Promise<any> => {
  const args = payload.content;

  const slug = await slugify(args.name, {
    lower: true,
    strict: true,
  });
  const newProduct = await Product.create({ ...args, slug });

  return newProduct.dataValues;
};

export const deleteProduct = async (payload: any): Promise<any> => {
  const { id } = payload.content;

  const deletedProduct = await Product.destroy({
    where: {
      id,
    },
  });

  console.log("deleted", deletedProduct);

  return deletedProduct === 0 ? false : true;
};
