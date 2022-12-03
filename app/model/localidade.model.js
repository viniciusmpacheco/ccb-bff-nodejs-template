class Localidade {
    #id
    #nome
    #bairro
    #cidade
    #estado
    #pais

    constructor(id, nome, bairro, cidade, estado, pais){
        this.#id = id
        this.#nome = nome
        this.#bairro = bairro
        this.#cidade = cidade
        this.#estado = estado
        this.#pais = pais
    }
    
    get id(){ return this.#id }
    set id(value){ this.#id = value }

    get nome(){ return this.#nome }
    set nome(value){ this.#nome = value }
    
    get bairro(){ return this.#bairro }
    set bairro(value){ this.#bairro = value }
    
    get cidade(){ return this.#cidade }
    set cidade(value){ this.#cidade = value }
    
    get estado(){ return this.#estado }
    set estado(value){ this.#estado = value }
    
    get pais(){ return this.#pais }
    set pais(value){ this.#pais = value }
}

module.exports = Localidade