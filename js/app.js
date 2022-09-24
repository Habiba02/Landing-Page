/**
 * Define Global Variables
 *
 */
const navUl = document.getElementById("navbar__list"),
  sects = document.querySelectorAll("section"),
  offscreenNode = document.createDocumentFragment();
/**
 * End Global Variables
 */

// build nav
function navMenu() {
  sects.forEach(function (sect) {
    const idpageSection = sect.getAttribute("id");
    const titlepageSection = sect.getAttribute("data-nav");
    const listItem = document.createElement("li");
    const hyperLink = document.createElement("a");
    // set hyperLink  href to #idSect
    hyperLink.setAttribute("href", "#" + idpageSection);
    // class of hyperLink is "menu__link"
    hyperLink.classList.add("menu__link");
    hyperLink.textContent = titlepageSection;
    // Scroll to pageSection on hyperLink click
    hyperLink.addEventListener("click", function (evt) {
      //prevent default behavior
      evt.preventDefault();
      // scroll becomes smooth
      sect.scrollIntoView({ behavior: "smooth" });
    });
    //append hyperLink to list item
    listItem.appendChild(hyperLink);
    //append list item to fragment
    offscreenNode.appendChild(listItem);
  });
  //append fragment to nav
  navUl.appendChild(offscreenNode);
}
//load the nav on load window
window.addEventListener("load", navMenu);
// End Nav

// Scroll to anchor ID using scrollTO event
window.addEventListener("scroll", function () {
  for (const sect of sects) {
    // Detect the element location relative to the viewport using .getBoundingClientRect()
    const toppageSection = sect.getBoundingClientRect().top;
    const activehyperLink = navUl.querySelector(`a[href='#${sect.id}']`);
    toppageSection > 0 && toppageSection < 250
      ? sect.classList.add("your-active-class")
      : sect.classList.remove("your-active-class");
    toppageSection > 0 && toppageSection < 250
      ? activehyperLink.classList.add("activehyperLink")
      : activehyperLink.classList.remove("activehyperLink");
  }
});
