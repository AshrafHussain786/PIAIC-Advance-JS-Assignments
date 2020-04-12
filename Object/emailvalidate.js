function checkemail(email, email2) {
    var x = document.forms[""]
    var y = document.getElementsByName("email2");
    if (x != y) {
        alert("email addresses should be same .......");
        return false;
    }
}

function ValidateEmail() {
    var text1 = document.getElementById('text1').value;
    console.log(text1);
    var xyz = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var abc = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i; 

    if (abc.test(text1)) {
        document.getElementById("lbltext").innerHTML="Valid Email Address";
        document.getElementById("lbltext").style.visibility="visible";
        document.getElementById("lbltext").style.color="green";
        return true;
    }
    else
    {
        document.getElementById("lbltext").innerHTML="Invalid Email Address";
        document.getElementById("lbltext").style.visibility="visible";
        document.getElementById("lbltext").style.color="red";
        return false;
    }

    

    // if (text1.match(xyz)) {
    //     // document.form1.text1.focus();
    //     return true;
    // }
    // else {
    //     alert("You have entered an invalid email address!");
    //     // document.form1.text1.focus();
    //     return false;
    // }

    text1.tes

// const emailField = document.getElementById('email');

}