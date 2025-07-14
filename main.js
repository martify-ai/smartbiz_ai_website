document.addEventListener("DOMContentLoaded", () => {
    // Inject header
    fetch("header.html")
        .then(res => res.text())
        .then(data => {
            const temp = document.createElement("div");
            temp.innerHTML = data;
            document.body.insertBefore(temp.firstElementChild, document.body.firstChild);

            // After header is injected, activate nav toggle
            const toggleBtn = document.querySelector(".menu-toggle");
            const nav = document.querySelector("nav");

            if (toggleBtn && nav) {
                toggleBtn.addEventListener("click", () => {
                    nav.classList.toggle("show");
                });
            }

            // Highlight current page
            document.querySelectorAll("nav a").forEach(link => {
                if (window.location.href.includes(link.getAttribute("href"))) {
                    link.classList.add("active");
                }

                link.addEventListener("click", () => {
                    nav.classList.remove("show");
                });
            });
        });

    // Inject footer
    fetch("footer.html")
        .then(res => res.text())
        .then(data => {
            const temp = document.createElement("div");
            temp.innerHTML = data;
            document.body.appendChild(temp.firstElementChild);
        });
});