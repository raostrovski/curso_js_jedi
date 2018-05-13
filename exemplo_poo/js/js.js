//Funcional
function sejaBemVindo(){
    console.log("Seja Bem Vindo a Formação JavaScript Mestre Jedi");
}

console.log("Chamando a função seja bem vindo sejaBemVindo():");
sejaBemVindo();


//POO
var objProfessor = {
    nome: "Professor Madson Aguiar",
    curso: "Formação JavaScript Mestre Jedi",
    mistrarAula: function(){
        console.log("Ministrando aula de JavaScript");
    }
};

console.log("objProfessor");
console.log(objProfessor);

console.log("Acessando propriedades do objeto:");
console.log(objProfessor.nome);
console.log(objProfessor.curso);

console.log("Chamando o método do Objeto Professor");
console.log(objProfessor.mistrarAula());