import { theme } from '../constants/projectTheme.js'

const passwordForm = document.querySelector('[data-form]');

const passwordCamp = document.querySelector('[data-password]');
const showPassword = document.querySelector('[data-showpass]');

const alertCamp = document.querySelector('[data-alert]');
const submitBtn = document.querySelector('[data-submit]');

passwordCamp.addEventListener('input', () => {
    alertCamp.innerHTML = "";
    passwordCamp.style.borderColor = theme.colors.neutral.primaryColor;
    checkPasssword(passwordCamp.value);
    validateRequirements(passwordCamp.value);
})

passwordForm.addEventListener('submit', e => {
    e.preventDefault();
})

const uppercaseRequirement = document.querySelector('[data-uppercase]');
const patternUppercase = new RegExp(/^(?=.*?[A-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ])(?=.*?[a-záàâãéèêíïóôõöúçñ])/g);

const numberRequirement = document.querySelector('[data-numbers]');
const patternNumber = new RegExp(/^(?=.*?[0-9])/g);

const symbolRequirement = document.querySelector('[data-symbols]');
const patternSymbol = new RegExp(/^(?=.*?[^\w\s\d])/g);

const lengthRequirement = document.querySelector('[data-length]');
const patternLength = new RegExp(/.{8,}$/g);

const requirementList = [
    { pattern: patternLength, requirement: lengthRequirement },
    { pattern: patternUppercase, requirement: uppercaseRequirement },
    { pattern: patternNumber, requirement: numberRequirement },
    { pattern: patternSymbol, requirement: symbolRequirement },
];

passwordCamp.addEventListener('invalid', e => e.preventDefault());
submitBtn.addEventListener('click', () => {
    if (passwordCamp.validity.valueMissing) {
        alertCamp.innerHTML = "Campo Obrigatório";
        passwordCamp.style.borderColor = theme.colors.main.alertColor;
    } else if (passwordCamp.validity.tooShort) {
        passwordCamp.style.borderColor = theme.colors.main.alertColor;
        lengthRequirement.style.color = theme.colors.neutral.quinaryColor;
        lengthRequirement.style.backgroundColor = theme.colors.main.alertColor;
        lengthRequirement.style.borderRadius = "3px";
    } else {
        requirementCheck(lengthRequirement);
    }
})

const passwordMeter = document.querySelector('[data-meter]');

const passwordMeterWeak = document.querySelector('[data-weak]');
const passwordMeterMedium = document.querySelector('[data-medium]');
const passwordMeterStrong = document.querySelector('[data-strong]');

function checkPasssword(password) {
    const fullPasswordPattern = new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s\d])/g);
    const strongPasswordPattern = new RegExp(/.{10,}$/g);
    const mediumPasswordPattern = new RegExp(/.{8,}$/g);
    const lowercasePasswordPattern = new RegExp(/^(?=.*?[a-z])/g);

    if (fullPasswordPattern.test(password) && strongPasswordPattern.test(password)) {
        passwordMeter.innerHTML = "Forte";
        passwordMeter.style.color = theme.colors.main.validatedColor;
        checkMeter(theme.colors.main.alertColor, theme.colors.main.mediumColor, theme.colors.main.validatedColor);
    } else if ((patternUppercase.test(password) && patternSymbol.test(password) && mediumPasswordPattern.test(password)) || (patternUppercase.test(password) && patternNumber.test(password) && mediumPasswordPattern.test(password)) || (patternNumber.test(password) && patternSymbol.test(password) && mediumPasswordPattern.test(password)) || (lowercasePasswordPattern.test(password) && patternNumber.test(password) && mediumPasswordPattern.test(password))) {
        passwordMeter.innerHTML = "Média";
        passwordMeter.style.color = theme.colors.main.mediumColor;
        checkMeter(theme.colors.main.alertColor, theme.colors.main.mediumColor, theme.colors.neutral.primaryColor);
    } else if (passwordCamp.value === "") {
        passwordMeter.innerHTML = "";
        checkMeter(theme.colors.neutral.primaryColor, theme.colors.neutral.primaryColor, theme.colors.neutral.primaryColor);
    } else {
        passwordMeter.innerHTML = "Fraca";
        passwordMeter.style.color = theme.colors.main.alertColor;
        checkMeter(theme.colors.main.alertColor, theme.colors.neutral.primaryColor, theme.colors.neutral.primaryColor);
    }
    resetPattern();
}

function checkMeter(color1, color2, color3) {
    passwordMeterWeak.style.borderColor = color1;
    passwordMeterMedium.style.borderColor = color2;
    passwordMeterStrong.style.borderColor = color3;
}

function validateRequirements(password) {
    for (const requirement of requirementList) {
        requirement.pattern.test(password) ? requirementCheck(requirement.requirement) : requirementUncheck(requirement.requirement);
    }
}

function requirementCheck(requirement) {
    requirement.style.textDecoration = "line-through";
    requirement.style.color = theme.colors.neutral.primaryColor;
}

function requirementUncheck(requirement) {
    requirement.style.textDecoration = "none";
    requirement.style.color = theme.colors.main.hoverColor;
    requirement.style.backgroundColor = theme.colors.neutral.quinaryColor;
}

function resetPattern() {
    for (const item of requirementList) {
        item.pattern.lastIndex = 0;
    }
}

showPassword.addEventListener('click', () => {
    passwordCamp.type === 'password' ? passwordCamp.type = 'text' : passwordCamp.type = 'password';
})