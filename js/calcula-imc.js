console.log("Fui Carregado.")

var titulo = document.querySelector(".titulo")
titulo.textContent = "Aparecida Nutricionista"
console.log(titulo.textContent)

var pacientes = document.querySelectorAll(".paciente");

pacientes.forEach((paciente) => {
var tdPeso = paciente.querySelector(".info-peso");
var tdAltura = paciente.querySelector(".info-altura");
var tdImc = paciente.querySelector(".info-imc");

var peso = tdPeso.textContent;
var altura = tdAltura.textContent;

var alturaEhValida = validaAltura(altura);
var pesoEhValido = validaPeso(peso);

if(!pesoEhValido){
    console.log("Peso inválido");
    tdImc.textContent = "Peso inválido!";
    pesoEhValido = false;
}
if(!alturaEhValida){
    console.log("Altura inválida");
    tdImc.textContent = "Altura inválida!";
    alturaEhValida = false;
}

if (alturaEhValida && pesoEhValido) {

    var imc = calculaImc(peso, altura);
    tdImc.textContent = imc;    
} else {
    paciente.classList.add(["paciente-invalido"])
    tdImc.textContent = "Altura e/ou peso inválidos!"
}
} )

function calculaImc(peso, altura){
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function validaPeso(peso) {
    if (peso > 0 && peso < 1000) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {
    if (altura > 0 && altura <= 3.00) {
        return true;
    } else {
        return false;
    }
}