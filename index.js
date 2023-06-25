function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
    .then((response) => response.json())
    .then((data) => renderBooks(data))
    .catch((error) => console.log(error));
}

function renderBooks(books) {
  const bookTitles = books.map((book) => book.name);
  // Here, you can modify the code to render the book titles into the DOM as per your requirements.
  console.log(bookTitles);
}

fetchBooks();
