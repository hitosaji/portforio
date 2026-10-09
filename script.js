
let currentPage = 0;

const pages = document.querySelectorAll(
    ".work-image .work-img, .work-image .work-info"
);

const dots = document.querySelectorAll(".work-dots span");

function showPage() {
    pages.forEach((page, index) => {
        page.style.display = index === currentPage ? "block" : "none";
    });

    dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentPage);
    });
}

showPage();

document.querySelector(".work-image").addEventListener("click", () => {
    currentPage = (currentPage + 1) % pages.length;
    showPage();
});
