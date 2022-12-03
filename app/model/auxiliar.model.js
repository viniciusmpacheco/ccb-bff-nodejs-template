class Auxiliar {
    #id
    #nome
    #sexo
    #telefone
    #status
    #anotacao

    constructor(id, nome, sexo, telefone, status, anotacao){
        this.#id = id
        this.#nome = nome
        this.#sexo = sexo
        this.#telefone = telefone
        this.#status = status
        this.#anotacao = anotacao
    }
    
    get id(){ return this.#id }
    set id(value){ this.#id = value}

    get nome(){ return this.#nome }
    set nome(value){ this.#nome = value}

    get sexo(){ return this.#sexo }
    set sexo(value){ this.#sexo = value}

    get telefone(){ return this.#telefone }
    set telefone(value){ this.#telefone = value}

    get status(){ return this.#status }
    set status(value){ this.#status = value}
    
    get anotacao(){ return this.#anotacao }
    set anotacao(value){ this.#anotacao = value}
}

module.exports = Auxiliar