
const container = document.querySelector(".work-image");

const pages = Array.from(
    container.querySelectorAll(":scope > .work-img, :scope > .work-info")
);

const dots = document.querySelectorAll(".work-dots span");

let currentPage = 0;

function showPages() {
    pages.forEach((page, index) => {
        const depth = (index - currentPage + pages.length) % pages.length;

        const xPositions = [0, -8, -16];
        const yPositions = [0, -8, -16];
        const scales = [1, 0.88, 0.82];

        page.style.zIndex = pages.length - depth;
        page.style.transform = `
            translate(${xPositions[depth]}px, ${yPositions[depth]}px)
            scale(${scales[depth]})
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
