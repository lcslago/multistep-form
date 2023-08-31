export function checkButtons(pageNumber, functionName) {
    const submitBtn = document.querySelector('[data-submit]');
    const backBtn = document.querySelector('[data-back]');

    [submitBtn, backBtn].forEach(btn => btn.addEventListener('click', event => {
        if (event.target === submitBtn) {
            event.preventDefault();
            window.location.href = `./../pages/step${pageNumber}.html`;
        }
        functionName();
    }))
}