import userPlan from "../constants/userPlan.json" assert {type: "json"};
const userPricesMonthly = Object.values(userPlan.monthly);
const userPricesYearly = Object.values(userPlan.yearly);

const checkbox = document.querySelector('[data-checkbox]');
const planTypeName = document.querySelectorAll('[data-plan]');

const monthlyPlan = sessionStorage.getItem("Plan");
const planPrice = sessionStorage.getItem("Price");

window.addEventListener('pageshow', () => {
    planPrice === null && monthlyPlan === null ?
        planTypeName[0].checked = true :
        saveState();
})

function saveState() {
    if (!monthlyPlan.includes("(Mensal)")) {
        checkbox.checked = true;
    }

    planTypeName.forEach((plan, index) => {
        if (planPrice.includes(userPricesMonthly[index])) {
            plan.checked = true;
        }

        if (checkbox.checked) {
            if (planPrice.includes(userPricesYearly[index])) {
                plan.checked = true;
            }
        }
    })
}