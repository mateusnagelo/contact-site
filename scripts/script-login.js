function logar() {

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;


    if (login == "suporte" && senha == "1") {
        // alert('Sucesso');

        location.href = "https://mcnsistemas.netlify.app/";

    } else {
        alert('Usuario ou senha incorretos')
    }


}