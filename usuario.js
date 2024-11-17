addEventListener("DOMContentLoaded", ()=>{
    var nameRecebido = localStorage.getItem("nome")
    document.getElementById("nome").innerHTML = nameRecebido;

    var mailRecebido = localStorage.getItem("email")
    document.getElementById("email").innerHTML = mailRecebido;

    var telRecebido = localStorage.getItem("tel")
    document.getElementById("tel").innerHTML = telRecebido;

    var cpfRecebido = localStorage.getItem("cpf")
    document.getElementById("cpf").innerHTML = cpfRecebido;

    var passRecebido = localStorage.getItem("senha")
    document.getElementById("senha").innerHTML = passRecebido;
})