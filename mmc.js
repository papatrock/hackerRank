function getMdc(a, b) {
    if (b === 0) {
        return a;
    }
    return getMdc(b, a % b);
}

function getMmc(a, b) {
    if (a === 0 || b === 0) {
        return 0; // O MMC de zero com qualquer número é zero
    }
    return Math.abs(a * b) / getMdc(a, b);
}

// Exemplo de uso
const num1 = 12;
const num2 = 15;

const mmc = getMmc(num1, num2);
console.log(`O Mínimo Múltiplo Comum de ${num1} e ${num2} é: ${mmc}`);
