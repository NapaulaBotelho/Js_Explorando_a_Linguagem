
const listaDeEstados = new Array (

    `Salvador`,
    `Rio de Janeiro`,
    `São Paulo`


)


const idadeUser = 16;

const estaAcompanhada = true;

let temPassagemComprada = false;

const destino = "Rio de Janeiro";

const podeComprar = idadeUser >= 18 || estaAcompanhada;

let contador = 0;
let destinoExiste = false;

while(contador<3){

    if(listaDeEstados[contador] == destino){
        destinoExiste = true;
        break
    }else {
        destinoExiste = false; //Já esta sendo informado isso n aprte de cima
    }


    contador += 1;


}

console.log("Destino existe: ", destinoExiste);

if(podeComprar && destinoExiste){
    console.log("Boa viagem!")
}else{
    console.log("Desculpe, tivemos um erro")
}

// for(let inicialização da variavel ; condição do loop ; altera o valor do contador)

    for(let contadorzinho = 0 ; contadorzinho < 3 ; contadorzinho++){

        if(listaDeEstados[contador] == destino){
            destinoExiste = true;
        }
        
    }