class Visitante {
    #id
    #localidade
    #nome
    #telefone
    #encargo
    #anotacao

    constructor(id, localidade, nome, telefone, encargo, anotacao){
        this.#id = id
        this.#localidade = localidade
        this.#nome = nome
        this.#telefone = telefone
        this.#encargo = encargo
        this.#anotacao = anotacao
    }


    get id(){ return this.#id }
    set id(value){ this.#id = value }

    get localidade(){ return this.#localidade }
    set id(value){ this.#localidade = value }

    get nome(){ return this.#nome }
    set id(value){ this.#nome = value }

    get telefone(){ return this.#telefone }
    set id(value){ this.#telefone = value }

    get encargo(){ return this.#encargo }
    set id(value){ this.#encargo = value }

    get anotacao(){ return this.#anotacao }
    set id(value){ this.#anotacao = value }



}

module.exports = Visitante