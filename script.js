/* =====================================================
   HOLISTICPRENEUR ACADEMY
   PREMIUM ANIMATIONS
===================================================== */


/* =====================================================
   CURSOR GLOW
===================================================== */

const cursorGlow =
    document.querySelector(".cursor-glow");


document.addEventListener("mousemove", (e) => {

    cursorGlow.style.left =
        e.clientX + "px";

    cursorGlow.style.top =
        e.clientY + "px";

});



/* =====================================================
   NAVBAR SCROLL
===================================================== */

const navbar =
    document.getElementById("navbar");


window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});



/* =====================================================
   MOBILE MENU
===================================================== */

const mobileMenu =
    document.getElementById("mobileMenu");

const navMenu =
    document.querySelector(".nav-menu");


mobileMenu.addEventListener("click", () => {

    navMenu.classList.toggle("mobile-open");

    const icon =
        mobileMenu.querySelector("i");


    if (
        navMenu.classList.contains("mobile-open")
    ) {

        icon.classList.remove(
            "fa-bars"
        );

        icon.classList.add(
            "fa-xmark"
        );

    } else {

        icon.classList.remove(
            "fa-xmark"
        );

        icon.classList.add(
            "fa-bars"
        );

    }

});



/* =====================================================
   CLOSE MOBILE MENU
===================================================== */

document.querySelectorAll(
    ".nav-menu a"
).forEach(link => {

    link.addEventListener(
        "click",
        () => {

            navMenu.classList.remove(
                "mobile-open"
            );

            const icon =
                mobileMenu.querySelector("i");

            icon.classList.remove(
                "fa-xmark"
            );

            icon.classList.add(
                "fa-bars"
            );

        }
    );

});



/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(
        ".section-heading, " +
        ".learning-card, " +
        ".tool-card, " +
        ".project-card-large, " +
        ".benefit-item, " +
        ".final-inner"
    );


const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(
                (entry) => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target
                            .classList
                            .add("reveal", "active");

                    }

                }
            );

        },
        {
            threshold: 0.15
        }
    );


revealElements.forEach(
    element => {

        revealObserver.observe(
            element
        );

    }
);



/* =====================================================
   COUNTER ANIMATION
===================================================== */

const counters =
    document.querySelectorAll(
        "[data-count]"
    );


const counterObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    const counter =
                        entry.target;

                    const target =
                        Number(
                            counter.dataset.count
                        );

                    let current = 0;

                    const increment =
                        target / 50;


                    const updateCounter =
                        () => {

                            current +=
                                increment;

                            if (
                                current <
                                target
                            ) {

                                counter.textContent =
                                    Math.ceil(
                                        current
                                    );

                                requestAnimationFrame(
                                    updateCounter
                                );

                            } else {

                                counter.textContent =
                                    target;

                            }

                        };


                    updateCounter();

                    observer.unobserve(
                        counter
                    );

                }

            });

        }
    );


counters.forEach(
    counter => {

        counterObserver.observe(
            counter
        );

    }
);



/* =====================================================
   HERO PARALLAX
===================================================== */

const heroVisual =
    document.querySelector(
        ".hero-visual"
    );


document.addEventListener(
    "mousemove",
    (e) => {

        if (
            window.innerWidth < 900
        ) return;


        const x =
            (window.innerWidth / 2 -
             e.clientX) / 50;


        const y =
            (window.innerHeight / 2 -
             e.clientY) / 50;


        heroVisual.style.transform =
            `translate(${x}px, ${y}px)`;

    }
);



/* =====================================================
   BUTTON RIPPLE EFFECT
===================================================== */

const buttons =
    document.querySelectorAll(
        ".primary-btn, " +
        ".price-btn, " +
        ".nav-cta, " +
        ".call-btn"
    );


buttons.forEach(button => {

    button.addEventListener(
        "click",
        function(e) {

            const ripple =
                document.createElement(
                    "span"
                );


            ripple.style.position =
                "absolute";

            ripple.style.width =
                "10px";

            ripple.style.height =
                "10px";

            ripple.style.borderRadius =
                "50%";

            ripple.style.background =
                "rgba(255,255,255,0.5)";

            ripple.style.transform =
                "translate(-50%,-50%)";

            ripple.style.pointerEvents =
                "none";


            const rect =
                this.getBoundingClientRect();


            ripple.style.left =
                `${e.clientX - rect.left}px`;

            ripple.style.top =
                `${e.clientY - rect.top}px`;


            this.style.position =
                "relative";

            this.style.overflow =
                "hidden";


            this.appendChild(ripple);


            ripple.animate(
                [
                    {
                        width: "10px",
                        height: "10px",
                        opacity: 1
                    },

                    {
                        width: "500px",
                        height: "500px",
                        opacity: 0
                    }
                ],
                {
                    duration: 700,
                    easing: "ease-out"
                }
            );


            setTimeout(
                () => ripple.remove(),
                700
            );

        }
    );

});



/* =====================================================
   TILT EFFECT ON CARDS
===================================================== */

const cards =
    document.querySelectorAll(
        ".tool-card, " +
        ".learning-card, " +
        ".price-card"
    );


cards.forEach(card => {

    card.addEventListener(
        "mousemove",
        (e) => {

            if (
                window.innerWidth < 900
            ) return;


            const rect =
                card.getBoundingClientRect();


            const x =
                e.clientX -
                rect.left;


            const y =
                e.clientY -
                rect.top;


            const centerX =
                rect.width / 2;


            const centerY =
                rect.height / 2;


            const rotateX =
                ((y - centerY) /
                centerY) * -3;


            const rotateY =
                ((x - centerX) /
                centerX) * 3;


            card.style.transform =
                `perspective(800px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-5px)`;

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
                "";

        }
    );

});



/* =====================================================
   SMOOTH ANCHOR SCROLL
===================================================== */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(anchor => {

    anchor.addEventListener(
        "click",
        function(e) {

            const target =
                document.querySelector(
                    this.getAttribute(
                        "href"
                    )
                );


            if (!target) return;


            e.preventDefault();


            const offset = 80;


            const targetPosition =
                target.getBoundingClientRect()
                .top +
                window.scrollY -
                offset;


            window.scrollTo({

                top:
                    targetPosition,

                behavior:
                    "smooth"

            });

        }
    );

});