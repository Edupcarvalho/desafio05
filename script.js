let numberOne = prompt("Digite o primeiro número");
let numberTwo = prompt("Digital o segundo número");

numberOne = Number(numberOne);
numberTwo = Number(numberTwo);

const soma = numberOne + numberTwo;
const sub = numberOne - numberTwo;
const mult = numberOne * numberTwo;
const div = numberOne / numberTwo;
const rest = numberOne % numberTwo;

alert("A soma de dois número é: "  + soma);
alert("A subtração de dois número é: " + sub);
alert("A multiplicação de dois números é: " + mult);
alert("A divisão de dois número é: " + div);
alert("O resto da divisão entre os dois números é: " + rest);


if(soma % 2 === 0){
    alert("A soma de dois números é par")
}else{
    alert("A soma de dois números é ímpar")
}

if(numberOne === numberTwo){
    alert("Os números são iguais")
}else{
    alert("Os números são diferentes")
}