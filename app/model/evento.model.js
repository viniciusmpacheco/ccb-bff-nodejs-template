class Evento {
    #id
    #data
    #descricao
    #anotacao

    constructor(id, data, descricao, anotacao){
        this.#id = id
        this.#data = data
        this.#descricao = descricao
        this.#anotacao = anotacao
    }

    get id(){ return this.#id }
    set id(value){ this.#id = value }

    get data(){ return this.#data }
    set data(value){ this.#data = value }

    get descricao(){ return this.#descricao }
    set descricao(value){ this.#descricao = value }

    get anotacao(){ return this.#anotacao }
    set anotacao(value){ this.#anotacao = value }
}

module.exports = Evento