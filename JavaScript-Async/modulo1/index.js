let aceitar = true
console.log('pedir uber')
const promessa = new Promise((resolve, reject) => {
    if(aceitar == true){
        aceitar = false
        return resolve('Pedido aceito')

    }
    return reject('Pedido negado')
    
})
promessa
.then(result => console.log(result))
.catch(error => console.log(error))
.finally(() => console.log('promessa concluida'))

console.log('aguardando')
