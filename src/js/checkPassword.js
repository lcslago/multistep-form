import theme from '../constants/projectColorScheme.json' assert {type: "json"};

const $ = document.querySelector.bind(document);

const passwordForm = $('[data-form]');
const passwordCamp = $('[data-password]');
const showPassword = $('[data-showpass]');
const alertCamp = $('[data-alert]');
const submitBtn = $('[data-submit]');

passwordCamp.addEventListener('input', () => {
    alertCamp.innerHTML = "";
    passwordCamp.style.borderColor = theme.neutral.secondaryColor;
    checkPasssword(passwordCamp.value);
    validateRequirements(passwordCamp.value);
})

passwordForm.addEventListener('submit', e => {
    e.preventDefault();
    if (passwordCamp !== "" && !passwordCamp.readOnly) {
        document.cookie = `password=${passwordCamp.value}; ${setTimeOutCookie()}; secure; samesite=lax; HttpOnly`;
        window.location.href = "./src/pages/step2.html";
    }
})
window.onload = () => {
    passwordCamp.addEventListener('click', () => {
        passwordCamp.removeAttribute('readonly');
    })

    if (passwordCamp !== "") {
        checkPasssword(passwordCamp.value);
        validateRequirements(passwordCamp.value);
    }
}

function setTimeOutCookie() {
    const date = new Date();
    const timeLimit = 120 * 60000; //2 horas em ms

    date.setTime(date.getTime() + timeLimit);
    const expiredTime = `expires=${date.toUTCString()}`;

    return expiredTime;
}

const uppercaseRequirement = $('[data-uppercase]');
const patternUppercase = new RegExp(/^(?=.*?[A-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ])(?=.*?[a-záàâãéèêíïóôõöúçñ])/g);

const numberRequirement = $('[data-numbers]');
const patternNumber = new RegExp(/^(?=.*?[0-9])/g);

const symbolRequirement = $('[data-symbols]');
const patternSymbol = new RegExp(/^(?=.*?[^\w\s\d])/g);

const lengthRequirement = $('[data-length]');
const patternLength = new RegExp(/.{8,}$/g);

const requirementList = [
    { pattern: patternLength, requirement: lengthRequirement },
    { pattern: patternUppercase, requirement: uppercaseRequirement },
    { pattern: patternNumber, requirement: numberRequirement },
    { pattern: patternSymbol, requirement: symbolRequirement },
];

passwordCamp.addEventListener('invalid', e => e.preventDefault());
submitBtn.addEventListener('click', () => {
    if (passwordCamp.validity.valueMissing || passwordCamp.readOnly) {
        alertCamp.innerHTML = "Campo Obrigatório";
        alertCamp.classList.toggle("animate-shake");
        passwordCamp.style.borderColor = theme.main.alertColor;
    } else if (passwordCamp.validity.tooShort) {
        passwordCamp.style.borderColor = theme.main.alertColor;
        lengthRequirement.style.color = theme.neutral.quinaryColor;
        lengthRequirement.style.backgroundColor = theme.main.alertColor;
        lengthRequirement.style.borderRadius = "3px";
        lengthRequirement.classList.toggle("animate-shake");
    } else {
        requirementCheck(lengthRequirement);
    }
})

const passwordMeter = $('[data-meter]');

const passwordMeterWeak = $('[data-weak]');
const passwordMeterMedium = $('[data-medium]');
const passwordMeterStrong = $('[data-strong]');

function checkPasssword(password) {
    const fullPasswordPattern = new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s\d])/g);
    const strongPasswordPattern = new RegExp(/.{10,}$/g);
    const mediumPasswordPattern = new RegExp(/.{8,}$/g);
    const lowercasePasswordPattern = new RegExp(/^(?=.*?[a-z])/g);

    if (fullPasswordPattern.test(password) && strongPasswordPattern.test(password)) {
        passwordMeter.innerHTML = "Forte";
        passwordMeter.style.color = theme.main.validatedColor;
        checkMeter(theme.main.alertColor, theme.main.mediumColor, theme.main.validatedColor);
    } else if ((patternUppercase.test(password) && patternSymbol.test(password) && mediumPasswordPattern.test(password)) || (patternUppercase.test(password) && patternNumber.test(password) && mediumPasswordPattern.test(password)) || (patternNumber.test(password) && patternSymbol.test(password) && mediumPasswordPattern.test(password)) || (lowercasePasswordPattern.test(password) && patternNumber.test(password) && mediumPasswordPattern.test(password))) {
        passwordMeter.innerHTML = "Média";
        passwordMeter.style.color = theme.main.mediumColor;
        checkMeter(theme.main.alertColor, theme.main.mediumColor, theme.neutral.secondaryColor);
    } else if (passwordCamp.value === "") {
        passwordMeter.innerHTML = "";
        checkMeter(theme.neutral.secondaryColor, theme.neutral.secondaryColor, theme.neutral.secondaryColor);
    } else {
        passwordMeter.innerHTML = "Fraca";
        passwordMeter.style.color = theme.main.alertColor;
        checkMeter(theme.main.alertColor, theme.neutral.secondaryColor, theme.neutral.secondaryColor);
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
    requirement.style.color = theme.neutral.primaryColor;
}

function requirementUncheck(requirement) {
    requirement.style.textDecoration = "none";
    requirement.style.color = theme.main.hoverColor;
    requirement.style.backgroundColor = theme.neutral.quinaryColor;
}

function resetPattern() {
    for (const item of requirementList) {
        item.pattern.lastIndex = 0;
    }
}

showPassword.addEventListener('click', () => {
    passwordCamp.type === 'password' ? passwordCamp.type = 'text' : passwordCamp.type = 'password';
})