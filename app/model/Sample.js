class Sample {
    #id
    #description

    constructor(id, description){
        this.#description = description
        this.#id = id
    }
    
    get description(){ return this.#description }
    set description(value){ this.#description = value}
    get id(){ return this.#id }
    set id(value){ this.#id = value}
}

module.exports = Sample