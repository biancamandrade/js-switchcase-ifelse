
if (true) {
    let idade = 26
    const nome = "Bianca"
    var teste = 40
    console.log (idade, nome)
}

let idade = 20
const nome = 'Alexia'
console.log (idade, nome, teste)

let num1 = 2

if (num1 > 0) {
    console.log ('Número é positivo')
}
else {
    console.log ('Número é negativo')
}

let num2 = 2

if (num2 % 2 ===  0) {
    console.log ('Número é par')
}
else {
    console.log ('Número é impar')
}

// DUAS FORMAS CORRETAS: ANO BISSEXTO É DIVISIVEL POR 4, MAS NÃO POR 100 E DIVISIVEIS 
// POR 400 TAMBEM SAO BISSEXTOS

let  ano = 2000

if (ano % 4 === 0  && ano % 100 !=0) {
    console.log ('Ano é bissexto')
}
else if (ano % 400 ===0) {
    console.log ('Ano é bissexto')
}

else {
    console.log ('Ano não é bissexto')
}

// OU ESSA

let  bissexto = 2021

if (bissexto % 4 === 0 || bissexto % 400 === 0 && bissexto % 100 !=0) {
    console.log ('Ano é bissexto')
}

else {
    console.log ('Ano não é bissexto')
}


