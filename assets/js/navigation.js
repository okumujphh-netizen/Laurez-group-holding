/* =========================================================
   LAUREZ GROUP HOLDINGS
   NAVIGATION
   YEAR 24
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.querySelector(".menu-toggle");
    const mainNav = document.querySelector(".main-nav");

    if (!menuToggle || !mainNav) {
        return;
    }


    /* =====================================================
       MOBILE MENU TOGGLE
    ===================================================== */

    menuToggle.addEventListener("click", () => {

        const isOpen =
            mainNav.classList.toggle("is-open");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

        menuToggle.setAttribute(
            "aria-label",
            isOpen
                ? "Close navigation"
                : "Open navigation"
        );

    });


    /* =====================================================
       CLOSE MENU WHEN LINK IS CLICKED
    ===================================================== */

    const navLinks =
        mainNav.querySelectorAll("a");

    navLinks.forEach((link) => {

        link.addEventListener("click", () => {

            mainNav.classList.remove("is-open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation"
            );

        });

    });


    /* =====================================================
       CLOSE MENU WHEN RESIZING TO DESKTOP
    ===================================================== */

    window.addEventListener("resize", () => {

        if (window.innerWidth > 768) {

            mainNav.classList.remove("is-open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation"
            );

        }

    });

});