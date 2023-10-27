import { DataTypes, Model, Optional } from "sequelize";
import { sequelizeConnection } from "./init.js";

interface ProductAttributes {
  id: number;
  name: string;
  description: string;
  price: string;
  photo: string;
  slug: string;
  qtyInStock: number;
  createdAt?: Date;
  updatedAt?: Date;
}
export interface IngredientInput extends Optional<ProductAttributes, "id"> {}
export interface IngredientOuput extends Required<ProductAttributes> {}
class Product
  extends Model<ProductAttributes, IngredientInput>
  implements ProductAttributes
{
  public id!: number;
  public name!: string;
  public description!: string;
  public price: string;
  public photo: string;
  slug: string;
  public qtyInStock: number;
  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    qtyInStock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    slug: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
    sequelize: sequelizeConnection,
    tableName: "products",
  }
);

export default Product;
