//efeito do botão voltar ao Topo

function topo() {
    window.scrollTo(
        {
            top: 0, left: 0, behavior: 'smooth'
        }
    )
}
//Validação de Login

function login() {
    var logado = 0;
    var user = document.getElementById("user").value;
    var senha = document.getElementById("senha").value;

    if (user == 'admin' && senha == '123456') {
        window.location = "index.html";
        logado = 1;
    }

    if (logado == 0) {
        alert("Acesso Negado.Dados incorretos");
    }
}


//Ativar alert no botão cadastrar

function cadastro() {

    var cadastro = 0
    var usuario = document.getElementById("usuario").value;
    var email = document.getElementById("email").value;
    var senha2 = document.getElementById("senha2").value;

    if (usuario == '') {
        alert("Dados incompletos, por favor preencha o campo usuario!");
        cadastro = 1;
    }

    if (email == '') {
        alert("Dados incompletos, por favor preencha o campo email!");

        cadastro = 1;
    }

    if (senha2 == '') {
        alert("Dados incompletos, por favor preencha o campo senha!");

        cadastro = 1;
    }

    if (cadastro == 0) {
        alert("Seja Bem-Vindo a Game Mania!");
        window.location.href = "index.html"
    }
    
}


