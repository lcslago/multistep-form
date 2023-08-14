const $All = document.querySelectorAll.bind(document);
const asideBtn = $All('[data-aside-btn]');
const asideNumbs = $All('[data-aside-numb]');
const passwordForm = $All('[data-form]');

const asideBtnHover = [
    "xl:group-hover:text-main-primaryColor",
    "xl:group-hover:transition-all",
    "xl:group-hover:bg-main-quaternaryColor"
];

asideBtn.forEach((btn) => {
    if (document.cookie != "") {
        btn.addEventListener("mouseover", () => {
            asideBtn.forEach((button, index) => {
                button.style.cursor = "pointer";
                asideNumbs.forEach(number => number.classList.add(...asideBtnHover));
                button.title = `Ir para a etapa ${index + 1}`;
            });
        })
    }

    btn.style.cursor = "not-allowed";
    btn.title = "Conclua a primeira etapa para liberar as próximas";

    const indexPage = asideBtn[0];
    indexPage.style.cursor = "pointer";
    indexPage.title = "Ir para a etapa 1";
})

if (window.location.href.includes("step2")) {
    const module = await import("./setLocalStorage.js");

    asideBtn.forEach(btn => {
        btn.addEventListener("click", () => {
            module.localStorage.checkLocalStorage();
        })
    });
}
