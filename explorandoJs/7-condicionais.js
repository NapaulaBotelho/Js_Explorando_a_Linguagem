
const listaDeEstados = new Array (

    `Salvador`,
    `Rio de Janeiro`,
    `São Paulo`


)


const idadeUser = 16;
const estaAcompanhada = true;



if (idadeUser >= 18 || estaAcompanhada) {

    console.log("Pode comprar a passagem. Boa viagem!");

}else {
    console.log("Não podemos vender passagem para menor desacompanhado");
}


// if(idadeUser >= 18) {

//     console.log('Você é maior de idade, então podemos vender para você');
//     listaDeEstados.splice(1,1); 

// }else if (estaAcompanhada == true){

//     console.log('Você está acompanhado, então podemos vender para você');
//     listaDeEstados.splice(1,1); 


// }else {

//     console.log("Não podemos vender passagem para menor de idade desacompanhado");

// }

 
console.log(listaDeEstados);



