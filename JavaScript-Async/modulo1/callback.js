//Funções acietam qualquer tipo de dado como argumento
// function imprimirDado(dado){
//     console.log(dado)
// }
// imprimirDado(1) // number
// imprimirDado('texto') // string
// imprimirDado(true) // boolean
// imprimirDado({texto: "loree ipsun"}) // object

// função dentro de função
function imprimirDado(dado){
    console.log(dado())
}
imprimirDado(function(){
    return 'Ola mundo'
})