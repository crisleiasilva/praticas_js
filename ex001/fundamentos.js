//Fundamentos
let minhaVariavel = 'Miguel';

console.log(minhaVariavel);

//Comentários
/*
Comentário para várias linhas
*/ 

//Variáveis e Tipos de Dados
let meuNumero = 100;
console.log(typeof meuNumero);

let meuObjeto = {};
let meuArray = [];
let meuNull = null;
let meuUndefined = undefined; //variável sem valor

console.log(typeof meuObjeto);
console.log(typeof meuArray);

//let e const formas de declarar as variáveis
let x = 10;
const y = 5;

//Operadores aritméticos
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);

//Operadores de comparação
console.log( x == y);
console.log(x !== y);
console.log(x === y);

//Operadores Lógicos
//AND &&
//OR ||
console.log(10 > 5 || 20 > 5);
console.log(10 < 5 || 20 < 5);

//Conversão de tipos
const meuNumero2 = "123";

const meuNumeroConvertido = Number(meuNumero2);
console.log(typeof meuNumero2);
console.log(typeof meuNumeroConvertido);

//Estruturas de Condição if , else, else if
const idade = 16;

if(idade < 13) {
    console.log('Você é uma criança');
} else if(idade <= 16) {
    console.log('Você é Adolescente');
} else {
    console.log('Você é um adulto');
}

//Switch

const fruta = 'Maçã';

switch(fruta) {
  case 'Banana':
    console.log('Banana é a fruta');
    break;
  case 'Maçã':
    console.log('Maçã é a fruta!');
    break;  
  default:
    console.log('Fruta não encontrada');
    break;  
}

//Estruturas de Repetição
//1,2,3,4,5,6 ... ==> dependendo d euma condição

 //contador , condição de limite e incremento
for(let i= 0; i < 5; i = i +1) {
  console.log(`o valor de i é: ${i}`);
}

//while
let k = 0; //variável

while(k < 6) { // condição
    console.log(`O valor de k é: ${k}`);
    k++; //incremento
}

// do while
let mig = 0
do {
    console.log(`O valor de mig é: ${mig}`);
  mig++;

}while(mig <10 );

//FUNÇÕES trecho de código que será utilizado várias vezes
// function nome(argumentos) {corpo da função}
function cumprimentar(nome) {
    console.log('Olá!!! ' + nome);
}
//invocação da função utiliza esta sintaxe
cumprimentar("Crislei Silva");

//escopo de variáveis
let cor = "azul";

function mostrarCor() {
  let cor = "rosa";

  console.log(cor);
}

  console.log(cor);
  mostrarCor();

//hoisting = içamento
testeHoisting();

function testeHoisting() {
  console.log("Deu certo!!!!");
}

//arrow function é uma função com uma sintaxe mais reusmida

const testeArrow = () => console.log('Isso também é uma função');

testeArrow();

// truthy e falsy
const minhaVariavel1 = "" // falsy
const minhaVariavel2 = "Algum texto"

if(minhaVariavel1) {
    console.log("É verdade!");
} else {
    console.log("É falso");
}

//array , listas é caracterizada pela abertura e fechamento de colchetes. o array sempre começa do índice zero
const numeros = [1,2,3,4,5];

console.log(numeros);

console.log(numeros[0]);

numeros.push(6);// acresenta um número desejado
console.log(numeros);

numeros.pop(); // exclui o último número
console.log(numeros);

// strings
const minhaStringNova = 'Olá Mundo!'

const minhaStringNova3 = minhaStringNova + " Como você está?"
console.log(minhaStringNova3);

console.log(minhaStringNova3.length);

//data e hora
const agora = Date();
console.log(agora);

const natal = new Date(2024,11,25);
console.log(natal);

//Math
console.log(Math.PI); //valor de Pi

console.log(Math.round(3.76));//arredondar um número

console.log(Math.sqrt(64));//raiz quadrada

console.log(Math.pow(2,3));