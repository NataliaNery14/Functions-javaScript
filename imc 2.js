const prompt = require('prompt-sync');
const showIMC = require('./IMC');

const peso = prompt ('Digite o seu peso(em kg): ');
const altura = prompt('Digite a sua altura (em m): ');

console.log(`O seu IMC é de: ${showIMC(peso, altura)}`);
