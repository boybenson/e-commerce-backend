import { DataTypes, Model, Optional } from "sequelize";
import { sequelizeConnection } from "./init.js";

interface UserAttributes {
  id: number;
  name: string;
  phone: string;
  password: string;
  email?: string;
  role: string;
  createdAt?: Date;
  updatedAt?: Date;
}
export interface IngredientInput extends Optional<UserAttributes, "id"> {}
export interface IngredientOuput extends Required<UserAttributes> {}
class User
  extends Model<UserAttributes, IngredientInput>
  implements UserAttributes
{
  public id!: number;
  public name!: string;
  public password!: string;
  public phone!: string;
  public email: string;
  public role: string;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
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
    password: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "customer",
    },
  },
  {
    timestamps: true,
    sequelize: sequelizeConnection,
    tableName: "users",
  }
);

export default User;
