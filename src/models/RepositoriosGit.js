class Repositorio {
    constructor(nome, link) {
        this._nome = nome;
        this._link = link



    }


    retornaNewRepositorio() {
        return {
            nome: this._nome,
            link: this._link,
            
        };
    }
}
