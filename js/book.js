// Book represents information about a book.

class Book {
  constructor(authors, language, subject, title, comments = [], bookshelf) {
    this.authors = authors;
    this.language = language;
    this.subject = subject;
    this.title = title;
    this.isFavorite = false;
    this.comments = comments;
    this.makeComment = false;
    this.showComments = false;
    this.bookshelf = bookshelf; // this makes it possible to call bookshelf instance methods
    this.numPages = Math.floor(Math.random() * 1000) + 1;
    this.category = "";
  }

  // render book as li

  render() {
    const bookWrapper = document.createElement("div");
    bookWrapper.classList.add("book-wrapper");

    const li = document.createElement("li");
    li.classList.add("book-item");
    bookWrapper.append(li);

    const bookTitle = document.createElement("p");
    bookTitle.classList.add("book-title");
    bookTitle.textContent = this.title;
    li.append(bookTitle);

    // Create favorite button
    const favButton = document.createElement("button");
    favButton.classList.add("favBtn");
    favButton.textContent = this.isFavorite ? "❤️" : "♡";
    li.append(favButton);

    // Toggle favorite property on click
    favButton.addEventListener("click", () => {
      this.isFavorite = !this.isFavorite;
      favButton.textContent = this.isFavorite ? "❤️" : "♡";
    });

    //Create Comment wrapper div

    const commentWrapper = document.createElement("div");
    commentWrapper.classList.add("commWrapper");
    li.append(commentWrapper);

    //Create Comment Toggle ul
    const commentToggle = document.createElement("ul");
    commentToggle.classList.add("commToggle");
    //Using a list to keep this simple but the toggle can be done
    //with other elements
    commentWrapper.append(commentToggle);

    //Create Button li
    const buttonItem = document.createElement("li");
    buttonItem.classList.add("buttonItem");
    commentToggle.append(buttonItem);

    //Create Form li
    const formItem = document.createElement("li");
    formItem.classList.add("formItem");
    commentToggle.append(formItem);

    //Create Comment button
    const commentButton = document.createElement("button");
    commentButton.classList.add("commBtn");
    commentButton.textContent = "✏️ Write Comment";
    commentButton.style.display = "flex";
    //setting the display to block so button showing is the initial state
    buttonItem.append(commentButton);

    //Create Comment Form
    const commentForm = document.createElement("form");
    commentForm.classList.add("commForm");
    commentForm.style.display = "none";
    const commentInput = document.createElement("input");
    commentInput.classList.add("commIpt");
    const submitButton = document.createElement("button");
    submitButton.classList.add("subBtn");

    commentInput.type = "text";
    commentInput.placeholder = "comment here";
    commentForm.append(commentInput);

    submitButton.type = "submit";
    submitButton.textContent = "Submit";
    commentForm.append(submitButton);

    formItem.append(commentForm);

    //Create Comment Toggle
    //make comment button disappear and comment form appear
    //when you click the button
    buttonItem.addEventListener("click", () => {
      this.makeComment = !this.makeComment;
      commentButton.style.display = "none";
      commentForm.style.display = "flex";
    });

    //Add a comment and close the form
    commentForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const comment = commentForm.querySelector(".commIpt").value;
      if (comment.length > 280) {
        alert("Comments must not be longer than 280 characters");
      } else if (comment === "") {
        alert("You didn't enter any comments");
      } else {
        this.comments.push(comment); //push new comment to comments array on book instance
        this.bookshelf.clearComment(); //clear the input field
        this.bookshelf.render();
        this.makeComment = !this.makeComment; //toggle back to the button
        commentForm.style.display = "none";
        commentButton.style.display = "flex";
      }
    });

    //Create Comment List Div
    //this holds the comment list button and the actual comments list.
    const commentList = document.createElement("div");
    commentList.classList.add("commList");
    li.append(commentList);

    //Create Button li
    const commentListButton = document.createElement("button");
    commentListButton.classList.add("commLstBtn");
    commentListButton.textContent = "💬 View Comments";
    commentListButton.style.display = "flex";
    commentList.append(commentListButton);

    //Create ul of comments
    const listOfComments = document.createElement("ul");
    listOfComments.classList.add("listOComm");
    listOfComments.style.display = "none";
    commentList.append(listOfComments);

    let singleComment = document.createElement("li");
    singleComment.classList.add("singComm");
    this.comments.forEach((comment) => {
      singleComment.innerHTML += comment;
      listOfComments.append(singleComment); //make sure to append one at a time
      singleComment = document.createElement("li");
      //^^ create another empty comment list item or all will be listed inside
      //one list item separated by commas.
    });

    const hideButton = document.createElement("button");
    hideButton.classList.add("hideBtn");
    hideButton.textContent = "Hide Comments";
    listOfComments.append(hideButton);

    commentListButton.addEventListener("click", () => {
      this.showComments = !this.showComments;
      commentListButton.style.display = "none";
      listOfComments.style.display = "flex";
    });

    hideButton.addEventListener("click", () => {
      this.showComments = !this.showComments;
      commentListButton.style.display = "flex";
      listOfComments.style.display = "none";
    });

    //EC: Create Category
    const category = document.createElement("button");
    category.classList.add("bookCat");
    category.textContent =
      this.numPages > 100 ? "📕 Category: Novel" : "📕 Category: Short Story";
    li.append(category);

    return bookWrapper;
  }
}
