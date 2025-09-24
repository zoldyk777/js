function rollDice() {
    const num = parseInt(document.getElementById("diceCount").value);
    const diceResult = document.getElementById("diceResult");

    diceResult.textContent = "";

    if (isNaN(num) || num < 1) {
        diceResult.textContent = "Enter a valid number of dice.";
        return;
    }

    let rolls = [];
    let total = 0;

    for (let i = 0; i < num; i++) {
        const roll = Math.floor(Math.random() * 6) + 1;
        rolls.push(roll);
        total += roll;
    }

    diceResult.textContent = `Rolls: ${rolls.join(", ")}\nTotal: ${total}`;
}