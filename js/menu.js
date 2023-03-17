//Navbar Menu
//Assign each "view" element to variable
//const registration = document.getElementById("registration");
const home = document.getElementById("home");
const about = document.getElementById("about");
const contact = document.getElementById("contact");

//Assign each menu button to variable
//const regToggle = document.getElementById("regMenuItem");
const homeToggle = document.getElementById("homeMenuItem");
const aboutToggle = document.getElementById("aboutMenuItem");
const contactToggle = document.getElementById("contactMenuItem");

//Initial display settings
// registration.style.display = "block";
home.style.display = "flex";
about.style.display = "none";
contact.style.display = "none";
//regToggle.style.display = "none";

//Toggle between views when menu buttons are clicked
// regToggle.addEventListener("click", () => {
//   registration.style.display = "block";
//   home.style.display = "none";
//   about.style.display = "none";
//   contact.style.display = "none";
// });

homeToggle.addEventListener("click", () => {
  //registration.style.display = "none";
  home.style.display = "flex";
  about.style.display = "none";
  contact.style.display = "none";
});

aboutToggle.addEventListener("click", () => {
  //registration.style.display = "none";
  home.style.display = "none";
  about.style.display = "flex";
  contact.style.display = "none";
});

contactToggle.addEventListener("click", () => {
  //registration.style.display = "none";
  home.style.display = "none";
  about.style.display = "none";
  contact.style.display = "flex";
});

//Counter dropdown: This is optional to declutter the page.
//Assign each count element to variable
const favoriteCount = document.getElementById("favCount");
const totalBookCount = document.getElementById("bookCount");
const nonEngCount = document.getElementById("nonEngCount");
const avgSubCount = document.getElementById("avgSubCount");

//Initial setting to hide all counts
favoriteCount.style.display = "none";
totalBookCount.style.display = "none";
nonEngCount.style.display = "none";
avgSubCount.style.display = "none";

//Assign each dropdown count item to variable
const favToggle = document.getElementById("favDrop");
const bookToggle = document.getElementById("totalDrop");
const nonEngToggle = document.getElementById("nonEngDrop");
const avgSubToggle = document.getElementById("avgSubsDrop");

//Toggle between dropdown options to show the count selected on the page
favToggle.addEventListener("click", () => {
  favoriteCount.style.display = "flex";
  totalBookCount.style.display = "none";
  nonEngCount.style.display = "none";
  avgSubCount.style.display = "none";
});

bookToggle.addEventListener("click", () => {
  favoriteCount.style.display = "none";
  totalBookCount.style.display = "flex";
  nonEngCount.style.display = "none";
  avgSubCount.style.display = "none";
});

nonEngToggle.addEventListener("click", () => {
  favoriteCount.style.display = "none";
  totalBookCount.style.display = "none";
  nonEngCount.style.display = "flex";
  avgSubCount.style.display = "none";
});

avgSubToggle.addEventListener("click", () => {
  favoriteCount.style.display = "none";
  totalBookCount.style.display = "none";
  nonEngCount.style.display = "none";
  avgSubCount.style.display = "flex";
});
