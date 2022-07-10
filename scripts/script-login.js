function logar() {

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;


    if (login == "suporte" && senha == "1") {
        // alert('Sucesso');

        location.href = "https://mcnsistemas.netlify.app/";

    } else {
        alert('Login ou senha inválidos')
    }

}

document.addEventListener("keypress", function(e) {

    if (e.key === "Enter") {


        const btn = document.querySelector("#send");

        btn.click();


    }

});

//olho


function mouseoverPass(obj) {
    var obj = document.getElementById('senha');
    obj.type = "text";
}

function mouseoutPass(obj) {
    var obj = document.getElementById('senha');
    obj.type = "password";
}