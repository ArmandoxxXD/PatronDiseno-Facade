class NumberGenerator {
    generateSecretNumber() {
        return Math.floor(Math.random() * 20) + 1;
    }
}

class GameLogic {
    checkGuess(secretNumber, guess) {
        if (guess < secretNumber) {
            return "El número es mayor.";
        } else if (guess > secretNumber) {
            return "El número es menor.";
        } else {
            return "¡Adivinaste el número!";
        }
    }
}

const numberGenerator = new NumberGenerator();
const gameLogic = new GameLogic();
const secretNumber = numberGenerator.generateSecretNumber();
let attempts = 0;

const output = document.getElementById("output");
const input = document.getElementById("input");
const button = document.getElementById("button");

function main() {
    const guess = parseInt(input.value);

    if (!isNaN(guess)) {
        attempts++;
        const result = gameLogic.checkGuess(secretNumber, guess);
        output.textContent = result;

        if (result === "¡Adivinaste el número!") {
            output.textContent += ` ¡Lo lograste en ${attempts} intentos!`;
            input.setAttribute("disabled", true);
            button.setAttribute("disabled", true);
        }
    } else {
        output.textContent = "Ingresa un número válido.";
    }

    input.value = "";
};
