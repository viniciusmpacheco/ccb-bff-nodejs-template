class Responsavel {
    #id
    #nome
    #encargo
    #responsabilidade
    #anotacao

    constructor(id, nome, encargo, responsabilidade, anotacao){
        this.#id = id
        this.#nome = nome
        this.#encargo = encargo
        this.#responsabilidade = responsabilidade
        this.#anotacao = anotacao
    }

    get id(){ return this.#id }
    set id(value){ this.#id = value }
    
    get nome(){ return this.#nome }
    set nome(value){ this.#nome = value }
    
    get encargo(){ return this.#encargo }
    set encargo(value){ this.#encargo = value }
    
    get responsabilidade(){ return this.#responsabilidade }
    set responsabilidade(value){ this.#responsabilidade = value }
    
    get anotacao(){ return this.#anotacao }
    set anotacao(value){ this.#anotacao = value }
}

module.exports = Responsavel