class Jovem {
    #id
    #nome
    #encargo
    #pai
    #mae
    #responsavel
    #endereco
    #telefone
    #celular
    #idade
    #turma
    #status
    #batizado
    #selado
    #ultima_visita
    #anotacao

    constructor(id, nome, encargo, pai, mae, responsavel, endereco, telefone, celular, idade, turma, status, batizado, selado, ultima_visita, anotacao){
        this.#id = id
        this.#nome = nome
        this.#encargo = encargo
        this.#pai = pai
        this.#mae = mae
        this.#responsavel = responsavel
        this.#endereco = endereco
        this.#telefone = telefone
        this.#celular = celular
        this.#idade = idade
        this.#turma = turma
        this.#status = status
        this.#batizado = batizado
        this.#selado = selado
        this.#ultima_visita = ultima_visita
        this.#anotacao = anotacao
    }

    get id(){ return this.#id }
    set id(value){ this.#id = value }

    get nome(){ return this.#nome }
    set nome(value){ this.#nome = value }

    get encargo(){ return this.#encargo }
    set encargo(value){ this.#encargo = value }

    get pai(){ return this.#pai }
    set pai(value){ this.#pai = value }

    get mae(){ return this.#mae }
    set mae(value){ this.#mae = value }

    get responsavel(){ return this.#responsavel }
    set responsavel(value){ this.#responsavel = value }

    get endereco(){ return this.#endereco }
    set endereco(value){ this.#endereco = value }

    get telefone(){ return this.#telefone }
    set telefone(value){ this.#telefone = value }

    get celular(){ return this.#celular }
    set celular(value){ this.#celular = value }

    get idade(){ return this.#idade }
    set idade(value){ this.#idade = value }

    get turma(){ return this.#turma }
    set turma(value){ this.#turma = value }

    get status(){ return this.#status }
    set status(value){ this.#status = value }

    get batizado(){ return this.#batizado }
    set batizado(value){ this.#batizado = value }

    get selado(){ return this.#selado }
    set selado(value){ this.#selado = value }

    get ultima_visita(){ return this.#ultima_visita }
    set ultima_visita(value){ this.#ultima_visita = value }

    get anotacao(){ return this.#anotacao }
    set anotacao(value){ this.#anotacao = value }
}

module.exports = Jovem