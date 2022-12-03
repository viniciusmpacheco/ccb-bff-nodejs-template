class PontoFocal {
    #id
    #localidade
    #nome
    #telefone
    #encargo
    #status
    #anotacao

    constructor(id, localidade, nome, telefone, encargo, status, anotacao){
        this.#id = id
        this.#localidade = localidade
        this.#nome = nome
        this.#telefone = telefone
        this.#encargo = encargo
        this.#status = status
        this.#anotacao = anotacao
    }

    get id(){ return this.#id }
    set id(value){ this.#id = value }

    get id(){ return this.#id }
    set id(value){ this.#id = value }

    get localidade(){ return this.#localidade }
    set localidade(value){ this.#localidade = value }

    get nome(){ return this.#nome }
    set nome(value){ this.#nome = value }

    get telefone(){ return this.#telefone }
    set telefone(value){ this.#telefone = value }

    get encargo(){ return this.#encargo }
    set encargo(value){ this.#encargo = value }

    get status(){ return this.#status }
    set status(value){ this.#status = value }

    get anotacao(){ return this.#anotacao }
    set anotacao(value){ this.#anotacao = value }
}

module.exports = PontoFocal