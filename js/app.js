/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
const navUl = document.getElementById("navbar__list"),
  sections = document.querySelectorAll("section"),
  fragment = document.createDocumentFragment();

/**
 * End Global Variables
 * Start Helper Functions
 *
 */
function NavMenu() {
  sections.forEach(function (section) {
    const sectionID = section.getAttribute("id");
    const sectionTitle = section.getAttribute("data-nav");
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.setAttribute("href", "#" + sectionID);
    link.classList.add("menu__link");
    link.textContent = sectionTitle;
    link.addEventListener("click", function (e) {
      e.preventDefault();
      section.scrollIntoView({ behavior: "smooth" });
    });
    listItem.appendChild(link);
    fragment.appendChild(listItem);
  });
  navUl.appendChild(fragment);
}
window.addEventListener("load", NavMenu);
/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click
const maxTop = 250;
const minTop = 0;
window.addEventListener("scroll", function () {
  for (const section of sections) {
    const sectionTop = section.getBoundingClientRect().top;
    const activeLink = navUl.querySelector(`a[href='#${section.id}']`);
    if (sectionTop > minTop && sectionTop < maxTop) {
      section.classList.add("your-active-class");
      activeLink.classList.add("activeLink");
    } else {
      section.classList.remove("your-active-class");
      activeLink.classList.add("activeLink");
    }
  }
});
// Set sections as active
