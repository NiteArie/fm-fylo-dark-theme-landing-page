const app = (() => {
    const form = document.querySelector(".js-form");
    const emailInput = document.querySelector(".js-email");
    const emailError = document.querySelector(".js-error");

    const regex = /\S+@\S+/;

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        hideError();

        if (!emailInput.value.match(regex)) {
            showError();
        }
    })

    function showError() {
        emailError.classList.remove("hidden");
    }

    function hideError() {
        emailError.classList.add("hidden");
    }
})()