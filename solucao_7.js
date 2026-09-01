// Função
const meuForEach = (array, callback) => {
    for (let i of array) {
        callback(i);
    };
};

// Uso da função
let lista = ["Banana", "Maçã", "Laranja"]

meuForEach(lista, console.log)