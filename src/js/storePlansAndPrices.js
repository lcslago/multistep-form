import { planTypeChecked } from "./showPlanAndPrices.js";
import { checkButtons } from "./checkButtons.js";

const planTypeName = document.querySelectorAll('[data-plan]');

const main = (() => {
    checkButtons(3, checkLocalStorage);
})()

function checkLocalStorage() {
    planTypeName.forEach(plan => {
        if (plan.checked) {
            let selectedPlan = plan.parentElement.querySelector('[data-plan-name]').innerHTML;
            let selectedPlanPrice = plan.parentElement.querySelector('[data-plan-price]').innerHTML;

            setLocalStorage(selectedPlan, selectedPlanPrice);
        }
    })
}

function setLocalStorage(plan, price) {
    let planType = planTypeChecked.watchCheckbox();

    if (planType == "monthly") {
        window.localStorage.setItem("Plan", `${plan}(Mensal)`);
        window.localStorage.setItem("Price", price);
    } else {
        window.localStorage.setItem("Plan", `${plan}(Anual)`);
        window.localStorage.setItem("Price", price);
    }
}

export const localStorage = {
    checkButtons,
}
