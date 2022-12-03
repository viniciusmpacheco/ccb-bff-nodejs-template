class ReuniaoDeJovens {
    #id
    #palavra
    #data
    #qtdMeninos
    #qtdMeninas
    #qtdMocos
    #qtdMocas
    #qtdRecitativos
    #qtdVisitantes
    #qtdMusicos
    #qtdRecitativosIndividuais
    #anotacao

    constructor(id, palavra, data, qtdMeninos, qtdMeninas, qtdMocos, qtdMocas, qtdRecitativos, qtdVisitantes, qtdMusicos, qtdRecitativosIndividuais, anotacao){
        this.#id = id
        this.#palavra = palavra
        this.#data = data
        this.#qtdMeninos = qtdMeninos
        this.#qtdMeninas = qtdMeninas
        this.#qtdMocos = qtdMocos
        this.#qtdMocas = qtdMocas
        this.#qtdRecitativos = qtdRecitativos
        this.#qtdVisitantes = qtdVisitantes
        this.#qtdMusicos = qtdMusicos
        this.#qtdRecitativosIndividuais = qtdRecitativosIndividuais
        this.#anotacao = anotacao
    }

    get id(){ return this.#id }
    set id(value){ this.#id = value }

    get palavra(){ return this.#palavra }
    set palavra(value){ this.#palavra = value }

    get data(){ return this.#data }
    set data(value){ this.#data = value }

    
    get qtdMeninos(){ return this.#qtdMeninos }
    set qtdMeninos(value){ this.#qtdMeninos = value }

    get qtdMeninas(){ return this.#qtdMeninas }
    set qtdMeninas(value){ this.#qtdMeninas = value }

    get qtdMocos(){ return this.#qtdMocos }
    set qtdMocos(value){ this  .#qtdMocos = value }

    get qtdMocas(){ return this.#qtdMocas }
    set qtdMocas(value){ this  .#qtdMocas = value }

    get qtdRecitativos(){ return this.#qtdRecitativos }
    set qtdRecitativos(value){ this.#qtdRecitativos = value }

    get qtdVisitantes(){ return this.#qtdVisitantes }
    set qtdVisitantes(value){ this .#qtdVisitantes = value }

    get qtdMusicos(){ return this.#qtdMusicos }
    set qtdMusicos(value){ this.#qtdMusicos = value }

    get qtdRecitativosIndividuais(){ return this.#qtdRecitativosIndividuais }
    set qtdRecitativosIndividuais(value){ this .#qtdRecitativosIndividuais = value }

    get anotacao(){ return this.#anotacao }
    set anotacao(value){ this.#anotacao = value }
}

module.exports = ReuniaoDeJovens