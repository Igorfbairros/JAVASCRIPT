// Armazenando uma função em Variavel
const imprimirSoma = function(a, b){
    console.log(a + b);

}

imprimirSoma(2, 4);

// Armazenando um função arrow em uma variavel 
const soma = (a, b) => {
    return a + b;
}
console.log(soma(5, 5));

// retorno implicito 

const subtracao = (a, b=1) => a - b;

console.log(subtracao(3));

const imprimir2 = a => console.log(a);

imprimir2("Caracoles....");
