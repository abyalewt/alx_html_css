// Wait for the entire document content to be loaded before running the script
document.addEventListener("DOMContentLoaded", function () {
    // 1. Get the elements
    const menuToggle = document.getElementById("menu-toggle"); // The hidden checkbox input
    const navLinks = document.querySelector(".nav-links"); // The <ul> list of links
    const menuIcon = document.querySelector(".menu-icon"); // The visible hamburger icon

    /**
     * Toggles the visibility of the navigation menu by adding/removing the 'menu-open' class.
     */
    function toggleMenu() {
        // Toggle the 'menu-open' class on the ul list
        navLinks.classList.toggle("menu-open");

        // Ensure the hidden checkbox state is synchronized (optional but good practice)
        menuToggle.checked = navLinks.classList.contains("menu-open");
    }

    // 2. Add event listener to the hamburger icon/label
    if (menuIcon) {
        menuIcon.addEventListener("click", toggleMenu);
    }

    // 3. Close menu when a link inside is clicked (common mobile behavior)
    // This allows navigation inside the single-page layout
    const links = navLinks.querySelectorAll("a");
    links.forEach((link) => {
        link.addEventListener("click", () => {
            if (navLinks.classList.contains("menu-open")) {
                toggleMenu(); // Closes the menu
            }
        });
    });
});
