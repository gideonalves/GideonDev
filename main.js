window.addEventListener("scroll", function () {
    let header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.classList.add("header-scroll");
    } else {
        header.classList.remove("header-scroll");
    }
});