class Auxiliar {
    #id
    #nome
    #telefone
    #status
    #anotacao

    constructor(id, nome, telefone, status){
        this.#id = id
        this.#nome = nome
        this.#telefone = telefone
        this.#status = status
    }
    
    get id(){ return this.#id }
    set id(value){ this.#id = value}

    get nome(){ return this.#nome }
    set nome(value){ this.#nome = value}

    get telefone(){ return this.#telefone }
    set telefone(value){ this.#telefone = value}

    get status(){ return this.#status }
    set status(value){ this.#status = value}
    
    get anotacao(){ return this.#anotacao }
    set anotacao(value){ this.#anotacao = value}
}

module.exports = Auxiliar