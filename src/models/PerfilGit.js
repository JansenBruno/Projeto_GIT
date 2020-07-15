class Profile {
    constructor(nome,foto, login,cidade,seguidores,seguindo,pagina,biografia,repositorio) {
        this._nome = nome;
        this._foto = foto
        this._login = login;
        this._cidade = cidade;
        this._seguidores = seguidores;
        this._seguindo = seguindo;
        this._pagina = pagina;
        this._biografia = biografia;
        this._repositorio = repositorio;

    }

    retornaProfile() {
        return {
            nome: this._nome,
            foto: this._foto,
            login: this._login,
            cidade: this._cidade,
            seguidores: this._seguidores,
            seguindo: this._seguindo,
            pagina: this._pagina,
            biografia: this._biografia,
            repositorio: this._repositorio,
        };
    }
}
