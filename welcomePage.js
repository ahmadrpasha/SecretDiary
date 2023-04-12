
var url = "http://localhost:3000/post";
var id = 0;
const passwordList = [];

function newUser() {
    myPassword = parseInt(prompt("Please create a number password:", ""));
    //passwordList.push(myPassword);
    $.post(
        url+'?data='+JSON.stringify
        ({ //compare the input name with the database
        'newPassword':myPassword,
        'action':'storePassword'
        }),
        response);

}

function returnUser() {
    returnPassword = parseInt(prompt("Please enter your password:",""));
    $.post(
        url+'?data='+JSON.stringify ({
            'action':'checkPassword',
            'returnPassword':returnPassword
        }),
        response);
}

//event's handler for servere's response
function response(data,status){
    var response = JSON.parse(data);
    console.log(data);
    if (response['action'] == 'storePassword') {
        alert("Password saved. Please proceed to open your diary");
    }
    else if (response['action'] == 'checkPassword') {
        list = response['passwordList'];
        for (var k = 0; k < list.length; k ++) {
            passwordList.push(list[k]);
        }
        if (checkPassword(returnPassword,passwordList) == true) {
            //alert(passwordList)
            alert("Welcome back!");
            window.location.href = "homepage.html";
        }
        else {
            //alert(passwordList);
            alert("The password does not match, please enter again or create a new diary!");
        }
    }
}

/*function homePage() {
    var newButton = document.createElement("button");
    $(newButton).attr("id", "openNav"); // nav button
    $(newButton).attr("p",Navigation);
    var newButton2 = document.createElement("button");
    $(newButton2).attr("id", "nEntry"); //new entry button
    $(newButton2).attr("p","NEW ENTRY");
    var newButton3 = document.createElement("button");
    $(newButton3).attr("id", "aEntries"); //all entry button
    $(newButton3).attr("p","ALL ENTRIES");

                if (checkPassword(logInPassword,passwordList) == true) {
                alert("Login successful!");
                window.location.href = "homepage.html";
            }
            else {
                alert("Value entered does not match");
        //weatherBoard();
            }
                    

*/
function checkPassword(value,array) {
    var match = false;
    for (var i = 0; i < array.length && match == false; i ++) {
        if (value == array[i]) {
            match = true;
        }
    }
    return match;
}
