document.addEventListener("DOMContentLoaded", () => {

    /*
     * =====================================================
     * ANO AUTOMÁTICO NO FOOTER
     * =====================================================
     */

    const currentYear = document.querySelector("#current-year");

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }


    /*
     * =====================================================
     * MENU MOBILE
     * =====================================================
     */

    const menuButton = document.querySelector("#menu-button");
    const navigation = document.querySelector("#navigation");

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

    }


    /*
     * =====================================================
     * FECHAR MENU AO CLICAR EM UM LINK
     * =====================================================
     */

    if (navigation) {

        const navigationLinks =
            navigation.querySelectorAll("a");

        navigationLinks.forEach((link) => {

            link.addEventListener("click", () => {

                navigation.classList.remove(
                    "navigation-open"
                );

                if (menuButton) {
                    menuButton.setAttribute(
                        "aria-expanded",
                        "false"
                    );
                }

            });

        });

    }


    /*
     * =====================================================
     * HEADER AO ROLAR A PÁGINA
     * =====================================================
     */

    const header = document.querySelector(".header");

    if (header) {

        const updateHeader = () => {

            if (window.scrollY > 20) {
                header.classList.add("header-scrolled");
            } else {
                header.classList.remove("header-scrolled");
            }

        };

        window.addEventListener(
            "scroll",
            updateHeader
        );

        updateHeader();

    }


    /*
     * =====================================================
     * REVELAÇÃO DAS SEÇÕES
     * =====================================================
     */

    const revealElements =
        document.querySelectorAll(".reveal");

    if (
        revealElements.length > 0 &&
        "IntersectionObserver" in window
    ) {

        const observer =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach((entry) => {

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
                    threshold: 0.12
                }
            );

        revealElements.forEach((element) => {
            observer.observe(element);
        });

    } else {

        revealElements.forEach((element) => {
            element.classList.add(
                "reveal-visible"
            );
        });

    }

});