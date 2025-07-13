document.addEventListener("DOMContentLoaded", () => {
    fetch("header.html")
        .then(res => res.text())
        .then(data => {
            const temp = document.createElement("div");
            temp.innerHTML = data;
            document.body.insertBefore(temp.firstElementChild, document.body.firstChild);
        });

    fetch("footer.html")
        .then(res => res.text())
        .then(data => {
            const temp = document.createElement("div");
            temp.innerHTML = data;
            document.body.appendChild(temp.firstElementChild);
        });
});