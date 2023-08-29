const addonName = document.querySelectorAll('[data-addon-name]');
const addonPrice = document.querySelectorAll('[data-addon-price]');
const addonCheckbox = document.querySelectorAll('[data-addon-checkbox]');
const submitBtn = document.querySelector('[data-submit]');

submitBtn.addEventListener('click', e => {
    e.preventDefault();
    checkAddons();
});

function checkAddons() {
    const selectedAddons = [];
    for (let i = 0; i < addonCheckbox.length; i++) {
        if (addonCheckbox[i].checked) {
            selectedAddons.push({
                name: addonName[i].innerHTML,
                price: addonPrice[i].innerHTML
            })

            localStorage.setItem("Addons", JSON
                .stringify(selectedAddons)
                .replace(/\\n/g, '')
                .trim());
        }
    }
}

function saveState() {

}
