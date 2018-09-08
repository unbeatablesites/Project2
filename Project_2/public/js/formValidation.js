function validation() {
    var fullName, email, address, gender, skills, identityProof, terms;
    fullName = document.getElementById("fullName").value;
    email = document.getElementById("email").value;
    if isNaN(fullName) {
        text = "Input a name";
    }

    else if  isNaN(email)  {
        text = "Input an email"
    }

    else if isNaN(address) {
        text = "Input an address"
    }

}