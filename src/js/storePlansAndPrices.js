import { planTypeChecked } from "./showPlanAndPrices.js";
import { checkButtons } from "./checkButtons.js";

const planTypeName = document.querySelectorAll('[data-plan]');

const main = (() => {
    checkButtons(3, checksessionStorage);
})()

function checksessionStorage() {
    planTypeName.forEach(plan => {
        if (plan.checked) {
            let selectedPlan = plan.parentElement.querySelector('[data-plan-name]').innerHTML;
            let selectedPlanPrice = plan.parentElement.querySelector('[data-plan-price]').innerHTML;

            setsessionStorage(selectedPlan, selectedPlanPrice);
        }
    })
}

function setsessionStorage(plan, price) {
    let planType = planTypeChecked.watchCheckbox();

    if (planType == "monthly") {
        window.sessionStorage.setItem("Plan", `${plan}(Mensal)`);
        window.sessionStorage.setItem("Price", price);
    } else {
        window.sessionStorage.setItem("Plan", `${plan}(Anual)`);
        window.sessionStorage.setItem("Price", price);
    }
}

export const sessionStorage = {
    checkButtons,
}
