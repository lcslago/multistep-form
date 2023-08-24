import { planTypeChecked } from "./showPrices.js";

const submitBtn = document.querySelector('[data-submit]');
const planTypeName = document.querySelectorAll('[data-plan]');

submitBtn.addEventListener('click', event => {
    event.preventDefault();
    checkLocalStorage();
    window.location.href = "./../pages/step3.html";
})

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
    checkLocalStorage
}
