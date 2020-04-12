function passwordValidate() {
    var a = document.getElementById("psw").value;
    
    if (a == "") {
        document.getElementById("message").innerHTML = "** Please fill password ....";
        return false;
    }

    if (a.length < 7) {
        document.getElementById("message").innerHTML = "** Please enter password of minimum 8 characters ....";
        return false;
    }
    if (a.length > 7) {
        document.getElementById("message").innerHTML = "";
        return true;
    }    
}
