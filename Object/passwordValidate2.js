function passwordValidate2() {
    var a = document.getElementById("psw").value;
    var b = document.getElementById("psw-repeat").value;   

    if (a != b) {
        document.getElementById("message2").innerHTML = "** Both passwords should be same ....";
        return false;
    }
    if (a == b) {
        document.getElementById("message2").innerHTML = "";
        return true;
    }
}
