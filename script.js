
const container = document.querySelector(".work-image");

const pages = Array.from(
    container.querySelectorAll(":scope > .work-img, :scope > .work-info")
);

const dots = document.querySelectorAll(".work-dots span");

let currentPage = 0;

function showPages() {
    pages.forEach((page, index) => {
        const depth = (index - currentPage + pages.length) % pages.length;

        page.style.zIndex = pages.length - depth;
        page.style.transform = `
            translate(${depth * 8}px, ${depth * -8}px)
            scale(${1 - depth * 0.03})
        `;
    });

    dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentPage);
    });
}

showPages();

container.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
        return;
    }

    currentPage = (currentPage + 1) % pages.length;
    showPages();
});
