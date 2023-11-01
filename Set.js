const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

const nomesAtualizados = new Set(["Ana", "Clara", "Maria", "Maria", "João", "João", "João"]);
const listaNomesAtualizados = [...nomesAtualizados];

// const nomesAtualizados = [...new Set(nomes)];

console.log(nomesAtualizados);
console.log(listaNomesAtualizados);
