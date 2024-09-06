//Avançando em JavaScript

//Manipulação de Arrays
const fruta = ["Maçã", "Laranja"];

fruta.unshift('Acerola'); //coloca o item no primeio lugar da lista
console.log(fruta);

fruta.shift()//remove o último elemento incluído na lista  e não precisa especificar qula é
console.log(fruta);

//map, filter, reduce => arrow function
const numeros = [1,2,3,4,5,6]

//find só retorna o primeiro elemento do critério
const numeroPar = numeros.find((num) => num % 2 === 0);

console.log(numeroPar);

// filter retorna todos os elementos do critério
const numerosPares = numeros.filter((num) => num % 2 === 0);

console.log(numerosPares);

//Manipulação de Strings
const frase = ' Olá, mundo! ';

const palavras = frase.trim().split(" ");
console.log(frase);
console.log(palavras);

const frase2 = "JavaScript é incrível!"

console.log(frase2.startsWith("Java"));
console.log(frase2.endsWith("!"));

// Exceções e tratamentos de erros
const idade = 15;
 
//if(idade < 18) {
//    throw new Error ("Você deve ter pelo menos 18 anos")
//}

try {
  const idade = 15;
  if(idade < 18) {
    throw new Error("Tenha pelo menos 18 anos");
  }
} catch (error) {
  console.log(error.message);// incluir o "message" para imprimir apenas a mensagem e não a palavra Error junto
}

console.log('Quando o programa...');

//Callback é uma função executada em outra função

function cumprimentar(nome, callback) {
    console.log("Hello, " + nome);
    callback();
}

function mostrarSaudacao() {
    console.log("How are you?");
}

cumprimentar('Crislei', mostrarSaudacao);

//settimeout => depois de um tempo executa algo, uma vez

function mostrarMensagem() {
    console.log("Esta mensagem será exibida após 3 segundos")
}

setTimeout(mostrarMensagem, 3000); // 1000ms = 1 segundo

//Promises promete que o código vai executar após alguma coisa
const promessa = new Promise((resolve, reject) => {
    const condicao = true

    if(condicao) {
      resolve("A condição é verdadeira!");
    } else{
      reject("A condição é falsa!");
    }

});

promessa
  .then((mensagem) => {
    console.log(mensagem);
})
  .catch((erro) => {
    console.log(erro);
});

//Bibliotecas feitas que são "promise based"

const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2500, "testando")
});

Promise.all([promise1, promise2]).then((valores) => console.logzz)


//Async Await - usado para fazer requisição a servidores
// Async função assíncrona, ela não precisa ser executada para que as demais linhas de código sejam.
async function obterValor(){

    const promessa = new Promise((resolve, reject)=> {
        setTimeout(()=> resolve("Valor obtido"), 2000);
    });
    const valor = await promessa;

    console.log(valor);
}
 obterValor();