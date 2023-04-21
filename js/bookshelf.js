// Bookshelf is an internal data structure that manages Books.

class Bookshelf {
  constructor(htmlElement, books = []) {
    this.books = books;
    this.htmlElement = htmlElement;
    this.visibleBooks = books;
  }

  // Process an array of raw book information to initialize Bookshelf properties
  seed(data) {
    // Load in the data
    data.forEach((bookInfo) => {
      const book = new Book(
        bookInfo.author,
        bookInfo.language,
        bookInfo.subject,
        bookInfo.title,
        bookInfo.comments,
        this
      );
      this.addBook(book);
    });

    // Prepare and sort visible books
    this.visibleBooks = this.books;
    this.sortVisibleBooks((a, b) => a.title.localeCompare(b.title));

    this.render();
  }

  // Add a book to the Bookshelf
  addBook(book) {
    this.books.push(book);
  }

  // Use internal Book array to rerender the existing DOM element for this Bookshelf.
  render() {
    const ul = document.createElement("ul");
    const books = this.visibleBooks.map((b) => b.render());
    ul.replaceChildren(...books);
    this.htmlElement.replaceChildren(ul);
  }

  // returns the number of favorite books
  countFavoriteBooks() {
    return this.books.reduce(
      (count, book) => (book.isFavorite ? count + 1 : count),
      0
    );
  }

  // Filter visible books according to a given criteria function
  filterVisibleBooks(criteria) {
    this.visibleBooks = this.books.filter(criteria);
    this.render();
  }

  // Sort visible books according to a given compare function
  sortVisibleBooks(compareFn) {
    this.visibleBooks.sort(compareFn);
    this.render();
  }

  //Clear Add Book form
  clearFields() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#language").value = "";
    document.querySelector("#subject").value = [];
  }

  //Clear add comment form
  clearComment() {
    document.querySelector(".commIpt").value = "";
  }

  //EC: Get book count
  bookCount() {
    return this.visibleBooks.length;
  }

  //EC: Get all books that aren't english
  booksByLanguage() {
    return this.visibleBooks.reduce(
      (accum, book) => (book.language === "en" ? accum : accum + 1),
      0
    );
  }

  //EC: get the average number of subjects for books
  averageSubjects() {
    return Math.floor(
      this.visibleBooks.reduce(
        (accum, book) => accum + book.subject.length / this.visibleBooks.length,
        0
      )
    );
  }
}
