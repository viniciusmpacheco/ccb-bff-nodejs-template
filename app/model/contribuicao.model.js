class Contribuicao {
    #id
    #evento
    #data
    #descricao
    #tipo
    #contribuinte
    #valor
    #comprovante
    #anotacao

    constructor(id, jovem, tipo, status, descricao, anotacao){
        this.#id = id
        this.#jovem = jovem
        this.#tipo = tipo
        this.#status = status
        this.#descricao = descricao
        this.#anotacao = anotacao
    }

    get id(){ return this.#id }
    set id(value){ this.#id = value }

    get jovem(){ return this.#jovem }
    set jovem(value){ this.#jovem = value }

    get tipo(){ return this.#tipo }
    set tipo(value){ this.#tipo = value }

    get status(){ return this.#status }
    set status(value){ this.#status = value }

    get descricao(){ return this.#descricao }
    set descricao(value){ this.#descricao = value }

    get anotacao(){ return this.#anotacao }
    set anotacao(value){ this.#anotacao = value }
}

module.exports = Contribuicao