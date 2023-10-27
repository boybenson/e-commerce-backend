import { productResolver } from "./product.resolver.js";
import { userResolver } from "./user.resolver.js";

const resolverMap = [userResolver, productResolver];

export default resolverMap;
