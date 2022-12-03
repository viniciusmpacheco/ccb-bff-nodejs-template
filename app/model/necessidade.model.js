class Necessidade {
    #id
    #jovem
    #tipo
    #status
    #descricao
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
    set id(value){ this.#jovem = value }

    get tipo(){ return this.#tipo }
    set id(value){ this.#tipo = value }

    get status(){ return this.#status }
    set id(value){ this.#status = value }

    get descricao(){ return this.#descricao }
    set id(value){ this.#descricao = value }

    get anotacao(){ return this.#anotacao }
    set id(value){ this.#anotacao = value }


}

module.exports = Necessidade