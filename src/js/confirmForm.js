const confirmForm = (() => {
    const confirmBtn = document.querySelector('[data-submit]');

    confirmBtn.addEventListener('click', e => {
        e.preventDefault();
        window.location.href = "./../pages/thankyou.html"
    })
})();