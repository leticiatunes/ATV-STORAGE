
function mascara_telefone() {
    //limitador
    var tel = document.getElementById("telefone").value
    console.log(tel)
    tel = tel.slice(0, 14) //(pode limitar a quantidade de char na entrada pelo java script)
    console.log(tel)
    document.getElementById("telefone").value = tel
    tel = document.getElementById("telefone").value.slice(0, 10)
    console.log(tel)

    //máscara
    var tel_formatado = document.getElementById("telefone").value
    if (tel_formatado[0] != "(") {
        if (tel_formatado[0] != undefined) {
            document.getElementById("telefone").value = "(" + tel_formatado[0];
        }
    }

    if (tel_formatado[3] != ")") {
        if (tel_formatado[3] != undefined) {
            document.getElementById("telefone").value = tel_formatado.slice(0, 3) + ")" + tel_formatado[3]
        }
    }

    if (tel_formatado[9] != "-") {
        if (tel_formatado[9] != undefined) {
            document.getElementById("telefone").value = tel_formatado.slice(0, 9) + "-" + tel_formatado[9]
        }
    }
    localStorage.setItem("tel", tel_formatado)
}

function mascara_cpf() {
    var cpf_formatado = document.getElementById("cpf").value
    if (cpf_formatado[3] != ".") {
        if (cpf_formatado[3] != undefined) {
            document.getElementById("cpf").value = cpf_formatado.slice(0, 3) + "." + cpf_formatado[3];
        }
    }

    if (cpf_formatado[7] != ".") {
        if (cpf_formatado[7] != undefined) {
            document.getElementById("cpf").value = cpf_formatado.slice(0, 7) + "." + cpf_formatado[7]
        }
    }
    if (cpf_formatado[11] != "-") {
        if (cpf_formatado[11] != undefined) {
            document.getElementById("cpf").value = cpf_formatado.slice(0, 11) + "-" + cpf_formatado[11]
        }
    }
localStorage.setItem("cpf", cpf_formatado)
}

function mascara_nome(){
    var nome_formatado = document.getElementById("name").value
    localStorage.setItem("nome", nome_formatado)
}

function mascara_email(){
    var email_formatado = document.getElementById("email").value
    localStorage.setItem("email", email_formatado)
}

function mascara_senha(){
    var senha_formatado = document.getElementById("senha").value
    localStorage.setItem("senha", senha_formatado)
}

var modal = document.querySelector("#modal");
var modalOverlay = document.querySelector("#modal1");
var closeButton = document.querySelector("#fecharbtn");
var openButton = document.querySelector("#button1");


function finalizar() {
    modal.classList.add("closed");
    modalOverlay.classList.add("closed");
};

function abrir() {
    modal.classList.remove("closed");
    modalOverlay.classList.remove("closed");
};

function iniciar() {
    window.alert("Seu cadastro está concluído!!")
}



