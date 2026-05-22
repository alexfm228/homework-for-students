interface Book {
  title: string;
  pages: number;
}

function createBook(title: string, pages: number): Book {
  return { title, pages };
}

const myBook: Book = createBook("TypeScript для початківців", 120);
