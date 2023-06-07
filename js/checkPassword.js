const passwordCamp = document.querySelector('[data-password]');
const showPassword = document.querySelector('[data-showpass]');

passwordCamp.addEventListener('keyup', () => {
    checkPasssword(passwordCamp.value);
    validateRequirements(passwordCamp.value);
})

const uppercaseRequirement = document.querySelector('[data-uppercase]');
const patternUppercase = new RegExp(/^(?=.*?[A-Z])/g);

const patternLowercase = new RegExp(/^(?=.*?[a-z])/g);

const patternNumber = new RegExp(/^(?=.*?[0-9])/g);

const patternSpecial = new RegExp(/^(?=.*?[#?!@$%^&*-])/g);

const lengthRequirement = document.querySelector('[data-length]');
const patternLength = new RegExp(/^.{8,}$/g);

function checkPasssword(password) {
    if (patternLength.test(password) && patternLowercase.test(password)) {
        console.log("funcionou");
    }
    resetPattern(patternLength);
}

function validateRequirements(password) {
    const requirementList = [
        { pattern: patternLength, requirement: lengthRequirement },
        { pattern: patternUppercase, requirement: uppercaseRequirement },
    ];

    for (requirement of requirementList) {
        requirement.pattern.test(password) ? requirementCheck(requirement.requirement) : requirementUncheck(requirement.requirement);
    }
}

function requirementCheck(requirement) {
    requirement.style.textDecoration = "line-through";
    requirement.style.color = "hsl(231, 11%, 63%)";
}

function requirementUncheck(requirement) {
    requirement.style.textDecoration = "none";
    requirement.style.color = "#174a8a";
}

function resetPattern(pattern) {
    pattern.lastIndex = 0;
}

showPassword.addEventListener('click', () => {
    passwordCamp.type === 'password' ? passwordCamp.type = 'text' : passwordCamp.type = 'password';
})