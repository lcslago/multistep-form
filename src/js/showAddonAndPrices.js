import userAddons from "../constants/userAddons.json" assert {type: "json"};
const addons = userAddons.addons;
const addonNames = Object.keys(addons);
const addonData = Object.values(addons);

const $$ = document.querySelectorAll.bind(document);
const addonName = $$('[data-addon-name]');
const addonDescription = $$('[data-addon-description]');
const addonPrice = $$('[data-addon-price]');

const main = (() => { showAddons() })();

function showAddons() {
    addonName.forEach((addon, i) => addon
        .innerHTML = [...addonNames][i]);

    addonDescription.forEach((descr, i) => descr
        .innerHTML = [...addonData][i][0]);

    localStorage.getItem("Plan").includes("Mensal") ?
        showPrices(1) :
        showPrices(2)
}

function showPrices(index) {
    addonPrice.forEach((price, i) => price
        .innerHTML = `+R$${[...addonData][i][index]}`)
}