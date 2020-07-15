class ProfileUserview {

    template(usuario) {
        return `<div class="container">
        <h1 id="titulo">  ${usuario.nome}</h1>
        <h2 id="login">  ${usuario.login}</h2>
        <img id="foto" src="${usuario.foto}" alt="">
        <p id="cidade"> Localidade:   ${usuario.cidade}</p>
        <p id="seguidores">  Seguidores: ${usuario.seguidores}</p>
        <p id="seguindo"> Seguindo: ${usuario.seguindo}</p>
        <p id="bio"> BIO: ${usuario.biografia}</p>
        <a id="perfil" href="${usuario.repositorio}">Perfil no Github</a>
        <p id="repositorio"> 
        <ul>
            <li> Total Repositorios: ${usuario.pagina}</li>
           
        </ul>
        </p>
     
                </div>
               `;
    }
}


// nome: this._nome,
// foto: this._foto,
// login: this._login,
// repositorio: this._repositorio,
// cidade: this._cidade,
// seguidores: this.seguidores,
// seguindo: this.seguindo,