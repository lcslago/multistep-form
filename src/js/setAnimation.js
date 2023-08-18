const formViewer = document.querySelector('[data-animate]');
const numberOfPages = 4;

const setAnimationFade = (() => {
    for (let i = 0; i < numberOfPages; i++) {
        if (document.referrer.includes(`step${i}`)) {
            formViewer.classList.add("animate-fade-right");
        } else {
            formViewer.classList.add("animate-fade-left");
        }
        formViewer.classList.remove("hidden");
    }
})()