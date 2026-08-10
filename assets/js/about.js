/* =========================================================
   LAUREZ GROUP HOLDINGS
   ABOUT PAGE JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    console.log("About JavaScript loaded");


    /* =====================================================
       SECTOR EXPLORER
    ===================================================== */

    const sectorTabs = document.querySelectorAll(".sector-tab");
    const sectorPanels = document.querySelectorAll(".sector-panel");


    console.log("Sector tabs:", sectorTabs.length);
    console.log("Sector panels:", sectorPanels.length);


    if (sectorTabs.length === 0 || sectorPanels.length === 0) {
        return;
    }


    sectorTabs.forEach(function (tab) {

        tab.addEventListener("click", function () {

            const selectedSector =
                tab.getAttribute("data-sector");


            /* Remove active tab */

            sectorTabs.forEach(function (item) {

                item.classList.remove("active");

            });


            /* Hide all panels */

            sectorPanels.forEach(function (panel) {

                panel.classList.remove("active");

            });


            /* Activate clicked tab */

            tab.classList.add("active");


            /* Find matching panel */

            const selectedPanel =
                document.querySelector(
                    '.sector-panel[data-panel="' +
                    selectedSector +
                    '"]'
                );


            /* Show matching panel */

            if (selectedPanel) {

                selectedPanel.classList.add("active");

            }

        });

    });

});

/* =========================================================
   OUR APPROACH — STRATEGIC PILLARS
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const strategyCards =
        document.querySelectorAll(".strategy-card");


    if (!strategyCards.length) {
        return;
    }


    strategyCards.forEach(function (card) {

        card.addEventListener("click", function () {

            /* Remove active state from all cards */

            strategyCards.forEach(function (item) {

                if (item !== card) {
                    item.classList.remove(
                        "strategy-card-active"
                    );
                }

            });


            /* Toggle selected card */

            card.classList.toggle(
                "strategy-card-active"
            );

        });

    });

});


/* =====================================================
   MOBILE ABOUT DROPDOWN
===================================================== */

const aboutDropdown = document.querySelector(".nav-dropdown");
const aboutToggle = document.querySelector(".nav-dropdown-toggle");

if (aboutDropdown && aboutToggle) {

    aboutToggle.addEventListener("click", () => {

        const isOpen = aboutDropdown.classList.toggle("open");

        aboutToggle.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );

    });

}

/* =====================================================
   ABOUT ARROW STATE
===================================================== */

if (aboutDropdown && aboutToggle) {

    aboutToggle.addEventListener("click", () => {

        const arrow = aboutToggle.querySelector(".dropdown-arrow");

        if (arrow) {
            arrow.textContent =
                aboutDropdown.classList.contains("open")
                    ? "▴"
                    : "▾";
        }

    });

}