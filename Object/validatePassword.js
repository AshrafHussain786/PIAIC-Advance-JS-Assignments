function passwordValidate() {
    var a = document.getElementById("pwd").value;
    if (a=="") {
        document.getElementById("message").innerHTML="** Please fill password....";
        return false;
    }
}