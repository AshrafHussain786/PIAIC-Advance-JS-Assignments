function dobirth(){
    var a = document.getElementById("birth").value;
    var d = new Date("25-03-2015");
    console.log(a);
    console.log(d);
    

    // if (a == "") {
    //     document.getElementById("message3").innerHTML = "** Please fill Date of Birth ....";
    //     return false;    
    // }

    // if (a.length != 10) {
    //     document.getElementById("message3").innerHTML = "** Please fill Date of Birth in dd-mm-yyyy formate ....";
    //     return false;    
    // }
    
    check = /^([0-9]{2})-([0-9]{2})-([0-9]{4})$/
    if (a.match(check)){
        // document.getElementById("message3").innerHTML = "Error: date format should be dd-mm-yyyy ....";
        return true;
    }
    else
    {
        document.getElementById("message3").innerHTML = "Error: date format should be dd-mm-yyyy ....";
        return false;
    }

    
    // if (a.length != 10) {
    //     document.getElementById("message3").innerHTML = "** Please fill Date of Birth in dd-mm-yyyy formate ....";
    //     return false;    
    // }

}