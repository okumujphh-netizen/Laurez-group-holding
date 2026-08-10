/* =========================================================
   LAUREZ GROUP HOLDINGS
   ABOUT SECTION JAVASCRIPT
   YEAR 24
========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       PAGE DETECTION
    ===================================================== */

    const page = document.body.dataset.page;

    if (page !== "about") {
        return;
    }


    /* =====================================================
       INTERACTIVE SECTOR EXPLORER
    ===================================================== */

    const sectorTabs =
        document.querySelectorAll(".sector-tab");

    const sectorPanels =
        document.querySelectorAll(".sector-panel");


    if (sectorTabs.length && sectorPanels.length) {

        sectorTabs.forEach(tab => {

            tab.addEventListener("click", () => {

                const sector =
                    tab.dataset.sector;


                /* Remove active state */

                sectorTabs.forEach(item => {

                    item.classList.remove("active");

                });


                sectorPanels.forEach(panel => {

                    panel.classList.remove("active");

                });


                /* Activate selected tab */

                tab.classList.add("active");


                /* Activate matching panel */

                const selectedPanel =
                    document.querySelector(
                        `[data-panel="${sector}"]`
                    );


                if (selectedPanel) {

                    selectedPanel.classList.add("active");

                }

            });

        });

    }


    /* =====================================================
       ANIMATED STATISTICS
    ===================================================== */

    const statistics =
        document.querySelectorAll(
            ".about-statistics .stat strong"
        );


    if (statistics.length) {

        const animateCounter = element => {

            const target =
                parseInt(
                    element.dataset.target ||
                    element.textContent.replace(/\D/g, ""),
                    10
                );


            if (Number.isNaN(target)) {
                return;
            }


            let current = 0;

            const duration = 1200;

            const increment =
                Math.max(
                    1,
                    Math.ceil(
                        target / (duration / 30)
                    )
                );


            const update = () => {

                current += increment;


                if (current >= target) {

                    element.textContent =
                        target;

                    return;

                }


                element.textContent =
                    current;


                requestAnimationFrame(update);

            };


            element.textContent = "0";

            update();

        };


        const statisticsObserver =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (
                            entry.isIntersecting &&
                            !entry.target.dataset.animated
                        ) {

                            entry.target.dataset.animated =
                                "true";

                            animateCounter(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.5
                }
            );


        statistics.forEach(stat => {

            statisticsObserver.observe(stat);

        });

    }


});