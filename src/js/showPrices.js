import userPlan from "../constants/userPlan.json" assert {type: "json"};
const userPlanMonthly = userPlan.monthly;
const userPlanYearly = userPlan.yearly;

const checkbox = document.querySelector('[data-checkbox]');
const priceView = document.querySelectorAll('[data-price]');
const planName = document.querySelectorAll('[data-plan-name]');
let monthTrial;
let planType;

window.addEventListener('pageshow', event => {
    watchCheckbox();
    if (event.persisted) {
        location.reload();
    }
})
checkbox.addEventListener('click', () => watchCheckbox());

function showPrice(node, price, monthTrial) {
    node.innerHTML = `
                            <span class="text-sm font-medium text-neutral-primaryColor animate-fade" data-plan-price>R$${price}</span>
                            <span class="text-xs p-0 font-bold text-main-validatedColor animate-fade">${monthTrial}</span>
                            `
}

const monthlyPrices = () => Object.values(userPlanMonthly);
const yearlyPrices = () => Object.values(userPlanYearly);

planName.forEach((view, name) => view.innerHTML = Object.keys(userPlanMonthly)[name]);

function watchCheckbox() {
    if (!checkbox.checked) {
        monthTrial = "";
        planType = "monthly";
        const monthlyPricesListed = monthlyPrices();
        priceView.forEach((view, price) => showPrice(view, monthlyPricesListed[price], monthTrial));
    } else {
        monthTrial = userPlan.sale;
        planType = "yearly";
        const yearlyPricesListed = yearlyPrices();
        priceView.forEach((view, price) => showPrice(view, yearlyPricesListed[price], monthTrial));
    }

    return planType;
}

export const planTypeChecked = {
    watchCheckbox,
};