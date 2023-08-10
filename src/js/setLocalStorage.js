import { planTypeChecked } from "./showPrices.js";

const submitBtn = document.querySelector('[data-submit]');
const planTypeName = document.querySelectorAll('[data-plan]');

submitBtn.addEventListener('click', event => {
    event.preventDefault();
    setLocalStorage();
    console.log(localStorage.length); //usar para fazer a lógica da navegação lateral
})

function setLocalStorage() {
    let planType = planTypeChecked.watchCheckbox();
    planTypeName.forEach(plan => {
        if (plan.checked) {
            let selectedPlan = plan.parentElement.querySelector('[data-plan-name]').innerHTML;
            let selectedPlanPrice = plan.parentElement.querySelector('[data-plan-price]').innerHTML;

            if (planType == "monthly") {
                localStorage.setItem("Plan", `${selectedPlan}(Mensal)`);
                localStorage.setItem("Price", selectedPlanPrice);
            } else {
                localStorage.setItem("Plan", `${selectedPlan}(Anual)`);
                localStorage.setItem("Price", selectedPlanPrice);
            }
        }
    })
}
