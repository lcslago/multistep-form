const checkbox = document.querySelector('[data-checkbox]');
const priceView = document.querySelectorAll('[data-price]');
const monthlyPrices = ["9,00", "12,00", "15,00"];
const yearlyPrices = ["90,00", "120,00", "150,00"];
let monthTrial;

window.addEventListener('pageshow', event => {
    watchCheckbox();
    if (event.persisted) {
        location.reload();
    }
})

checkbox.addEventListener('click', () => {
    watchCheckbox();
})

function showPrice(node, price, priceType, monthTrial) {
    node.innerHTML = `
                            <span class="text-sm font-medium text-neutral-primaryColor animate-fade">R$${price}/${priceType}</span>
                            <span class="text-xs p-0 font-bold text-main-validatedColor animate-bounce animate-duration-700">${monthTrial}</span>
                            `
}

function watchCheckbox() {
    if (!checkbox.checked) {
        monthTrial = "";
        priceView.forEach((view, price) => {
            showPrice(view, monthlyPrices[price], "mês", monthTrial);
        });
    } else {
        monthTrial = "2 meses grátis";
        priceView.forEach((view, price) => {
            showPrice(view, yearlyPrices[price], "ano", monthTrial);
        });
    }
}
