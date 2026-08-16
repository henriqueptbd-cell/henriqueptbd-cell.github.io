// =========================================================
// HEADER — efeito ao rolar
// =========================================================

const header = document.querySelector(".header");

function updateHeader() {
    if (!header) return;

    if (window.scrollY > 30) {
        header.classList.add("header-scrolled");
    } else {
        header.classList.remove("header-scrolled");
    }
}

window.addEventListener("scroll", updateHeader);

updateHeader();


// =========================================================
// MENU MOBILE
// =========================================================

const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".navigation");

if (menuButton && navigation) {

    menuButton.addEventListener("click", () => {
        navigation.classList.toggle("navigation-open");

        const isOpen =
            navigation.classList.contains("navigation-open");

        menuButton.setAttribute(
            "aria-expanded",
            isOpen
        );
    });


    // Fecha o menu quando clicar em um link

    const navigationLinks =
        navigation.querySelectorAll("a");

    navigationLinks.forEach(link => {

        link.addEventListener("click", () => {
            navigation.classList.remove(
                "navigation-open"
            );

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );
        });

    });

}


// =========================================================
// ANIMAÇÃO DOS ELEMENTOS
// =========================================================

const revealElements =
    document.querySelectorAll(".reveal");

if (revealElements.length > 0) {

    const observer =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "reveal-visible"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.1
            }
        );


    revealElements.forEach(element => {
        observer.observe(element);
    });

}


// =========================================================
// ANO AUTOMÁTICO DO FOOTER
// =========================================================

const currentYear =
    document.querySelector("#current-year");

if (currentYear) {
    currentYear.textContent =
        new Date().getFullYear();
}