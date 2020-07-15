class RepositorioController {
    constructor() {

        throw new Error("Faz isso não, bro!")

    };


    static geraRepositorio() {

        let newRequisicao = new XMLHttpRequest();
        let inputUser = document.getElementById("inputUsuario")
        newRequisicao.open("GET", `https://api.github.com/users/${inputUser.value}/repos`);

            newRequisicao.onload = () => {
                let divRepositorio = document.getElementById("repositorios");
                let viewRepositorioUser = new RepositorioGitView();
                let result = JSON.parse(newRequisicao.responseText);




            for (let i = 0; i < result.length; i++) {
                let resultAPIREPO = new Repositorio(
                    result[i].name, 
                    result[i].clone_url
                    
                    
                    
                    );
                


                
                divRepositorio.innerHTML += viewRepositorioUser.template(resultAPIREPO.retornaNewRepositorio());
            }
            

        }

        newRequisicao.send();

    }
}
