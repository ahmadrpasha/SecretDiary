var url = "http://localhost:3000/post";
var bolD = false;
var italiC = false;
var underlinE = false;
var boldCounter = 0;

function bold() {
    boldCounter = boldCounter + 1;
    if (boldCounter % 2 != 0) {
        document.getElementById("inputPara").style.fontWeight = 700;
        bolD = true;
    } else {
        document.getElementById("inputPara").style.fontWeight = 10;
    }

}

var italicCounter = 0;

function italic() {
    //italiC = false;
    italicCounter = italicCounter + 1;
    if (italicCounter % 2 != 0) {
        document.getElementById("inputPara").style.fontStyle = "italic";
        italiC = true;
    } else {
        document.getElementById("inputPara").style.fontStyle = "normal";
    }

}

var underlineCounter = 0;

function underline() {
    //underlinE = false;
    underlineCounter = underlineCounter + 1;
    if (underlineCounter % 2 != 0) {
        document.getElementById("inputPara").style.textDecoration = "underline";
        underlinE = true;
    } else {
        document.getElementById("inputPara").style.textDecoration = "none";
    }

}

var sizeCounter = 0;

function size() {
    if (sizeCounter < 5) {
        switch (true){
            case (sizeCounter==0): 
               document.getElementById("inputPara").style.fontSize = "20px";
               break;
            case (sizeCounter==1): 
               document.getElementById("inputPara").style.fontSize = "30px";
               break;
            case (sizeCounter==2): 
               document.getElementById("inputPara").style.fontSize = "40px";
               break;  
            case (sizeCounter==3): 
               document.getElementById("inputPara").style.fontSize = "50px";
               break;
            case (sizeCounter==4): 
               document.getElementById("inputPara").style.fontSize = "60px";
               break;
            default:
               document.getElementById("inputPara").style.fontSize = "20px";
           }
        sizeCounter = sizeCounter + 1;  
    } else {
        sizeCounter = 0;
    }
}

function save() {
    content = document.getElementById("inputPara").value;
    $.post(url+'?data='+JSON.stringify({
        'action':'saveContent', //$.post(url+ is destination, the rest is data
        'content':content,
        'bold':bolD,
        'italic':italiC,
        'underline':underlinE
         //client's identity on the server, in JSON associative array
        }),
    response); 
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}
  
  /* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function response(data,status) {
    var response = JSON.parse(data);
    console.log(data);
    if (response['action'] == 'saveContent') {
        alert("Your entry has been saved!!");
    }
}


