const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let planName = $('[data-plan-name]');
let planPrice = $('[data-plan-price]');

let addonName = $$('[data-addon-name]');
let addonPrice = $$('[data-addon-price]');

let sumTitle = $('[data-sum-title]');
let sumPrice = $('[data-sum-price]');

const confirmBtn = $('[data-submit]');

const main = (() => {
    calculateSum();
})()


function showChosenPlan() {
    const chosenPlan = localStorage.getItem("Plan").split("(")[0];
    const chosenPlanPrice = localStorage.getItem("Price");
    let planType;

    if (localStorage.getItem("Plan").includes("(Mensal)")) {
        planType = "Mensal";
        planName.innerHTML = `${chosenPlan} (${planType})`;
        sumTitle.innerHTML = `Total (por mês)`;
    } else {
        planType = "Anual"
        planName.innerHTML = `${chosenPlan} (${planType})`;
        sumTitle.innerHTML = `Total (por ano)`;
    }
    planPrice.innerHTML = chosenPlanPrice;

    const priceNumber = Number(chosenPlanPrice.match(/\d+/g));
    return [priceNumber, planType];
}

function showChosenAddons() {
    const chosenAddons = JSON.parse(localStorage.getItem("Addons"));
    const addonsPriceArr = [];

    if (chosenAddons != null) {
        chosenAddons.forEach((addon, index) => {
            addonName[index].innerHTML = addon.name;
            addonPrice[index].innerHTML = addon.price;

            addonsPriceArr.push(Number(addon.price.match(/\d+/g)));
        });
    }

    if (addonsPriceArr.length === 0) {
        addonName[0].innerHTML = "Nenhum complemento selecionado"
    }

    return addonsPriceArr;
}

function calculateSum() {
    const addonData = showChosenAddons();
    const planData = showChosenPlan();

    let addonPricesSum = () => {
        let sum;
        if (addonData.length > 0) {
            sum = addonData
                .reduce((currentValue, nextValue) => currentValue + nextValue);
        } else {
            sum = 0;
        }
        return sum;
    }

    const totalPricesSum = addonPricesSum() + planData[0];


    const monthly = planData[1] === "Mensal";

    if (monthly) {
        sumPrice.innerHTML = `R$${totalPricesSum}/mês`
    } else {
        sumPrice.innerHTML = `R$${totalPricesSum}/ano`
    }
}
