class Visita {
    #id
    #data
    #status
    #endereco
    #tipo
    #statusRetorno
    #anotacao

    constructor(id, data, status, endereco, tipo, statusRetorno, anotacao){
        this.#id = id
        this.#data = data
        this.#status = status
        this.#endereco = endereco
        this.#tipo = tipo
        this.#statusRetorno = statusRetorno
        this.#anotacao = anotacao
    }

    get id(){ return this.#id }
    set id(value){ this.#id = value }

    get id(){ return this.#id }
    set id(value){ this.#id = value }

    get data(){ return this.#data }
    set data(value){ this.#data = value }

    get status(){ return this.#status }
    set status(value){ this.#status = value }

    get endereco(){ return this.#endereco }
    set endereco(value){ this.#endereco = value }

    get tipo(){ return this.#tipo }
    set tipo(value){ this.#tipo = value }

    get statusRetorno(){ return this.#statusRetorno }
    set statusRetorno(value){ this.#statusRetorno = value }

    get anotacao(){ return this.#anotacao }
    set anotacao(value){ this.#anotacao = value }
}

module.exports = Visita