import { bookResolver } from "./book.resolver.js";
import { userResolver } from "./user.resolver.js";

const resolverMap = [bookResolver, userResolver];

export default resolverMap;
