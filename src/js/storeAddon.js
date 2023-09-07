import { checkButtons } from "./checkButtons.js";

const addonName = document.querySelectorAll('[data-addon-name]');
const addonPrice = document.querySelectorAll('[data-addon-price]');
const addonCheckbox = document.querySelectorAll('[data-addon-checkbox]');

window.addEventListener('pageshow', () => { saveState() });
const main = (() => {
    checkButtons(4, checkAddons);
})()

function checkAddons() {
    const selectedAddons = [];
    for (let i = 0; i < addonCheckbox.length; i++) {
        if (addonCheckbox[i].checked) {
            selectedAddons.push({
                name: addonName[i].innerHTML,
                price: addonPrice[i].innerHTML
            })

            sessionStorage.setItem("Addons", JSON
                .stringify(selectedAddons)
                .replace(/\\n/g, '')
                .trim());
        }

        if (Array.from(addonCheckbox).every(box => !box.checked)) {
            sessionStorage.removeItem("Addons");
        }
    }
}

function saveState() {
    const sessionStorageAddonDB = sessionStorage.getItem("Addons");

    if (sessionStorageAddonDB) {
        addonName.forEach((item, index) => {
            const addonNameIncluded = sessionStorageAddonDB
                .includes(item
                    .innerHTML
                    .trim());

            if (addonNameIncluded) {
                addonCheckbox[index].checked = true;
            }
        })
    }
}
