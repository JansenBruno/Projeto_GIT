class PerfilGitController {
    constructor() {

        throw new Error("Não precisa mexer ae pae")
    };


    static geraProfile() {

        let requisicao = new XMLHttpRequest();
        let inputUser = document.getElementById("inputUsuario")
        requisicao.open("GET", `https://api.github.com/users/${inputUser.value}`);

        requisicao.onload = () => {
            if (requisicao.status !== 200) {
                console.log(requisicao)
            }

            let divProfile = document.getElementById("usuarios");
            let viewProfileUser = new ProfileUserview();
            let result = JSON.parse(requisicao.responseText);
          

            let resultAPI = new Profile(
                result.name,
                result.avatar_url,
                result.login,
                result.location,
                result.followers,
                result.following,
                result.public_repos,
                result.bio,
                result.html_url,
            );
            console.log(resultAPI)

            divProfile.innerHTML = viewProfileUser.template(resultAPI.retornaProfile());
        }

        requisicao.send();
    }

}



