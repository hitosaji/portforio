
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
       const scales = [1, 0.88, 0.82];

page.style.transform = `
    translate(${depth * 8 - (depth > 0 ? 16 : 0)}px, ${depth * -8}px)
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
