class Person{
    constructor(name, idade){
        this.name = name,
        this.idade = idade
    }
    sayMyname(){
        return `My name is ${this.name}`
    }
    sayMyIdade(){
        return `My idade ${this.idade}`
    }
}
module.exports = {
    Person,
}