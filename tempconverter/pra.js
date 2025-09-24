document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("input");
    const cToF = document.getElementById("first");
    const fToC = document.getElementById("sec");
    const result = document.getElementById("result");
    const btn = document.getElementById("submit");

    btn.addEventListener("click", (e) => {
        e.preventDefault(); // stop form from reloading the page
        const value = parseFloat(input.value);

        if (isNaN(value)) {
            result.textContent = "Please enter a number.";
            return;
        }

        if (cToF.checked) {
            const fahrenheit = (value * 9 / 5) + 32;
            result.textContent = `${value} °C = ${fahrenheit.toFixed(2)} °F`;
        } else if (fToC.checked) {
            const celsius = (value - 32) * 5 / 9;
            result.textContent = `${value} °F = ${celsius.toFixed(2)} °C`;
        } else {
            result.textContent = "Please select a conversion option.";
        }
    });
});