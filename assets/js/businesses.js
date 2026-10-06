
/* =====================================================
   LAUREZ GROUP HOLDINGS
   BUSINESSES PAGE JAVASCRIPT
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =================================================
       BUSINESS CARDS
    ================================================= */

    const businessCards = document.querySelectorAll(".business-card");

    businessCards.forEach((card) => {

        card.addEventListener("mouseenter", () => {
            card.classList.add("business-card-active");
        });

        card.addEventListener("mouseleave", () => {
            card.classList.remove("business-card-active");
        });

    });


    /* =================================================
       SCROLL REVEAL
    ================================================= */

    const revealElements = document.querySelectorAll(
        ".business-card, .sector-item, .business-stat"
    );

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("business-visible");

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.15
        }
    );


    revealElements.forEach((element) => {

        element.classList.add("business-hidden");

        revealObserver.observe(element);

    });


    /* =================================================
       STATISTICS COUNTER
    ================================================= */

    const counters = document.querySelectorAll(
        ".business-stat-number"
    );

    const counterObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (!entry.isIntersecting) {
                    return;
                }

                const counter = entry.target;

                const target = parseInt(
                    counter.dataset.target || counter.textContent,
                    10
                );

                if (isNaN(target)) {
                    return;
                }

                let current = 0;

                const duration = 1500;

                const startTime = performance.now();


                function updateCounter(currentTime) {

                    const elapsed = currentTime - startTime;

                    const progress = Math.min(
                        elapsed / duration,
                        1
                    );

                    const easedProgress =
                        1 - Math.pow(1 - progress, 3);

                    current = Math.floor(
                        easedProgress * target
                    );

                    counter.textContent = current;


                    if (progress < 1) {

                        requestAnimationFrame(updateCounter);

                    } else {

                        counter.textContent = target;

                    }

                }


                requestAnimationFrame(updateCounter);

                observer.unobserve(counter);

            });

        },
        {
            threshold: 0.6
        }
    );


    counters.forEach((counter) => {

        counterObserver.observe(counter);

    });


    /* =================================================
       BUSINESS CARD KEYBOARD SUPPORT
    ================================================= */

    businessCards.forEach((card) => {

        card.addEventListener("focus", () => {

            card.classList.add("business-card-active");

        });

        card.addEventListener("blur", () => {

            card.classList.remove("business-card-active");

        });

    });

});


