class Recitativo {
    #id
    #auxiliar
    #reuniaoDeJovens
    #livro
    #referencia
    #titulo
    #qtdRecitantes
    #tipoDeRecitativo
    #anotacao

    constructor(id, auxiliar, reuniaoDeJovens, livro, referencia, titulo, qtdRecitantes, tipoDeRecitativo, anotacao){
        this.#id = id
        this.#auxiliar = auxiliar
        this.#reuniaoDeJovens = reuniaoDeJovens
        this.#livro = livro
        this.#referencia = referencia
        this.#titulo = titulo
        this.#qtdRecitantes = qtdRecitantes
        this.#tipoDeRecitativo = tipoDeRecitativo
        this.#anotacao = anotacao
    }

    get id(){ return this.#id }
    set id(value){ this.#id = value }
    
    get auxiliar(){ return this.#auxiliar }
    set id(value){ this.#auxiliar = value }
    
    get reuniaoDeJovens(){ return this.#reuniaoDeJovens }
    set id(value){ this.#reuniaoDeJovens = value }
    
    get livro(){ return this.#livro }
    set id(value){ this.#livro = value }
    
    get referencia(){ return this.#referencia }
    set id(value){ this.#referencia = value }
    
    get titulo(){ return this.#titulo }
    set id(value){ this.#titulo = value }
    
    get qtdRecitantes(){ return this.#qtdRecitantes }
    set id(value){ this.#qtdRecitantes = value }
    
    get tipoDeRecitativo(){ return this.#tipoDeRecitativo }
    set id(value){ this.#tipoDeRecitativo = value }
    
    get anotacao(){ return this.#anotacao }
    set id(value){ this.#anotacao = value }
    
}

module.exports = Recitativo