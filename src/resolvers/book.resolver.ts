import { getBooks } from "../services/book.service.js";

export const bookResolver = {
  Query: {
    books: () => {
      return getBooks();
    },
  },
};
