// Small interaction for the navigation bar.
// The page starts transparent and becomes slightly more visible
// after the user scrolls.

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
        navbar.style.borderBottomColor = "#d8d0c5";
    } else {
        navbar.style.borderBottomColor = "transparent";
    }
});
