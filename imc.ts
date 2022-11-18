var peso: number = 57;
var altura: number = 1.75;

function IMC(a: number, b: number): number {
    let only: number = a/(b*b);
    
    return Math.round(only);
}

var imc: number = IMC(peso, altura);
console.log(imc >= 40  ? `Obesidade Grau III` : 
imc <= 39.99 && imc >= 35 ? `Obesidade Grau II` : 
imc <= 34.99 && imc >= 30.00 ? `Obesidade Grau I` : 
imc <= 29.99 && imc >= 25.00 ? `Pré-Obesidade` : 
imc <= 24.99 && imc >= 18.50 ? `Peso Normal` : `Abaixo do Peso`);
console.log(`IMC: ${imc}`);
