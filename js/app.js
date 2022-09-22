/**
 * Define Global Variables
 *
 */
const navUl = document.getElementById("navbar__list"),
  sections = document.querySelectorAll("section"),
  fragment = document.createDocumentFragment();

/**
 * End Global Variables
 */

// build nav
function NavMenu() {
  sections.forEach(function (section) {
    const sectionID = section.getAttribute("id");
    const sectionTitle = section.getAttribute("data-nav");
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    // set link  href to #sectionid
    link.setAttribute("href", "#" + sectionID);
    // class of link is "menu__link"
    link.classList.add("menu__link");
    link.textContent = sectionTitle;
    // Scroll to section on link click

    link.addEventListener("click", function (e) {
      //prevent default behavior
      e.preventDefault();
      // scroll becomes smooth
      section.scrollIntoView({ behavior: "smooth" });
    });
    //append link to list item
    listItem.appendChild(link);
    //append list item to fragment
    fragment.appendChild(listItem);
  });
  //append fragment to nav

  navUl.appendChild(fragment);
}
//load the nav on load window
window.addEventListener("load", NavMenu);
// End Nav
//set maximum top value
const maxTop = 250;
//set minimum top value
const minTop = 0;
// Scroll to anchor ID using scrollTO event
window.addEventListener("scroll", function () {
  for (const section of sections) {
    // Detect the element location relative to the viewport using .getBoundingClientRect()
    const sectionTop = section.getBoundingClientRect().top;
    const activeLink = navUl.querySelector(`a[href='#${section.id}']`);
    if (sectionTop > minTop && sectionTop < maxTop) {
      // Add class 'your-active-class' to section when near top of viewport
      section.classList.add("your-active-class");
      // Add class 'activeLink' to link when near top of viewport
      activeLink.classList.add("activeLink");
    } else {
      // Add remove 'your-active-class' to section when near top of viewport
      section.classList.remove("your-active-class");
      // remove class 'activeLink' to link when near top of viewport
      activeLink.classList.add("activeLink");
    }
  }
});
