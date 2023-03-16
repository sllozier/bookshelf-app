/**
 * Book represents information about a book.
 * @param {string[]} authors array of the book's authors
 * @param {string} language the language the book is written in
 * @param {string[]} subject  array of book topics
 * @param {string} title title of the book
 */
class Book {
  constructor(authors, language, subject, title) {
    this.authors = authors;
    this.language = language;
    this.subject = subject;
    this.title = title;
    this.isFavorite = false;
  }

  /**
   * @returns a list item representing this Book
   */
  render() {
    /* NOTE: Change render! This is currently a barebones template. */
    const li = document.createElement("li");
    li.textContent = this.title;

    // Create favorite button
    const favButton = document.createElement("button");
    favButton.textContent = this.isFavorite ? "❤️" : "♡";
    li.append(favButton);

    // Toggle favorite property on click
    favButton.addEventListener("click", () => {
      this.isFavorite = !this.isFavorite;
      favButton.textContent = this.isFavorite ? "❤️" : "♡";
    });

    return li;
  }
}
