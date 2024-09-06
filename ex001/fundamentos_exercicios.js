//Exercícios Fundamentos

//Exercício 1: Olá Mundo!
console.log("Olá Mundo!!!!")

//Exercício 2: Conversão de tipos
let num = "1234";
num = Number(num);
console.log(typeof num);

//Exercício 3: manipulação de strings
const language = 'JavaScript é incrível';
const numCaracteres = language.length;
const numPalavras = language.split(" ").length;

console.log(`O número de caracteres é: ${numCaracteres}`);
console.log(`O número de palavras é: ${numPalavras}`);

//Exercício 4: Loops e Arrays
const nomes = ["Emily", "João", "Miguel", "Ryan", "Crislei"];

for (let i = 0; i < nomes.length; i++) {
  console.log(nomes[i]);
}

//Exercício 5: Funções, Strings e MAth

function converterHorario(horario24) {
    //10:49 => hora = 10, minuto => 49 => split(":") => [0] 

    const [hora, minuto] = horario24.split(":");
  //Falsy 12 % 12 = 0 => 12
    const hora12 = hora % 12 || 12;

    let periodo = "AM"

    if(hora > 12) {
      periodo = "PM"
    }

    console.log(`${hora12}: ${minuto} ${periodo}`);
}

converterHorario("15:16");

converterHorario("09:46");

converterHorario("21:12");

