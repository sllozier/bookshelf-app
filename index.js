// --------------------------
//#region Initialization
// --------------------------
const bookshelfElement = document.querySelector(".books");
const bookshelf = new Bookshelf(bookshelfElement);
bookshelf.seed(bookData);

//#endregion Initialization

// --------------------------
//#region Favorite Feature
// --------------------------
const favCount = document.querySelector(".favCount");
const updateBtn = document.querySelector(".favUpdateBtn");

updateBtn.addEventListener("click", () => {
  favCount.textContent = bookshelf.countFavoriteBooks();
});

//#endregion Favorite Feature

// --------------------------
//#region Searching
// --------------------------
const searchInput = document.querySelector(".search input");
const searchBtn = document.querySelector(".searchBtn");

// NOTE: This only searches through the titles of the books!
searchBtn.addEventListener("click", () => {
  const query = searchInput.value
    .toLowerCase()
    .split()
    .filter((word) => word !== "the");
  const searchFn = (b) => b.title.toLowerCase().includes(query);
  bookshelf.filterVisibleBooks(searchFn);
});

//#endregion Searching

// --------------------------
//#region Sorting
// --------------------------
const sortBy = document.querySelector(".sortBy");

// NOTE: This only sorts by the titles of the books!
sortBy.addEventListener("change", () => {
  const query = sortBy.value;
  let sortFn;

  if (query === "titleaz") {
    sortFn = (a, z) => a.title.localeCompare(z.title);
  } else if (query === "titleza") {
    sortFn = (a, z) => z.title.localeCompare(a.title);
  }

  bookshelf.sortVisibleBooks(sortFn);
});

//#endregion Sorting

// --------------------------
//#region Add Book Form
// --------------------------

const addBook = document.querySelector(".book-form");

addBook.addEventListener("submit", (event) => {
  event.preventDefault();
  const authorInputs = document.querySelector("#author").value;
  const author = authorInputs.split();
  const language = document.querySelector("#language").value;
  const subjectInputs = document.querySelector("#subject").value;
  const subject = subjectInputs.split(",");
  const title = document.querySelector("#title").value;

  if (title === "" || author === [] || language === "" || subject === []) {
    alert("Please fill in required fields");
  } else {
    const book = new Book(
      author,
      language,
      subject,
      title,
      (comments = []),
      bookshelf
    );
    bookshelf.addBook(book);
    bookshelf.render();
    bookshelf.clearFields();
  }
});

//#endregion Add Book Form

// --------------------------
//#region Book Count Dropdown Feature
// --------------------------
const dropdown = document.querySelector(".dropdown");

dropdown.addEventListener("click", (event) => {
  if (dropdown.classList.contains("closed")) {
    dropdown.classList.remove("closed");
  } else {
    dropdown.classList.add("closed");
  }
});

//#endregion Book Count Dropdown Feature

// --------------------------
//#region Book Count Feature
// --------------------------
const bookCount = document.querySelector(".bookCount");
const countBtn = document.querySelector(".countBtn");

countBtn.addEventListener("click", () => {
  bookCount.innerText = bookshelf.bookCount();
});

const forLangBooks = document.querySelector(".nonEngCount");
const nonEngBtn = document.querySelector(".nonEngBtn");

nonEngBtn.addEventListener("click", () => {
  forLangBooks.innerText = bookshelf.booksByLanguage();
});

const avgSubNum = document.querySelector(".avgSubCount");
const avgSubBtn = document.querySelector(".avgSubBtn");

avgSubBtn.addEventListener("click", () => {
  avgSubNum.innerText = bookshelf.averageSubjects();
});

//#endregion Book Count Feature

const menu = document.getElementById("menuList");

function seeHomepage() {
  //const registration = document.getElementById("registration");
  const home = document.getElementById("home");
  const about = document.getElementById("about");
  const contact = document.getElementById("contact");

  //registration.style.display = "none";
  home.style.display = "block";
  about.style.display = "none";
  contact.style.display = "none";
  menu.style.display = "block";
}
