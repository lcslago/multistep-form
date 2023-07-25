const $All = document.querySelectorAll.bind(document);

const asideBtn = $All('[data-aside-btn]');
const asideNumbs = $All('[data-aside-numb]');
const passwordForm = $All('[data-form]');

const asideBtnHover = [
    "xl:group-hover:text-main-primaryColor",
    "xl:group-hover:transition-all",
    "xl:group-hover:bg-main-quaternaryColor"
];

asideBtn.forEach((element) => {
    if (document.cookie != "") {
        element.addEventListener("mouseover", () => {
            asideBtn.forEach((button, index) => {
                button.style.cursor = "pointer";
                asideNumbs.forEach(number => number.classList.add(...asideBtnHover));
                button.title = `Ir para a etapa ${index + 1}`;
            });
        })
    }

    element.style.cursor = "not-allowed";
    element.title = "Conclua esta etapa para liberar as próximas";

    const indexPage = asideBtn[0];
    indexPage.style.cursor = "pointer";
    indexPage.title = "Ir para a etapa 1";
})
