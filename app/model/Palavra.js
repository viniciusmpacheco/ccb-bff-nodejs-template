class Palavra {
    #id
    #livro
    #referencia
    #titulo
    #exortacao
    #anotacao

    constructor(id, livro, referencia, titulo, exortacao, anotacao){
        this.#id = id
        this.#livro = livro
        this.#referencia = referencia
        this.#titulo = titulo
        this.#exortacao = exortacao
        this.#anotacao = anotacao
    }
    
    get id(){ return this.#id }
    set id(value){ this.#id = value}

    get livro(){ return this.#livro }
    set livro(value){ this.#livro = value}

    get referencia(){ return this.#referencia }
    set referencia(value){ this.#referencia = value}

    get titulo(){ return this.#titulo }
    set titulo(value){ this.#titulo = value}

    get exortacao(){ return this.#exortacao }
    set exortacao(value){ this.#exortacao = value}
    
    get anotacao(){ return this.#anotacao }
    set anotacao(value){ this.#anotacao = value}
}

module.exports = Palavra